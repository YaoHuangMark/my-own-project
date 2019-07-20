<template>
    <div class="main_js">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="vue nextTick" name="1">
                <nextTick></nextTick>
            </el-collapse-item>
            <el-collapse-item title="timeout-promise-async 执行顺序" name="2">
                <timeoutPromiseAsync></timeoutPromiseAsync>
            </el-collapse-item>
            <el-collapse-item title="Vue 生命周期钩子函数" name="3">
                <life-cycle></life-cycle>
            </el-collapse-item>
            <el-collapse-item title="slot prop" name="4">
                <current-user :users="users">
                    <template #uu='{ user }'>
                        {{user.name}}
                        <span v-if="user.age > 12">{{user.age}}</span>
                    </template>
                </current-user>
            </el-collapse-item>
            <el-collapse-item title="render 函数 构建组件" name="5">
                <render-heading :level="2">
                    render-heading
                </render-heading>
            </el-collapse-item>
            <el-collapse-item title="将原生事件绑定到组件" name="6">
                <base-input v-on:keyup.native="onFocus" :label="baseInput" v-model="baseInput"></base-input>
                <base-input-model v-model="baseInput">{{baseInput}}</base-input-model>
            </el-collapse-item>
            <el-collapse-item title="依赖注入 访问父级组件事件" name="7">
                <get-father>
                    <get-child></get-child>
                </get-father>
            </el-collapse-item>
            <el-collapse-item title="局部注册组件" name="8">
                <div id="todoItem"></div>
            </el-collapse-item>
            <el-collapse-item title="禁用特性继承" name="9">
                <base-input-noinherit v-model="baseInput" required placeholder="enter your name"></base-input-noinherit>
            </el-collapse-item>
            <el-collapse-item title="自定义组件的 v-model" name="10">
                <!-- <base-checkbox v-model="lovingValue">{{lovingValue}}</base-checkbox> -->
                <base-checkbox-model v-model="lovingValue">{{lovingValue}}</base-checkbox-model>
                {{new Date() | formatDT}}
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import Vue from 'vue'
import nextTick from './javascript/nextTick'
import timeoutPromiseAsync from './javascript/timeout-promise-async'
import lifeCycle from './javascript/lifeCycle'
import currentUser from './javascript/currentUser'
import renderHeading from './javascript/render-heading'
import baseInput from './javascript/base-input'
import baseInputModel from './javascript/base-input-model'
import getFather from './javascript/get-father'
import getChild from './javascript/get-child'
import baseInputNoinherit from './javascript/base-input-noinherit'
import baseCheckbox from './javascript/base-checkbox'
import baseCheckboxModel from './javascript/base-checkbox-model'
export default {
    components: {
        nextTick,
        timeoutPromiseAsync,
        lifeCycle,
        currentUser,
        renderHeading,
        baseInput,
        baseInputModel,
        getChild,
        getFather,
        baseInputNoinherit,
        baseCheckbox,
        baseCheckboxModel
    },
    data: function() {
        return {
            lovingValue: true,
            baseInput: '123',
            activeNames: [],
            users: [{name:'h',age: 12},{name:'y', age: 18}]
        }
    },
    methods: {
        onFocus () {
            console.log("原生事件已生效")
        }
    },
    mounted() {

        var todoItem = Vue.extend({
            data: function() {
                return {
                    todoDatas: this.todoData
                }
            },
            props: ['todoData'],
            template: `
                    <ul>
                        <li v-for='(d, i) in todoDatas' :key="i">
                            {{ d.text }}
                        </li>
                    </ul>
            `
        })
        new todoItem({
            propsData: {
                todoDatas: [
                    { id: 0, text: '蔬菜1' },
                    { id: 1, text: '奶酪1' },
                    { id: 2, text: '随便其它什么人吃的东西1' }
                ]
            }
        }).$mount('#todoItem')
    }
}

</script>
<style lang="scss" scoped>
    .main_js {
        padding: 20px;
        .el-collapse {
            border: 1px solid #EBEEF5;
            /deep/ .el-collapse-item__header {
                padding: 20px;
            }
        }
    }
</style>

