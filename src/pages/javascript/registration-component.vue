<template>
    <div id="todoItem">

    </div>
</template>
<script>
    var todoItem = Vue.extend({
        data: function() {
            return {
                todoData: this.todoData
            }
        },
        props: ['todoData'],
        template: `
                <ul>
                    <li v-for='(d, i) in todoData' :key="i">
                        {{ d.text }}
                    </li>
                </ul>
        `
    })
    new todoItem({
        propsData: {
            todoData: [
                { id: 0, text: '蔬菜1' },
                { id: 1, text: '奶酪1' },
                { id: 2, text: '随便其它什么人吃的东西1' }
            ]
        }
    }).$mount('#todoItem')
</script>
