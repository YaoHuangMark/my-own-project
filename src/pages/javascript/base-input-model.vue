<template>
  <div>
    <input type="text" v-on="listeners" v-bind="$attrs"/>
    <slot></slot>
  </div>
</template>
<script>
export default {
    props: ['input'],
    computed: {
        listeners () {
            var vm = this
            return Object.assign(
                {},
                this.$listeners,
                {
                    input: function(event) {
                        vm.$emit('input',event.target.value)
                    }
                }
            )
        }
    }
}
</script>
