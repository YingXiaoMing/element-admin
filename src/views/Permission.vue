<template>
    <div>
        <el-col :span="24">
            <el-table :data="tableData" border >
              <el-table-column label="账号名称" prop="accountName" align="center"></el-table-column>
              <el-table-column label="账号" prop="account" align="center"></el-table-column>
              <el-table-column label="状态" prop="status" align="center"></el-table-column>
              <el-table-column label="操作" prop="operation" align="center">
                  <template slot-scope="scope">
                      <el-button type="text">[设置权限]</el-button>
                      <el-button type="text">[编辑]</el-button>
                      <el-button type="text">[重置密码]</el-button>
                      <el-button type="text">[停用]</el-button>
                  </template>
              </el-table-column>
            </el-table>
        </el-col>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                accountName: '超级管理者',
                account: 'superadmin',
                status: '正常'
            }]
        }
    }
}
</script>
