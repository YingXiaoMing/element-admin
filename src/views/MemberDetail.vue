<template>
    <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom:20px" @change="onChangeTabs">
          <el-radio-button label="basic">基础信息</el-radio-button>
          <el-radio-button label="coupon">优惠券信息</el-radio-button>
        </el-radio-group>
        <div :is="currentView"></div>
    </div>
</template>
<script>
import basic from "./MemberDetail1";
import coupon from "./MemberDetail2";
export default {
    data() {
        return {
            isCollapse: 'basic',
            currentView: 'basic'
        }
    },
    components: {
        basic,
        coupon
    },
    methods: {
        onChangeTabs(tabs) {
            this.currentView = tabs;
        }
    }
}
</script>
<style lang="scss">
.el-radio-button {
    .el-radio-button__inner {
        width: 120px;
        border: none;
        border-radius: 0;
    }
}
</style>



