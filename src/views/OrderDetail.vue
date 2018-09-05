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
        <el-dialog title="订单详细" :visible.sync="isShowDetail" center width="800px">
            <el-row>
              <el-col :span="24">
                  <el-button type="primary" size="small" style="margin-bottom:10px">用户信息</el-button>
                  <table class="table table-user">
                      <tbody>
                          <tr>
                              <td>用户ID</td>
                              <td>{{detailForm.memberID}}</td>
                              <td>用户手机</td>
                              <td>{{detailForm.memberTel}}</td>
                          </tr>
                          <tr>
                              <td>用户账号</td>
                              <td>{{detailForm.memberAccount}}</td>
                              <td></td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
              </el-col>
              <el-col :span="24" style="margin-top:10px">
                  <el-button type="info" size="small" style="margin-bottom:10px">订单信息</el-button>
                  <table class="table table-order">
                      <tbody>
                          <tr>
                              <td>订单号</td>
                              <td>{{detailForm.orderId}}</td>
                              <td>订单状态</td>
                              <td>{{detailForm.status}}</td>
                          </tr>
                          <tr>
                              <td>支付方式</td>
                              <td>{{detailForm.paymentType}}</td>
                              <td>支付金额</td>
                              <td>{{detailForm.totalPayment}}</td>
                          </tr>
                          <tr>
                              <td>下单时间</td>
                              <td>{{detailForm.orderTime}}</td>
                              <td>支付时间</td>
                              <td>{{detailForm.orderTime}}</td>
                          </tr>
                          <tr>
                              <td class="red">申请退款时间</td>
                              <td class="red">{{detailForm.refundTime}}</td>
                              <td class="red">退款金额</td>
                              <td class="red">{{detailForm.totalPayment}}</td>
                          </tr>
                      </tbody>
                  </table>
              </el-col>
              <el-col :span="24" style="margin-top:10px">
                  <el-button type="warning" size="small" style="margin-bottom:10px">商品信息</el-button>
                  <table class="table table-user">
                      <tbody>
                          <tr>
                              <td>套餐类型</td>
                              <td>{{detailForm.packageType}}</td>
                              <td>到期时间</td>
                              <td>{{detailForm.packageEndTime}}</td>
                          </tr>
                          <tr>
                              <td>开始时间</td>
                              <td>{{detailForm.packageStartTime}}</td>
                              <td></td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
              </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer" style="text-align:right">
                <el-button type="primary" @click="isShowDetail = false">确定</el-button>
            </span>
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
            detailForm: {
                memberID: "",
                memberTel: "",
                memberAccount: "",
                orderId: "",
                status: "",
                memberID: "",
                memberAccount: "",
                totalPayment: "",
                paymentType: "",
                orderTime: "",
                payTime: "",
                packageType: "",
                packageStartTime: "",
                packageEndTime: "",
                refundTime: ""
            },
            tableData: [{
                memberID: "1212131313",
                memberTel: "13265699624",
                memberAccount: "13265699624",
                orderId: "454545454",
                status: "待付款",
                memberID: "1212131313",
                memberAccount: "133111111",
                totalPayment: "¥30",
                paymentType: "微信",
                orderTime: "2018.08.23  12:20:20",
                payTime: "2018.08.23  12:20:20",
                packageType: "黄金会员月度卡",
                packageStartTime: "2018.08.23  12:20:20",
                packageEndTime: "2018.08.26  12:20:20",
                refundTime: "2018.08.26  12:20:20"
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
            this.detailForm = Object.assign({},row,true);
            console.log(this.detailForm);
        }
    }
}
</script>
<style lang="scss">
.table{
    position: relative;
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    empty-cells: show;
    td {
        border: 1px #eee solid;
        width: 25%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        text-align: center;
        &.red {
            color: red;
        }
    }
}
</style>



