<template>
    <div id="app">
      <v-app>
        <router-view></router-view>
      </v-app>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
      return {
        show_menu: false
      }
    },
    methods: {
      showSideBar: function() {
        this.$refs.menu.drawChange();
        this.show_menu = !this.show_menu
      }
    },
    props: {
      source: String
    },
    mounted () {
      console.log(this.$vuetify.breakpoint)
    },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,body {
  height: 100%;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.content {
  margin-top: 64px;
}
.main {
  margin-left: 300px;
}
.hide_menu {
  margin-left: 0;
}
@media screen and (max-width: 1280px) {
  .main {
    margin-left: 0;
  }
}
</style>
