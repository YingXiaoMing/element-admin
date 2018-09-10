<template>
    <div>
        <el-col :span="24" style="padding-bottom: 0px">
            <el-form :inline="true" :model="form" label-width="80px" >
                    <el-form-item label="排序">
                        <el-select v-model="form.sort">
                            <el-option v-for="item in sort" :key="item.id" :label="item.name" :value="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="搜索">
                        <el-input v-model="form.searchKey" placeholder="输入订单号、用户ID、用户账号搜索" style="width: 300px"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                    </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="24" style="margin-top:20px">
            <el-table :data="tableData" border style="width:100%">
                <el-table-column label="账号名称" prop="accountName" align="center"></el-table-column>
                <el-table-column label="账号" prop="account" align="center"></el-table-column>
                <el-table-column label="操作" prop="operation" align="center"></el-table-column>
                <el-table-column label="时间" prop="times" align="center"></el-table-column>
            </el-table>
            <el-pagination :total="20" :page-size="1" :current-page="1" 
            :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
        </el-col>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                sort: '时间从近到远',
                searchKey: ''
            },
            sort: [{
                id: 1,
                name: '时间从近到远'
            },{
                id: 2,
                name: '时间从远到近'
            }],
            tableData: [{
                accountName: '超级管理员',
                account: 'superadmin',
                operation: '登录',
                times: '2016-06-29 15:06:21'
            },{
                accountName: '运营员',
                account: 'admin@123',
                operation: '修改价格',
                times: '2016-06-29 15:06:21'
            },{
                accountName: '运营员',
                account: 'admin@123',
                operation: '....',
                times: '2016-06-29 15:06:21'
            }]
        }
    }
}
</script>
