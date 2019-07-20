<template>
    <label>
        {{label}}
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
        >
    </label>
</template>
<script>
export default {
    inheritAttrs: true,
    props: ['label','value'],
    computed: {
        inputListeners: function() {
            var vm = this;
            return Object.assign({},
                this.$listeners, // Vue 提供的属性，它是一个对象，里面包含了作用在这个组件上的所有监听器
                {
                    input: function(event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    }
}
</script>
