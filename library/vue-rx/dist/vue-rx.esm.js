import { Subject, Subscription, fromEvent, Observable, NEVER } from 'rxjs';
import { share } from 'rxjs/operators';

var Vue$1;
var warn = function () {};

// NOTE(benlesh): the value of this method seems dubious now, but I'm not sure
// if this is a Vue convention I'm just not familiar with. Perhaps it would
// be better to just import and use Vue directly?
function install (_Vue) {
  Vue$1 = _Vue;
  warn = Vue$1.util.warn || warn;
}

// TODO(benlesh): as time passes, this should be updated to use RxJS 6.1's
// `isObservable` method. But wait until you're ready to drop support for Rx 5
function isObservable (ob) {
  return ob && typeof ob.subscribe === 'function'
}

function isObserver (subject) {
  return subject && (
    typeof subject.next === 'function'
  )
}

function defineReactive (vm, key, val) {
  if (key in vm) {
    vm[key] = val;
  } else {
    Vue$1.util.defineReactive(vm, key, val);
  }
}

function getKey (binding) {
  return [binding.arg].concat(Object.keys(binding.modifiers)).join(':')
}

var rxMixin = {
  created: function created () {
    var vm = this;
    var domStreams = vm.$options.domStreams;
    if (domStreams) {
      domStreams.forEach(function (key) {
        vm[key] = new Subject();
      });
    }

    var observableMethods = vm.$options.observableMethods;
    if (observableMethods) {
      if (Array.isArray(observableMethods)) {
        observableMethods.forEach(function (methodName) {
          vm[ methodName + '$' ] = vm.$createObservableMethod(methodName);
        });
      } else {
        Object.keys(observableMethods).forEach(function (methodName) {
          vm[observableMethods[methodName]] = vm.$createObservableMethod(methodName);
        });
      }
    }

    var obs = vm.$options.subscriptions;
    if (typeof obs === 'function') {
      obs = obs.call(vm);
    }
    if (obs) {
      vm.$observables = {};
      vm._subscription = new Subscription();
      Object.keys(obs).forEach(function (key) {
        defineReactive(vm, key, undefined);
        var ob = vm.$observables[key] = obs[key];
        if (!isObservable(ob)) {
          warn(
            'Invalid Observable found in subscriptions option with key "' + key + '".',
            vm
          );
          return
        }
        vm._subscription.add(obs[key].subscribe(function (value) {
          vm[key] = value;
        }, function (error) { throw error }));
      });
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}

var streamDirective = {
  // Example ./example/counter_dir.html
  bind: function bind (el, binding, vnode) {
    var handle = binding.value;
    var event = binding.arg;
    var streamName = binding.expression;
    var modifiers = binding.modifiers;

    if (isObserver(handle)) {
      handle = { subject: handle };
    } else if (!handle || !isObserver(handle.subject)) {
      warn(
        'Invalid Subject found in directive with key "' + streamName + '".' +
        streamName + ' should be an instance of Subject or have the ' +
        'type { subject: Subject, data: any }.',
        vnode.context
      );
      return
    }

    var modifiersFuncs = {
      stop: function (e) { return e.stopPropagation(); },
      prevent: function (e) { return e.preventDefault(); }
    };

    var modifiersExists = Object.keys(modifiersFuncs).filter(
      function (key) { return modifiers[key]; }
    );

    var subject = handle.subject;
    var next = (subject.next || subject.onNext).bind(subject);

    if (!modifiers.native && vnode.componentInstance) {
      handle.subscription = vnode.componentInstance.$eventToObservable(event).subscribe(function (e) {
        modifiersExists.forEach(function (mod) { return modifiersFuncs[mod](e); });
        next({
          event: e,
          data: handle.data
        });
      });
    } else {
      var fromEventArgs = handle.options ? [el, event, handle.options] : [el, event];
      handle.subscription = fromEvent.apply(void 0, fromEventArgs).subscribe(function (e) {
        modifiersExists.forEach(function (mod) { return modifiersFuncs[mod](e); });
        next({
          event: e,
          data: handle.data
        });
      })

      // store handle on element with a unique key for identifying
      // multiple v-stream directives on the same node
      ;(el._rxHandles || (el._rxHandles = {}))[getKey(binding)] = handle;
    }
  },

  update: function update (el, binding) {
    var handle = binding.value;
    var _handle = el._rxHandles && el._rxHandles[getKey(binding)];
    if (_handle && handle && isObserver(handle.subject)) {
      _handle.data = handle.data;
    }
  },

  unbind: function unbind (el, binding) {
    var key = getKey(binding);
    var handle = el._rxHandles && el._rxHandles[key];
    if (handle) {
      if (handle.subscription) {
        handle.subscription.unsubscribe();
      }
      el._rxHandles[key] = null;
    }
  }
}

function watchAsObservable (expOrFn, options) {
  var vm = this;
  var obs$ = new Observable(function (observer) {
    var _unwatch;
    var watch = function () {
      _unwatch = vm.$watch(expOrFn, function (newValue, oldValue) {
        observer.next({ oldValue: oldValue, newValue: newValue });
      }, options);
    };

    // if $watchAsObservable is called inside the subscriptions function,
    // because data hasn't been observed yet, the watcher will not work.
    // in that case, wait until created hook to watch.
    if (vm._data) {
      watch();
    } else {
      vm.$once('hook:created', watch);
    }

    // Returns function which disconnects the $watch expression
    return new Subscription(function () {
      _unwatch && _unwatch();
    })
  });

  return obs$
}

function fromDOMEvent (selector, event) {
  if (typeof window === 'undefined') {
    // TODO(benlesh): I'm not sure if this is really what you want here,
    // but it's equivalent to what you were doing. You might want EMPTY
    return NEVER
  }

  var vm = this;
  var doc = document.documentElement;
  var obs$ = new Observable(function (observer) {
    function listener (e) {
      if (!vm.$el) { return }
      if (selector === null && vm.$el === e.target) { return observer.next(e) }
      var els = vm.$el.querySelectorAll(selector);
      var el = e.target;
      for (var i = 0, len = els.length; i < len; i++) {
        if (els[i] === el) { return observer.next(e) }
      }
    }
    doc.addEventListener(event, listener);
    // Returns function which disconnects the $watch expression
    return new Subscription(function () {
      doc.removeEventListener(event, listener);
    })
  });

  return obs$
}

function subscribeTo (observable, next, error, complete) {
  var subscription = observable.subscribe(next, error, complete)
  ;(this._subscription || (this._subscription = new Subscription())).add(subscription);
  return subscription
}

/**
 * @see {@link https://vuejs.org/v2/api/#vm-on}
 * @param {String||Array} evtName Event name
 * @return {Observable} Event stream
 */
function eventToObservable (evtName) {
  var vm = this;
  var evtNames = Array.isArray(evtName) ? evtName : [evtName];
  var obs$ = new Observable(function (observer) {
    var eventPairs = evtNames.map(function (name) {
      var callback = function (msg) { return observer.next({ name: name, msg: msg }); };
      vm.$on(name, callback);
      return { name: name, callback: callback }
    });
    return function () {
      // Only remove the specific callback
      eventPairs.forEach(function (pair) { return vm.$off(pair.name, pair.callback); });
    }
  });

  return obs$
}

/**
 * @name Vue.prototype.$createObservableMethod
 * @description Creates an observable from a given function name.
 * @param {String} methodName Function name
 * @param {Boolean} [passContext] Append the call context at the end of emit data?
 * @return {Observable} Hot stream
 */
function createObservableMethod (methodName, passContext) {
  var vm = this;

  if (vm[methodName] !== undefined) {
    warn(
      'Potential bug: ' +
      "Method " + methodName + " already defined on vm and has been overwritten by $createObservableMethod." +
      String(vm[methodName]),
      vm
    );
  }

  var creator = function (observer) {
    vm[methodName] = function () {
      var args = Array.from(arguments);
      if (passContext) {
        args.push(this);
        observer.next(args);
      } else {
        if (args.length <= 1) {
          observer.next(args[0]);
        } else {
          observer.next(args);
        }
      }
    };
    return function () {
      delete vm[methodName];
    }
  };

  // Must be a hot stream otherwise function context may overwrite over and over again
  return new Observable(creator).pipe(share())
}

/* global Vue */

function VueRx (Vue) {
  install(Vue);
  Vue.mixin(rxMixin);
  Vue.directive('stream', streamDirective);
  Vue.prototype.$watchAsObservable = watchAsObservable;
  Vue.prototype.$fromDOMEvent = fromDOMEvent;
  Vue.prototype.$subscribeTo = subscribeTo;
  Vue.prototype.$eventToObservable = eventToObservable;
  Vue.prototype.$createObservableMethod = createObservableMethod;
}

// auto install
if (typeof Vue !== 'undefined') {
  Vue.use(VueRx);
}

export default VueRx;
