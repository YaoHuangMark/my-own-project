<template>
  <v-navigation-drawer v-model="draw" fixed clipped app >
      <v-list>
        <v-divider></v-divider>
        <template v-for="item in routes">
            <v-list-tile :key="item.path" v-if="!item.children" :class="{'active' : item.path === route.path}">
              <v-list-tile-content>
                <v-list-tile-title>
                    <router-link :to="item"><icon-svg :iconClass="app"/>{{item.name}}</router-link>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-group v-if="item.children" :key="item.path" no-action value="true">
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title><icon-svg iconClass="database"/>{{ item.name }}</v-list-tile-title>
                </v-list-tile>
              </template>

              <v-list-tile v-for="subItem in item.children" :key="subItem.path" :class="{ active: subItem.path === $route.path }">
                <v-list-tile-title @click="jumpTo(subItem.path)">{{ subItem.name }}</v-list-tile-title>
              </v-list-tile>
            </v-list-group>
            <!-- <v-list-group
                no-action
                sub-group
                value="true"
                v-for="(child, cindex) in item.children"
                :key="cindex"
                v-if="!item.children"
            >
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>
                          <router-link :to="child.path">{{child.name}}</router-link>
                        </v-list-tile-title>
                    </v-list-tile>
                </template>

                <v-list-tile
                    v-for="(admin, i) in child.childrens"
                    :key="i"
                >
                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    <v-list-tile-action>
                      <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-group> -->
        </template>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
import '@/icons/svg/database.svg'
export default {
  name: "menuList",
  data() {
    return {
      draw: null,
      routes: [],
      admins: [
            ['Management', 'people_outline'],
            ['Settings', 'settings']
        ],
      prodata: this.propsData
    }
  },
  props: {
      propsData: {
          type: Boolean
      }
  },
  methods: {
      drawChange: function() {
          this.draw = !this.draw;
      },
      addRoutes(items) {
        item.s
      }, 
      jumpTo (path) {
          this.$router.push(path)
      },
      addLabel (fItems) {
        let _that = this
        var res = fItems.filter(function f(o) {
          if (o.isHidden === false) {
            if(o.children){
              o.children = _that.addLabel(o.children); 
            }
            return true 
          } else {
            return false
          }
        });
        return res
      }
  },
  created() {
    this.routes = this.addLabel(this.$router.options.routes)
  }
};
</script>
<style lang="scss">
.v-list__group__items.v-list__group__items--no-action .v-list__tile {
    border-bottom: 1px solid rgba(0,0,0,.12);
    cursor: pointer;
    &:hover {
      background-color: #00000047;
      color: #fff;
    }
}
</style>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
  text-align: left;
  border-right: solid 1px #e6e6e6;
}
.el-menu-vertical-demo .el-menu {
  border-right: none;
}
.v-list {
  padding: 0;
}
.active {
  color: #19d28a;
}
</style>

