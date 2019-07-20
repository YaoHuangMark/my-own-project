<template>
    <div>
        <!-- <ul>
            <li v-for="(item,index) in list1" :key="index">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,index) in list2" :key="index">{{item}}</li>
        </ul>
        <ol>
            <li v-for="(item,index) in list3" :key="index">{{item}}</li>
        </ol>
        <ol>
            <li v-for="(item,index) in list4" :key="index">{{item}}</li>
        </ol>
        <ol>
            <li v-for="(item,index) in list5" :key="index">{{item}}</li>
        </ol> -->

        <ul>
            <li v-for="(item,index) in messages" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list1: [],
            list2: [],
            list3: [],
            list4: [],
            list5: [],
            messages: []
        }
    },
    created() {
        this.composeList12()
        this.composeList34()
        this.composeList5()
        this.$nextTick(function() {
            // DOM 更新了
            this.messages.push('finished test ' + new Date().toString())
            this.messages.push(document.querySelectorAll('li').length)
        })
    },
    methods: {
        composeList12() {
            let me = this
            let count = 10000

            for (let i = 0; i < count; i++) {
                me.$set(me.list1, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            this.messages.push('finished list1 ' + new Date().toString())

            for (let i = 0; i < count; i++) {
                me.$set(me.list2, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            this.messages.push('finished list2 ' + new Date().toString())
            console.log('finished list2 ' + new Date().toString())

            this.$nextTick(function() {
                // DOM 更新了
                this.messages.push('finished tick1&2 ' + new Date().toString())
                this.messages.push(document.querySelectorAll('li').length)
                console.log('finished tick1&2 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })
        },
        composeList34() {
            let me = this
            let count = 10000

            for (let i = 0; i < count; i++) {
                me.$set(me.list3, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            this.messages.push('finished list3 ' + new Date().toString())
            console.log('finished list3 ' + new Date().toString())

            this.$nextTick(function() {
                // DOM 更新了
                this.messages.push('finished tick3 ' + new Date().toString())
                this.messages.push(document.querySelectorAll('li').length)
                console.log('finished tick3 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })

            setTimeout(me.setTimeout1, 0)
        },
        setTimeout1() {
            let me = this
            let count = 10000

            for (let i = 0; i < count; i++) {
                me.$set(me.list4, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            this.messages.push('finished list4 ' + new Date().toString())
            console.log('finished list4 ' + new Date().toString())

            me.$nextTick(function() {
                // DOM 更新了
                this.messages.push('finished tick4 ' + new Date().toString())
                this.messages.push(document.querySelectorAll('li').length)
                console.log('finished tick4 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })
        },
        composeList5() {
            let me = this
            let count = 10000

            this.$nextTick(function() {
                // DOM 更新了
                this.messages.push('finished tick5-1 ' + new Date().toString())
                this.messages.push(document.querySelectorAll('li').length)
                console.log('finished tick5-1 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })

            setTimeout(me.setTimeout2, 0)
        },
        setTimeout2() {
            let me = this
            let count = 10000

            for (let i = 0; i < count; i++) {
                me.$set(me.list5, i, 'I am a 测试信息～～啦啦啦' + i)
            }
            this.messages.push('finished list5 ' + new Date().toString())
            console.log('finished list5 ' + new Date().toString())

            me.$nextTick(function() {
                // DOM 更新了
                this.messages.push('finished tick5 ' + new Date().toString())
                this.messages.push(document.querySelectorAll('li').length)
                console.log('finished tick5 ' + new Date().toString())
                console.log(document.querySelectorAll('li').length)
            })
        }
    }
}
</script>

