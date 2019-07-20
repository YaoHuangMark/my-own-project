<template>
    <div>
        <ul>
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            items: []
        }
    },
    beforeCreate() {
        console.group('beforeCreate 创建前状态===============');
        console.log("%c%s", "color:red", "$el :" + this.$el); //undefined   $el vue 实例使用的根 DOM 元素
        console.log("%c%s", "color:red", "$data : " + this.$data); //undefined   $data vue 实例观察的数据对象，vue 实例代理了对其 data 对象属性的访问
        console.log("%c%s", "color:red", "message :" + this.message); //undefined
    },
    created() {
        console.group('created 创建完毕状态===============');
        console.log("%c%s", "color:red", "$el :" + this.$el); //undefined  $el vue 实例使用的根 DOM 元素
        console.log("%c%s", "color:red", "$data : " + this.$data); //已被初始化  $data vue 实例观察的数据对象，vue 实例代理了对其 data 对象属性的访问
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    beforeMount() {
        console.group('beforeMount 挂载前状态=================');
        console.log("%c%s", "color:red", "$el :" + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    mounted() {
        console.group('mounted 挂载结束状态================');
        console.log("%c%s", "color:red", "$el :" + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    beforeUpdate() {
        console.group('beforeUpdate 更新前状态=================');
        console.log("%c%s", "color:red", "$el :" + this.$el.innerHTML); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    updated() {
        console.group('updated 更新完成状态=================');
        console.log("%c%s", "color:red", "$el :" + this.$el.innerHTML); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    beforeDestroy() {
        console.group('beforeDestory 销毁前状态=================');
        console.log("%c%s", "color:red", "$el :" + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    },
    destroyed() {
        console.group('destoryed 销毁完成状态=================');
        console.log("%c%s", "color:red", "$el :" + this.$el); //已被初始化
        console.log(this.$el);
        console.log("%c%s", "color:red", "$data :" + this.$data); //已被初始化
        console.log("%c%s", "color:red", "message :" + this.message); //已被初始化
    }
}
</script>
