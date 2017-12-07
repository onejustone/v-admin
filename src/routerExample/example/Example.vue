<template lang="pug">
  section(class="example")
    h2 {{ info }}
    test(:isShow="true")
    first
    button(@click="main") run promiseAll
    //- component(:is="currentView")
</template>

<script>
  import First from './First.vue'

  export default {
    name: 'Example',

    props: {
      info: String
    },

    components: {
      First
    },

    data () {
      return {
        currentView: First
      }
    },

    methods: {
      lodaComponents () {
        try {
          console.log(this.First)
          import('./Second.vue').then(m => {
            console.log(m)
            this.currentView = m
          })
        } catch (e) {
          console.error(e)
        }
      },

      timerPromisefy (delay) {
        return new Promise((resolve, reject) => {
          setTimeout(_ => {
            resolve(delay)
          }, delay)
        })
      },

      main () {
        Promise.race([
          this.timerPromisefy(1),
          this.timerPromisefy(2),
          this.timerPromisefy(3),
          this.timerPromisefy(4)
        ]).then(value => console.log(value))

        const winnerPromise = new Promise((resolve, reject) => {
          setTimeout(_ => {
            console.log('i am winnder')
            resolve()
          })
        })

        const loserPromise = new Promise((resolve, reject) => {
          setTimeout(_ => {
            console.log('i am loser')
            resolve()
          })
        })

        Promise.race([winnerPromise, loserPromise])
      }
    },
    mounted () {
      // this.lodaComponents()
    }
  }
</script>
