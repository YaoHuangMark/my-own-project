<template>
    <div>
        <p>接受父级组件 provide 的方法 {{nameFromFather}}</p>
        <el-button @click="nameChange">changeName</el-button>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            nameFromFather: this.name
        }
    },
    inject: ['name','changeName'],
    methods: {
        nameChange () {
            this.nameFromFather = this.changeName()
        }
    }
}
</script>
