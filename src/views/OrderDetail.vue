<template>
    <div class="app-container">
        <el-col :span="24" style="padding-bottom: 0px">
            <el-form :inline="true" :model="form" label-width="80px" >
                    <el-form-item label="状态">
                        <el-select v-model="form.value">
                            <el-option v-for="item in status" :key="item.statusId" :label="item.label" :value="item.statusId"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="支付方式">
                        <el-select v-model="form.payment">
                            <el-option v-for="item in payments" :key="item.id" :label="item.name" :value="item.id"></el-option>
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
                <el-table-column label="订单编号" prop="orderId" align="center"></el-table-column>
                <el-table-column label="状态" prop="status" align="center"></el-table-column>
                <el-table-column label="用户ID" prop="memberID" align="center"></el-table-column>
                <el-table-column label="用户账号" prop="memberAccount" align="center"></el-table-column>
                <el-table-column label="支付总额（元）" prop="totalPayment" align="center"></el-table-column>
                <el-table-column label="支付方式" prop="paymentType" align="center"></el-table-column>
                <el-table-column label="下单时间" prop="orderTime" align="center"></el-table-column>
                <el-table-column label="操作" prop="operation" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.row)">[详细]</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
        <!-- 查看详细 -->
        <el-dialog title="订单详细" :visible.sync="isShowDetail" center width="30%">
            <div>混子</div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                searchKey: '',
                value: '全部',
                payment: '全部',
            },
            tableData: [{
                orderId: "454545454",
                status: "待付款",
                memberID: "1212131313",
                memberAccount: "133111111",
                totalPayment: "¥30",
                paymentType: "微信",
                orderTime: "2018.08.23  12:20:20"
            }],
            isShowDetail: false,
            payments: [{
                id: 1,
                name: '全部'
            },{
                id: 2,
                name: '支付宝'
            },{
                id: 3,
                name: '微信'
            }],
            status: [
                {
                    statusId: 1,
                    label: '全部'
                },
                {
                    statusId: 2,
                    label: '启动'
                },
                {
                    statusId: 3,
                    label: '禁用'
                }
            ]
        }
    },
    methods: {
        handleEdit(row) {
            this.isShowDetail = true;
        }
    }
}
</script>


