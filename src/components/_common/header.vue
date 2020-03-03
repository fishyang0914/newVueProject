<script>
import lib from 'lib'
export default {
    components: {
    },
    data() {
        return {
            name: 'this is header',
            linkList: [
                'home', 'about', 'contact'
            ],
        }
    },
    computed: {
        
    },
    methods: {
        goTo(link) {
            this.$router.push({ name: link })
        }
    },
    mounted() {

    }
}
</script>
<template>
    <div>
        <h1>{{name}}</h1>
        <a class="link" v-for="v in linkList" :key="v" @click="goTo(v)">{{v}}</a>
        <!-- <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/contact">contact</router-link> -->
    </div>
</template>
<style lang='scss' scoped>
.link {
    margin: 10px;
}
</style>