<template>
    <div>
        <v-snackbar
        v-model="alert"
        top
        right
        :timeout="timeout"
        >
        {{ text }}
            <v-btn
                color="pink"
                flat
                @click="alert = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            alert: false,
            text:'',
            type:'',
            timeout: 2000
        }
    }
}
</script>
<style lang="scss" scoped>
    .alert-m {
        position: absolute;
        top: 70px;
        right: 0;
        color: #fff;
        z-index: 999;
    }
</style>

