<template>
    <div>
        <p>father</p>
        <slot>

        </slot>
    </div>
</template>
<script>
export default {
    provide: function() {
        return {
            name: this.name,
            changeName: this.changeName
        }
    },
    data: function() {
        return {
            name: 'huangyao'
        }
    },
    methods: {
        changeName() {
            return this.name = 'change from father'
        }
    }
}
</script>
