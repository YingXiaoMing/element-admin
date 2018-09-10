<template>
    <div class="permission-container">
        <el-col :span="24" class="add-Btn">
              <el-button type="primary" style="float:right" @click="createModalVisble = true">添加管理员</el-button>
        </el-col>
        <el-col :span="24">
            <el-table :data="tableData" border >
              <el-table-column label="账号名称" prop="accountName" align="center"></el-table-column>
              <el-table-column label="账号" prop="account" align="center"></el-table-column>
              <el-table-column label="状态" prop="status" align="center"></el-table-column>
              <el-table-column label="操作" prop="operation" align="center">
                  <template slot-scope="scope">
                      <el-button type="text" @click="limitModalVisble = true">[设置权限]</el-button>
                      <el-button type="text">[编辑]</el-button>
                      <el-button type="text" @click="modifyPasswordVisble = true">[重置密码]</el-button>
                      <el-button type="text">[停用]</el-button>
                  </template>
              </el-table-column>
            </el-table>
            <el-pagination :total="20" :page-size="1" :current-page="1" 
            :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
        </el-col>
        <el-dialog title="添加管理员" center :visible.sync="createModalVisble" width="30%">
            <el-form :model="addManager" label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="addManager.name" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="addManager.account" placeholder="限6-16位,数字、字母、字符"></el-input>
                </el-form-item>
            </el-form>
            <el-col :span="24" class="AddManagerTips">
                <p>初始密码统一为123456，请务必让员工登录后修改密码</p>
                <p>若遗忘密码，请为其重置为初始密码</p>
            </el-col>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createModalVisble = false">取消</el-button>
                <el-button type="success" @click="createModalVisble = false">确定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改密码" center :visible.sync="modifyPasswordVisble" width="30%">
            <el-form :model="modifyPassword" status-icon :rules="passwordRule" ref="modifyPassword" class="demo-ruleForm">
              <el-form-item prop="originPassword">
                  <el-input type="password" auto-complete="off" v-model="modifyPassword.originPassword" placeholder="请输入原密码"></el-input>
              </el-form-item>
              <el-form-item prop="newPassword">
                  <el-input type="password" auto-complete="off" v-model="modifyPassword.newPassword" placeholder="请输入新密码，6-16位字母、数字、字符"></el-input>
              </el-form-item>
              <el-form-item prop="secordPassword">
                  <el-input type="password" v-model="modifyPassword.secordPassword" placeholder="请重新输入密码"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="modifyPasswordVisble = false">取消</el-button>
                <el-button type="success" @click="submitPasswordForm('modifyPassword')">确定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="设置权限" center  :visible.sync="limitModalVisble" width="30%">
            <el-checkbox-group v-model="limitCheckLists">
                <div>
                    <el-checkbox label="订单管理" v-model="limitCheckList.checked1"></el-checkbox>
                    <el-checkbox label="订单列表" v-model="limitCheckList.checked2"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="运营管理" v-model="limitCheckList.checked3"></el-checkbox>
                    <el-checkbox label="banner管理" v-model="limitCheckList.checked4"></el-checkbox>
                    <el-checkbox label="优惠券管理" v-model="limitCheckList.checked5"></el-checkbox>
                    <el-checkbox label="用户反馈" v-model="limitCheckList.checked6"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="文章管理" v-model="limitCheckList.checked7"></el-checkbox>
                    <el-checkbox label="商务合作" v-model="limitCheckList.checked8"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="统计分析" v-model="limitCheckList.checked9"></el-checkbox>
                    <el-checkbox label="用户统计" v-model="limitCheckList.checked10"></el-checkbox>
                    <el-checkbox label="订单统计" v-model="limitCheckList.checked11"></el-checkbox>
                    <el-checkbox label="用户分布" v-model="limitCheckList.checked12"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="活动统计" v-model="limitCheckList.checked13"></el-checkbox>
                    <el-checkbox label="下载安装统计" v-model="limitCheckList.checked14"></el-checkbox>
                    <el-checkbox label="卸载统计" v-model="limitCheckList.checked15"></el-checkbox>
                    <el-checkbox label="在线统计" v-model="limitCheckList.checked16"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="商品管理" v-model="limitCheckList.checked17"></el-checkbox>
                    <el-checkbox label="商品列表" v-model="limitCheckList.checked18"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="游戏管理" v-model="limitCheckList.checked19"></el-checkbox>
                    <el-checkbox label="游戏列表" v-model="limitCheckList.checked20"></el-checkbox>
                    <el-checkbox label="分类管理" v-model="limitCheckList.checked21"></el-checkbox>
                </div>
                <div>
                    <el-checkbox label="会员管理" v-model="limitCheckList.checked22"></el-checkbox>
                    <el-checkbox label="会员列表" v-model="limitCheckList.checked23"></el-checkbox>
                </div>
            </el-checkbox-group>
            <span slot="footer" class="dialog-footer">
                <el-button @click="limitModalVisble = false">取消</el-button>
                <el-button type="success" @click="limitModalVisble = false">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            callback();
        }
        var validateNewPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }else {
                if (this.modifyPassword.secordPassword !== '') {
                    this.$refs.modifyPassword.validateField('secordPassword');
                }
                callback();
            }
        }
        var validateNewPass2 = (rule, value , callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            }else if (value !== this.modifyPassword.pass) {
                callback(new Error('两次输入密码不一致'));
            } else {
                callback();
            }
        };
        return {
            tableData: [{
                accountName: '超级管理者',
                account: 'superadmin',
                status: '正常'
            }],
            passwordRule: {
                originPassword: [{
                    validator: validatePass,trigger: 'blur'
                }],
                newPassword: [{
                    validator: validateNewPass,trigger: 'blur'
                }],
                secordPassword: [{
                    validator: validateNewPass2,trigger: 'blur'
                }]
            },
            modifyPassword: {
                originPassword: '',
                newPassword: '',
                secordPassword: ''
            },
            createModalVisble: false,
            modifyPasswordVisble: false,
            limitModalVisble: false,
            addManager: {
                name: '',
                account: ''
            },
            limitCheckLists: [],
            limitCheckList: {
                checked1: false,
                checked2: false,
                checked3: false,
                checked4: false,
                checked5: false,
                checked6: false,
                checked7: false,
                checked8: false,
                checked9: false,
                checked10: false,
                checked11: false,
                checked12: false,
                checked13: false,
                checked14: false,
                checked15: false,
                checked16: false,
                checked17: false,
                checked19: false,
                checked20: false,
                checked21: false,
                checked22: false,
                checked23: false
            }
        }
    },
    methods: {
        submitPasswordForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.modifyPasswordVisble = false;
                }else {
                    return false;
                }
            });
        }
    }
}
</script><style lang="scss">
.add-Btn{
    margin-top: -40px;
    margin-bottom: 10px;
}
.permission-container {
    .el-form-item {
        margin-bottom: 22px;
    }
}
.AddManagerTips {
    text-align: center;
    background-color: hsla(0,87%,69%,.1);
    color: #f56c6c;
    margin-bottom: 10px;
}
</style>

