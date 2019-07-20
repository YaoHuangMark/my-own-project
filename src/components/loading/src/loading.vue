<template>
    <div id="loading">
        <div class="load" :class="{'dis': showload === false}">
            <v-progress-circular
                indeterminate
                color="primary"
                value="true"
                size=50
                >
            </v-progress-circular>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showload: false
        }
    }
}
</script>
<style lang="scss" scoped>
    .load {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        right: 0;
        text-align: center;
        height: 100%;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dis {
        display: none;
    }
</style>

