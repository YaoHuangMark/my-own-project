<template>
    <v-toolbar app absolute clipped-left class="blue white--text">
        <v-toolbar-side-icon @click="showSideBar" color="#fff"></v-toolbar-side-icon>
        <v-toolbar-title>H Y</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left dark>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(item, i) in items"
                :key="i"
                @click="getOut"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>
<script>
import Axios from 'axios'
export default {
    name: 'toolbar',
    data: () => ({
        items: [
            { title: '退出登录' }
        ]
    }),
    methods: {
        showSideBar() {
            this.$emit('showSideBar')
        },
        getOut: function () {
            this.$loading({
                showload: true
            })
            Axios.get('/loginout').then(data => {
              if(data.status === 200) {
                this.$loading({
                    showload: false
                })
                sessionStorage.removeItem('token');
                this.$router.push('/')
              }
            })
        }
    }
}
</script>

