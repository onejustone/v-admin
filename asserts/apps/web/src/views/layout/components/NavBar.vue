<template lang="pug">
  //- section(class="nav-bar")
    //- div.toggle-menu 面包屑
    //-  span {{ navItemList }}
    //- div(v-for="item in navItemList") {{ item }}
  el-breadcrumb(class="app-breadcrumb" separator="/")
    transition-group
      el-breadcrumb-item(
        v-for="(item,index)  in navItemList"
        :key="item.path"
        v-if='item.meta.title'
      )
        span(
          v-if='item.redirect==="noredirect"||index==navItemList.length-1'
          class="no-redirect") {{ item.meta.title }}
        router-link(v-else :to="item.redirect||item.path") {{ item.meta.title }}

    //- el-button(
    //-   @click="init"
    //- ) restart
</template>

<script>
  // import LxBreadcrumb from '../../../components/breadcrumb'
  import { deepClone } from 'util'

  export default {
    name: 'NavBar',

    components: {
      // LxBreadcrumb
    },

    data () {
      return {
        navItemList: null
      }
    },

    created () {
      this.getBreadcrumb()
    },

    watch: {
      $route: 'getBreadcrumb'
    },

    methods: {
      getBreadcrumb () {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0]

        // const jsonString = JSON.stringify(first);
        // const parseObj = JSON.parse(jsonString);

        // console.log(parseObj);

        if (first && first.name !== 'home') {
          // matched = [{ path: '/web/dashboard', meta: { title: '首页' }}, ...matched]
          matched = [{ path: '/web/dashboard', meta: { title: '首页' }}].concat(matched)
        }

        // console.log(matched)
        this.navItemList = matched
        // console.log(this.navItemList);
      },

      init () {
        async function async1() {
            console.log('async1 start')
            await async3()
            console.log('async1 end')
        }

        async function async2() {
          console.log('async2')
        }

        async function async3() {
          console.log('async3 start')
          await delay()
          console.log('async3 end')
        }

        async function delay () {
          await new Promise((resolve, reject) =>
            {
              console.log('delay1');
            }
         );
        }

        setTimeout(() => {
          console.log('setTimeout');
        }, 0);

        async1()

        new Promise ( function ( resolve ) {
          console.log( 'promise1')
          resolve();
        }).then(
          function () { console.log( 'promise2')
        })

        console.log('script start')

        // 调用 async2 的情况
        // macrotask1 'async1 start' => 'async2' => 'promise1' => 'script start' --|micromask|-- 'async1 end' => promise2'
        // macrotask2 'setTimeout'

        // 调用 async3 的情况
        // macrotask1 'async1 start' => 'async3 start' => 'delay1' => 'promise1' => 'script start'
        //    --|micromask|-- promise2
        // macrotask2 'setTimeout'
        // macrotask3 setTimeout2  => async3 end => async1 end

        // 调用 async4 的情况
        // macrotask1 'async1 start' => 'async3 start' => 'delay1' => 'promise1' => 'script start'
        //    --|micromask|-- promise2 => async3 end => async1 end
        // macrotask2 'setTimeout'
        // https://mp.weixin.qq.com/s/mT5XvdMnlw0Qt8EBvgDtYQ
        // https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5be04a8e6fb9a04a072fd2cd
      }
    }
  }
</script>
