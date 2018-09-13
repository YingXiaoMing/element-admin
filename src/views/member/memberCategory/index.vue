<template>
    <div>
        <el-button type="success" @click="clickLink">跳转到会员详情</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        clickLink() {
            this.$router.push({path:'/member/detail'})
        }
    }
}
</script>

