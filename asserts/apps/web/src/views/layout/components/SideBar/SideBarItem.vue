<template lang="pug">
  div.menu-item-wrap
    template(v-for="(item, topIndex) in routes")
        //- 只有一个子路由，并且该子路由下没有子路由，则只显示该 route 下的第一个子路由
        router-link(v-if="item.children && item.children.length === 1 && !item.children[0].children" :to="item.children[0].path" :key="item.name")
          el-menu-item(:index="item.children[0].path")
            template(slot="title")
              i(v-if="item.children[0].meta && item.children[0].meta.icon" :class="item.children[0].meta.icon" class="submenu-title-noDropdown")
              span(v-if="item.children[0].meta && item.children[0].meta.title") {{ item.children[0].meta.title }}

        //- 该路由下存在多个子路由
        el-submenu(v-else-if="item.children && item.children.length" :index="item.name || item.path" :key="item.path")
          template(slot="title" v-if="item.meta && item.meta.title")
            i(v-if="item.meta && item.meta.icon" :class="item.meta.icon")
            span(slot="title") {{ item.meta.title }}

          template(v-for="child in item.children")
            side-bar-item(
              v-if="child.children && child.children.length"
              :key="child.name"
              :routes="[child]"
              :depth="depth + 1"
            )

            router-link(v-else :key="child.name" :to="child.path")
              el-menu-item(
                :key="child.path"
                :index="child.path"
              )
                span(slot="title" v-if="child.meta && child.meta.title") {{ child.meta.title }}

        //- 无子路由存在，并且 path 存在的
        router-link(v-else-if="item.path" :key="item.name" :to="item.path")
          el-menu-item(
            :key="item.path"
            :index="item.path"
          )
            span(slot="title" v-if="item.meta && item.meta.title") {{ item.meta.title }}
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
