<template lang="pug">
  div.menu-item-wrap
    template(v-for="item in routes" v-if="!item.hidden")
      router-link(v-if="!item.children" :to="item.path" :key="item.name")
        el-menu-item(:index="item.path")
          i(v-if="item.meta && item.meta.icon" :icon="item.icon")
          span(v-if="item.meta && item.meta.title") {{ item.meta.title }}

      el-submenu(v-else :index="item.name || item.path" :key="item.path")
        template(slot="title" v-if="item.meta && item.meta.title")
          i(v-if="item.meta && item.meta.icon" :icon="item.meta.icon")
          span {{ item.meta.title }}

        template(v-for="child in item.children")
          side-bar-item(v-if="child.children" :key="child.name" :routes="[child]")
          router-link(v-else :key="child.name" :to="`${item.path}/${child.name}`")
            el-menu-item(
              :index="`${item.path}/${child.name}`"
            )
             i(v-if="child.meta && child.meta.icon")
             span(v-if="child.meta && child.meta.title") {{ child.meta.title }}
</template>

<script>
  export default {
    name: 'SideBarItem',

    props: {
      routes: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>