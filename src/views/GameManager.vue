<template>
    <div class="game-container">
        <el-col :span="24" style="padding-bottom: 0px">
            <el-form :inline="true" :model="form" label-width="80px">
                <el-form-item label="分类">
                    <el-select v-model="form.sort">
                        <el-option v-for="item in sort" :key="item.id" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="排序">
                    <el-select v-model="form.sort">
                        <el-option v-for="item in sort" :key="item.id" :label="item.name" :value="item.name"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="搜索">
                    <el-input v-model="form.searchKey" placeholder="输入关键词搜索" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-circle-plus-outline" @click="isShowAddGameVisible= true">添加游戏</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="24" style="margin-top:20px">
            <el-table :data="tableData" border style="width:100%">
                <el-table-column label="状态" prop="status" align="center"></el-table-column>
                <el-table-column label="排序" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.sort" style="height:30px;vertical-align:middle;"/>
                        <el-button type="text" style="margin-left:6px">[修改]</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="游戏缩略图" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.gamePic" style="height:80px;vertical-align:middle;"/>
                    </template>
                </el-table-column>
                <el-table-column label="游戏LOGO" prop="gameLogo" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.gameLogo" style="height:80px;vertical-align:middle;"/>
                    </template>
                </el-table-column>
                <el-table-column label="游戏名称" prop="gameName" align="center"></el-table-column>
                <el-table-column label="分类"  align="center">
                    <template slot-scope="scope">
                        <Tag-view :item="scope.row.category"></Tag-view>
                    </template>
                </el-table-column>
                <el-table-column label="操作" prop="operation" align="center">
                    <template slot-scope="scope">
                        <el-button type="text">下架</el-button>
                        <el-button type="text">修改</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination :total="20" :page-size="1" :current-page="1" 
            :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"></el-pagination>
        </el-col>
        <el-dialog title="添加游戏" width="560px" :visible.sync="isShowAddGameVisible" center>
            <el-form :model="addGame" label-width="108px">
              <el-form-item label="游戏名">
                  <el-input v-model="addGame.gameName"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                  <el-input v-model="addGame.gameName"></el-input>
              </el-form-item>
              <el-form-item label="游戏缩略图">
                  <el-input v-model="addGame.gameName"></el-input>
              </el-form-item>
              <el-form-item label="游戏LOGO">
                  <el-input v-model="addGame.gameName"></el-input>
              </el-form-item>
              <el-form-item label="一级分类">
                  <el-select v-model="addGame.oneCategory" style="width:100%">
                    <el-option v-for="item in oneCategory" :key="item.id" :label="item.name" :value="item.name"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="二级分类">
                  <el-select v-model="addGame.secondCategory" style="width:100%">
                    <el-option v-for="item in secondCategory" :key="item.id" :label="item.name" :value="item.name"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="域名">
                  <el-input v-model="addGame.web"></el-input>
              </el-form-item>
              <el-form-item label="进程">
                  <el-input v-model="addGame.process"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary">确定修改</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import TagView from "@/components/TagView";
export default {
    components: {
        TagView
    },
    data() {
        return {
            addGame: {
                gameName: '绝地求生',
                process: '',
                web: '',
                oneCategory: '一级01',
                secondCategory: '二级01'

            },
            oneCategory: [{
                id: 1,
                name: '一级01'
            },{
                id: 2,
                name: '一级02'
            }],
            secondCategory: [{
                id: 1,
                name: '二级01'
            },{
                id: 2,
                name: '二级02'
            }],
            isShowAddGameVisible: false,
            form: {
                categories: '热门',
                sort: '从添加时间由近到远'
            },
            categories: [{
                id: 1,
                name: '热门'
            },{
                id: 2,
                name: '冷门'
            }],
            sort: [{
                id: 1,
                name: '从添加时间由近到远'
            },{
                id: 2,
                name: '从添加时间由远到近'
            }],
            tableData: [{
                status: '上架中',
                sort: 'http://dummyimage.com/100x100/79f2c2/757575.png&text=1',
                gamePic: 'https://pictrue-1256199976.cos.ap-guangzhou.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180912115610.jpg',
                gameLogo: 'https://pictrue-1256199976.cos.ap-guangzhou.myqcloud.com/37208271_287285985341750_1894030244814258176_n.jpg',
                gameName: '绝地求生',
                category: [{name:'热门'},{name:'火爆'},{name:'性感'},{name:'热门'},{name:'火爆'},{name:'性感'}]
            }]
        }
    }
}
</script>
<style lang="scss">
.game-container {
    .el-form-item {
        margin-bottom: 22px;
    }
}
</style>

