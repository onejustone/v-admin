<template lang="pug">
  div.menu-item-wrap
    template(v-for="item in routes" v-if="!item.hidden && item.children")
      router-link(v-if="item.children.length === 1 && !item.children[0].children" :to="item.children[0].path" :key="item.name")
        el-menu-item(:index="item.children[0].path")
          template(slot="title")
            i(v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon" class="submenu-title-noDropdown")
            span(v-if="item.children[0].meta && item.children[0].meta.title") {{ item.children[0].meta.title }}

      el-submenu(v-else :index="item.name || item.path" :key="item.path")
        template(slot="title" v-if="item.meta && item.meta.title")
          i(v-if="item.meta && item.meta.icon" :class="item.meta.icon")
          span(slot="title") {{ item.meta.title }}

        template(v-for="child in item.children")
          side-bar-item(
            v-if="child.children"
            :key="child.name"
            :routes="[child]"
            :depth="depth + 1"
          )

          router-link(v-else :key="child.name" :to="child.path")
            el-menu-item(
              :key="child.path"
              :index="child.path"
            )
             i(v-if="child.meta && child.meta.icon" :class="child.meta.icon")
             span(slot="title" v-if="child.meta && child.meta.title") {{ child.meta.title }}
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
      },

      depth: {
        type: Number,
        default: 1
      }
    }
  }
</script>
