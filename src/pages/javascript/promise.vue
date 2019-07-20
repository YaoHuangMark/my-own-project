<template>
    <anchored-heading>1212121</anchored-heading>
    <!-- <v-expansion-panel>
        <v-expansion-panel-content>
            <template v-slot="header">
                promise then 里面返回回调的 error
            </template>
            <v-card>
                <v-card-text>
                    <anchored-heading>1212121</anchored-heading>
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel> -->
</template>
<script>
import anchoredHeading from './render'
export default {
    components: {
        anchoredHeading
    },
    methods: {
        getJSON (url) {
            var promise = new Promise((resolve,reject) => {
                var handler = function () {
                    if(this.readyState !== 4) {
                        return;
                    }
                    if(this.status == 200) {
                        resolve(this.response)
                    } else {
                        reject(new Error(this.statusText))
                    }
                };
                const client = new XMLHttpRequest()
                client.open("GET",url)
                client.onreadystatechange = handler;
                client.responseType = "json";
                client.setRequestHeader("Accept", "application/json");
                client.send()
            });
            return promise;
        }

        
    },
    mounted() {
        // then 方法实际上返回的是一个新的 Promise 实例，因此可以采用链式写法，即 then 后面再调用另一个then
        // this.getJSON("/post/1.json").then(post => {
        //     return getJSON(post.commentURl)
        // }).then(comments => {
        //     console.log("resolved:" + comments)
        // }, error => {
        //     console.log("rejected:" + error)
        // }) // 第一个 then 方法指定的回调函数，返回的是另一个 Promise，这时第二个 then 方法指定的回调函数就会等待这个新的 Promise 对象状态发生改变
        
        // // 一般来说不建议使用 then 的第二个参数，而建议使用 catch ，因为当使用链式调用时，catch 能捕捉前面 then 方法执行中的错误

        // // 跟传统的 try catch 不一样，如果没有使用 catch 方法，Promise 对象抛出的错误不会传递到外层代码，即不会产生任何反应

        // const someAsyncThing = function() {
        //     return new Promise((resolve,reject) => {
        //         // 下面一行会报错，因为 x 没有定义
        //         resolve(x + 2);
        //     })
        // }
        // someAsyncThing().then(() => {
        //     console.log("everything is great");
        // })
        // setTimeout(() => {
        //     console.log(1111)
        // }, 2000);
        // // Uncaught (in promise) ReferenceError: x is not defined
        // // 123

        // /*
        //     promise.all 当全部 resolve 后返回的是数组，当有一个 reject 时返回的就是这个 reject ；promise。race 是谁先改变状态就返回谁，不管是 resolve 还是 reject
        // */
        // let p1 = new Promise((resolve,reject) => {
        //     resolve('p1')
        // })
        // let p2 = new Promise((resolve,reject) => {
        //     throw new Error('p2 error')
        // })
        // let p3 = new Promise((resolve,reject) => {
        //     resolve('p3')
        // })
        // Promise.all([p1,p2,p3]).then((data) => {
        //     console.log(data)
        // }).catch((error) => {
        //     console.log(error)
        // })
    }
}
</script>
<style lang="sass" scoped>

</style>
