<template>
    <el-breadcrumb class="app-breadcrumb" separator=">">
            <el-breadcrumb-item v-for="(item,index)  in leavelList" :key="item.path" v-if="item.meta.title">
                    <span v-if="item.redirect==='noredirect'||index==leavelList.length-1" class="no-redirect">{{item.meta.title}}</span>
                    <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    data() {
        return {
            leavelList: null
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name);
            this.leavelList = matched;
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    }
    
}
</script>
