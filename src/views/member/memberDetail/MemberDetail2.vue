<template>
    <div>
        <el-table :data="tableData" border style="width:100%">
            <el-table-column label="优惠券ID" prop="couponId" align="center"></el-table-column>
            <el-table-column label="券类型" prop="couponType" align="center"></el-table-column>
            <el-table-column label="券名称" prop="couponName" align="center"></el-table-column>
            <el-table-column label="面值（元）" prop="couponMoneys" align="center"></el-table-column>
            <el-table-column label="有效期（天）" prop="leaveTimes" align="center"></el-table-column>
            <el-table-column label="过期时间" prop="dateTimes" align="center"></el-table-column>
            <el-table-column label="获得时间" prop="times" align="center"></el-table-column>
            <el-table-column label="状态" prop="status" align="center"></el-table-column>
        </el-table>
        <el-pagination :total="20" :page-size="1" :current-page="1" 
        :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                couponId: '10001',
                couponType: '新手券',
                couponName: '新手券',
                couponMoneys: '30.00',
                leaveTimes: '30',
                dateTimes: '2016-04-23',
                times: '2019-03-23 22:24:09',
                status: '未使用'
            },{
                couponId: '10002',
                couponType: '自定义券',
                couponName: '八月活动券',
                couponMoneys: '10.00',
                leaveTimes: '30',
                dateTimes: '2016-04-23',
                times: '... ...',
                status: '已过期'
            },{
                couponId: '10003',
                couponType: '自定义券',
                couponName: '九月活动券',
                couponMoneys: '5.00',
                leaveTimes: '30',
                dateTimes: '2016-04-23',
                times: '... ...',
                status: '已使用'
            }]
        }
    }
}
</script>


