<template>
    <el-submenu :index="item.path" v-if="item.children && item.children.length>0" class="el-menu-sub">
      <template slot="title"><i :class="item.meta.icon"></i><span>{{item.name}}</span></template>
      <template v-for="child in item.children">
          <sub-menu v-if="child.children && child.children.length >0" :param="child"></sub-menu>
          <el-menu-item :index="item.path + '/' + child.path" v-else><i :class="child.meta.icon"></i><span>{{child.name}}</span></el-menu-item>
      </template>
    </el-submenu>
    <el-menu-item :index="item.path" v-else class="el-menu-each"><i :class="item.meta.icon"></i><span>{{item.name}}</span></el-menu-item>
</template>
<script>
import subMenu from "./subMenu";
export default {
    name: "subMenu",
    props: ["param"],
    data() {
        return {item: this.param}
    },
    components: {
        subMenu
    }
}
</script>
<style>
.el-menu .fa {
    margin-right: 10px;
}
</style>


