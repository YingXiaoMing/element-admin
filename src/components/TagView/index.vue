<template>
    <div class="pColor">
        <el-tag v-for="em in item">{{em.name}}</el-tag>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Array,
            default: function(){
                return [];
            }
        }
    }
}
</script>
<style lang="scss">
.pColor {
    
    clear: both;
    text-align: left;
    .el-tag{
        margin-right: 6px;
        margin-bottom: 6px;
        border: none;
        color: #FFFFFF;
        &:nth-child(8n-7) {
            background: #8A9b0f;
        }
        &:nth-child(8n-6) {
            background: #EB6841;
        }
        &:nth-child(8n-5) {
            background: #3FB8AF;
        }
        &:nth-child(8n-4) {
            background: #FE4365;
        }
        &:nth-child(8n-3) {
            background: #FC9D9A;
        }
        &:nth-child(8n-2) {
            background: #EDC951;
        }
        &:nth-child(8n-1) {
            background: #C8C8A9;
        }
    }
}
</style>

