<template>
    <div>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                <slot name="uu" :user="user">
                    {{user.name}}
                </slot>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        users: Array
    }
}
</script>
