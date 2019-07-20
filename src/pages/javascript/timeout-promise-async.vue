<template>
    <div>
        <el-button @click="runAll">runAll</el-button>
        <ul>
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'timeoutPromiseAsync',
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        runAll () {
            let _that = this;
            _that.items = [];
            async function async1() {
                _that.items.push("async1 start");
                await  async2();
                _that.items.push("async1 end");
            }
            async  function async2() {
               _that.items.push( 'async2');
            }
            _that.items.push("script start");
            setTimeout(function () {
                _that.items.push("settimeout");
            },0);
            async1();
            new Promise(function (resolve) {
                _that.items.push("promise1");
                resolve();
            }).then(function () {
                _that.items.push("promise2");
            });
            _that.items.push('script end');
        }
    }
}
</script>
