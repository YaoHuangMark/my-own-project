<template>
    <div class="bkg">
        <v-layout align-center justify-center class="h-full">
            <v-flex xs12 md4 id="myflex">
                <v-card height="100%">
                    <form style="padding: 40px">
                        <v-text-field
                            v-model="person.name"
                            v-validate="'required|max:10'"
                            :error-messages="errors.collect('name')"
                            label="用户名"
                            data-vv-name="name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="person.password"
                            v-validate="'required|max:10'"
                            :error-messages="errors.collect('password')"
                            label="密码"
                            data-vv-name="password"
                            type="password"
                            required
                        ></v-text-field>
                        <v-checkbox
                            v-model="checkbox"
                            label="记住密码"
                            type="checkbox"
                        ></v-checkbox>

                        <v-btn @click="submit" color="success">登录</v-btn>
                        <v-btn @click="clear">清空</v-btn>
                    </form>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
  import Vue from 'vue'
  import Axios from 'axios'
  import App from '../App.vue'
  import { mapGetters, mapActions } from 'vuex'
  import VueI18n from 'vue-i18n'
  import md5 from 'MD5'
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      checkbox: true,
      dictionary: {
        attributes: {
          password: '密码'
          // custom attributes
        },
        custom: {
          name: {
            required: () => '用户名不能为空',
            max: '用户名长度不能超过10位'
            // custom messages
          }
        }
      }
    }),
    watch: {
      checkbox: function(val) {
        // if(val === false) this.clearPerson
      }
    },
    computed: {
      ...mapGetters({
        person: 'getPerson'
      }),
      // ...mapActions([
      //   'clearPerson'
      // ])
    },


    mounted () {
      this.$validator.localize('zh_CN', this.dictionary)
      if(this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) {
        document.getElementById('myflex').style.height = '100%'
      }
      console.log('mounted')
      console.log(this.$listeners)
      console.log(this.person)
    },

    methods: {
      // 登录
      submit () {
        let _this = this;
        this.$validator.validateAll().then((status) => {
            if(status === true) {
              this.$loading({
                  showload: true
              })
              let person_c = {..._this.person}
              person_c.password = md5(person_c.password)
              Axios.post('/login', person_c).then( response => {
                  this.$loading({
                      showload: false
                  })
                  if(response.status === 200) {
                    sessionStorage.setItem('token', 'hy')
                    if(this.$route.query.redirect){
                        let redirect = this.$route.query.redirect;
                        this.$router.push(redirect);
                    }else{
                        this.$router.push('/Vue');
                    }
                  } else if(response.status === 201) {
                    this.$message({
                        text: response.data.msg
                    })
                  }
              })
            }
        })
      },
      clear () {
        // this.person.name = ''
        // this.person.password = ''
        // this.$validator.reset()
      }
    }
  }
</script>
<style lang="scss" scoped>
.bkg {
  height: 100%;
}
.h-full {
  height: 100%;
}
// @media (max-width: 560px) {
//   .flex.xs12 {
//     height: 100%;
//   }
// }
</style>

