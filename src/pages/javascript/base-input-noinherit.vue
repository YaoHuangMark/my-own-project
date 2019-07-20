<template>
    <label>
        {{label}}
        <input
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
        >    
    </label>
</template>
<script>
export default {
    inheritAttrs: false,
    props: ['label','value'],
}
</script>
