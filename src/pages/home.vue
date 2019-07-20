<template>
  <!-- <v-layout row wrap> -->
    <!-- <v-flex xs12> -->
    <div>
      <v-dialog v-model="dialog" max-width="500px" :fullscreen="$vuetify.breakpoint.xsOnly">
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="text-xs-left">
          <v-btn color="primary" dark class="mb-2" @click.stop="dialog = true">新增监控</v-btn>
          <v-btn color="primary" dark class="mb-2" @click.stop="closeLoad">close</v-btn>
          <v-btn color="primary" dark class="mb-2" @click.stop="addLoad">add load</v-btn>
          <v-btn color="primary" dark class="mb-2" @click.stop="addMsg">add msg</v-btn>
          <v-btn color="primary" dark class="mb-2" @click.stop="phoneMsg">send phonemsg{{num}}</v-btn>
          <v-btn color="primary" dark class="mb-2" @click.stop="routeCom">路由组件传参</v-btn>
          <router-link :to="{name: 'menu',params:{id:'123'}}">路由组件传参</router-link>
      </div>
      <v-data-table :headers="headers" :items="desserts" class="elevation-1" rows-per-page-text="每页显示">
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.calories }}</td>
          <td class="text-xs-center">{{ props.item.fat }}</td>
          <td class="text-xs-center">{{ props.item.carbs }}</td>
          <td class="text-xs-center">{{ props.item.protein }}</td>
          <td class="text-xs-center">{{ props.item.iron }}</td>
          <td class="text-xs-center justify-center layout px-0">
            <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
          </td>
        </template>
      </v-data-table>
      <div id="echart" style="width:200px; height:200px"></div>
      <!-- <v-progress-circular
        indeterminate
        color="primary"
        value="true"
        size=50
        ></v-progress-circular> -->
        
        <!-- nextTick -->
        <!-- <nextTick></nextTick> -->
    </div>
    <!-- </v-flex> -->
  <!-- </v-layout> -->
</template>
<script>
import { routes } from "../routes/index.js";
import Axios from 'axios';
import { sendMessage } from '../api/request-r.js';
import api from '../api/index.js'
import echarts from 'echarts'
import nextTick from './javascript/nextTick'
export default {
  components: {
    nextTick
  },
  data() {
    return {
      num: 0,
      dialog: false,
      collapse: null,
      routes: routes,
      headers: [
        { text: "任务日期", value: "calories", align: 'center' },
        { text: "任务名称", value: "fat", align: 'center' },
        { text: "处理开始时间", value: "carbs", align: 'center' },
        { text: "处理结束时间", value: "protein", align: 'center' },
        { text: "任务状态", value: "iron", align: 'center' },
        { text: "操作", value: "iron", align: 'center' }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      options : {
        xAxis: {
            type: 'category',
            data: ['Mon','Tue']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932],
            type: 'line'
        }]
      }
    };
  },
  computed: {
    formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        }
    },
  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },

    closeLoad: function () {
      this.$loading({
          showload: false
      })
    },
    addLoad: function () {
      this.$loading({
          showload: true
      })
    },
    addMsg: function () {
      this.$message({
          text: 'new msg'
      })
    },
    phoneMsg: function () {
        api.sendMessage({ enterprisePhone: '13828765422' }).then(data => {
            if (data.status === 200) {
                this.num = data.data.num
            }
        })
    },
    routeCom() {
      this.$router.push({name: 'menu',params: {id: '123'}})
    }
  },
  mounted() {
      Axios.get('/users').then( data => {
          console.log(111111);
          console.log(data);
      })
      var echart1 = echarts.init(document.getElementById('echart'));
      echart1.setOption(this.options,true)

      var math = require('./模块化/math.js');
      console.log(math.add(2,3))
  }
};
</script>

<style lang="scss" scoped>
.tac {
  width: 100%;
  height: 100%;
}
.side-bar {
  height: 100%;
}
@media screen and (max-width: 460px) {
  .side-bar {
    display: none;
  }
}
.el-menu-vertical-demo {
  height: 100%;
  text-align: left;
  border-right: solid 1px #e6e6e6;
}
.el-menu-vertical-demo .el-menu {
  border-right: none;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
.main-menu {
  width: 200px;
  height: 500px;
}
.main-content {
  flex: 1;
}
</style>
