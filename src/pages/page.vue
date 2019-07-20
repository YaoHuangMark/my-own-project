<template>
    <v-app>
        <toolbar @showSideBar="showSideBar"></toolbar>
        <menuList ref="menu" :props-data="show_menu"></menuList>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>
<script>
import menuList from "../components/menuList.vue";
import toolbar from "../components/toolbar";
export default {
    name: 'page',
    components: {
        menuList,
        toolbar
    },
    data: () => ({
        show_menu: false
    }),
    methods: {
        showSideBar: function() {
            this.$refs.menu.drawChange();
            this.show_menu = !this.show_menu
      }
    }
}
</script>
