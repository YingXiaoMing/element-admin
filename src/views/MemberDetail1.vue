<template>
    <div>
        <el-form :model="memberBasic">
          <el-form-item label="用户ID："><span>{{memberBasic.memberId}}</span></el-form-item>
          <el-form-item label="绑定手机："><span>{{memberBasic.memberTel}}</span></el-form-item>
          <el-form-item label="第三方登录方式："><span>{{memberBasic.memberLoginType}}</span></el-form-item>
          <el-form-item label="第三方登录账号："><span>{{memberBasic.memberLoginAccount}}</span></el-form-item>
          <el-form-item label="邮箱："><span>{{memberBasic.memberMail}}</span></el-form-item>
          <el-form-item label="注册时间："><span>{{memberBasic.memberSignTime}}</span></el-form-item>
          <el-form-item label="最后登录时间："><span>{{memberBasic.memberLastLoginTime}}</span></el-form-item>
          <el-form-item label="会员类型："><span>{{memberBasic.memberType}}</span></el-form-item>
          <el-form-item label="剩余时长："><span>{{memberBasic.memberRestTime}}</span></el-form-item>
        </el-form>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            memberBasic: {
                memberId: '54646656',
                memberTel: '13265699624',
                memberLoginType: '微信',
                memberLoginAccount: '15271931804',
                memberMail: '15271931804@qq.com',
                memberSignTime: '2018.09.09  12:20:20',
                memberLastLoginTime: '2018.09.09  12:40:20',
                memberType: '黄金会员',
                memberRestTime: '22天12小时23分'
            }
        }
    }
}
</script>

