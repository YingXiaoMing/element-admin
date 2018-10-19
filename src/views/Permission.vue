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
                      <el-button type="text" @click="addLimit(scope.row)">[设置权限]</el-button>
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
            <div v-for="(item,index) in permissions" class="lie">
                <el-checkbox class="first_label" :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="e => handleCheckAllChange(e,index)">{{item.parent_name}}</el-checkbox>
                <el-checkbox-group class="permission_group" v-model="item.checked_child" v-if="item.child_name" @change="e => handleCheckedPermissionChange(e,index)">
                  <el-checkbox v-for="per in item.child_name" :label="per" :key="per">{{per}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="limitModalVisble = false">取消</el-button>
                <el-button type="success" @click="submitClick">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
const permissionOptions = [{
    parent_name: '订单管理',
    child_name: ['订单列表'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '运营管理',
    child_name: ['banner管理','优惠券管理','用户反馈','文章管理','商务合作',"广告管理" ],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '统计分析',
    child_name: ['用户统计','订单统计','用户分布','活动统计','下载安装统计','卸载统计','在线统计'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '商品管理',
    child_name: ['商品列表'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '游戏管理',
    child_name: ['游戏列表','分类管理'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '会员管理',
    child_name: ['会员列表'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
},{
    parent_name: '系统管理',
    child_name: ['权限管理','操作日志','版本发布','其他设置'],
    checked_child: [],
    isIndeterminate: false,
    checkAll: false
}];
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
                status: '正常',
                permissions: [{
                    parent_name: '订单管理',
                    child_name: ['订单列表']
                },{
                    parent_name: '运营管理',
                    child_name: ['banner管理','优惠券管理','文章管理','商务合作',"广告管理"]
                },{
                    parent_name: '游戏管理',
                    child_name: ['游戏列表','分类管理']
                }]
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
            permissions: permissionOptions
        }
    },
    methods: {
        addLimit(row) {
            let limitAll = Object.assign([],permissionOptions,true);
            row.permissions.forEach((item) => {
                limitAll.find((te) => {
                    if (te.parent_name == item.parent_name) {
                        te.checked_child = item.child_name;
                        if (te.checked_child.length == te.child_name.length) {
                            te.checkAll = true;
                        }else {
                            te.checkAll = false;
                            te.isIndeterminate = true;
                        }
                    }
                });
            });
            console.log(limitAll);
            this.permissions = limitAll;
            this.limitModalVisble = true;
        },
        submitClick() {
            let limitArr = [];
            this.permissions.filter((item) => {
                if (item.checked_child.length) {
                    var obj = new Object();
                    obj.parent_name = item.parent_name;
                    obj.child_name = item.checked_child;
                    limitArr.push(obj);
                }
            });
            console.log(limitArr);
            this.limitModalVisble = false;
        },
        handleCheckAllChange(val,index) {
            console.log(val);
            console.log(index);
            this.permissions[index].checked_child = val ? this.permissions[index].child_name : [];
            this.permissions[index].isIndeterminate = false;
            
        },
        handleCheckedPermissionChange(value,index) {
            let checkedCount = value.length;
            this.permissions[index].checkAll = checkedCount === this.permissions[index].child_name.length;
            this.permissions[index].isIndeterminate = checkedCount > 0 && checkedCount < this.permissions[index].child_name.length;
        },
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
.lie{
    margin-bottom: 10px;
}
.AddManagerTips {
    text-align: center;
    background-color: hsla(0,87%,69%,.1);
    color: #f56c6c;
    margin-bottom: 10px;
}
.el-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    width: 30%!important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    float: left!important;
}
.el-checkbox+.el-checkbox{
    margin-left:0!important;
}
.first_label{
    width: 20%!important;
}

.permission_group{
     display: block!important;
    overflow: hidden;
    width: 80%;
    margin-left: 100px;
}
</style>

