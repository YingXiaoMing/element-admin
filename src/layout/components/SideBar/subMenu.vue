<template>
    <div v-if="!item.hidden&&item.children" class="menu-wrapper">
        <template v-if="hasOneShowingChild(item.children) && !onlyOneChild.children && !item.alwaysShow" >
            <a :href="onlyOneChild.path"  target="_blank" @click="clickLink(onlyOneChild.path,$event)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" >
                    <i v-if="onlyOneChild.meta" :class="onlyOneChild.meta.icon"></i><span slot="title">{{onlyOneChild.meta.title}}</span>
                </el-menu-item>
            </a>
        </template>
        <el-submenu v-else :index="item.name||item.path">
            <template slot="title">
                <i v-if="item.meta" :class="item.meta.icon"></i><span slot="title">{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children" v-if="!child.hidden">
                <sub-menu v-if="child.children&&child.children.length>0" :item="child" :key="child.path" :base-path="resolvePath(child.path)"></sub-menu>
                <a v-else :href="child.path" :key="child.name" target="_blank" @click="clickLink(child.path,$event)">
                    <el-menu-item :index="resolvePath(child.path)">
                        <i v-if="child.meta" :class="child.meta.icon"></i><span slot="title">{{child.meta.title}}</span>
                    </el-menu-item>
                </a>
            </template>
        </el-submenu>
    </div>
</template>
<script>
import subMenu from "./subMenu";
import { validateURL } from "@/common/utils";
import path from "path";
export default {
    name: "subMenu",
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            onlyOneChild: null
        }
    },
    components: {
        subMenu
    },
    methods: {
        hasOneShowingChild(children) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false
                } else {
                    this.onlyOneChild = item;
                    return true
                }
            })
            if (showingChildren.length === 1) {
                return true
            }
            return false
        },
        resolvePath(routePath) {
            return path.resolve(this.basePath,routePath);
        },
        clickLink(routePath, e) {
            if (!validateURL(routePath)) {
                e.preventDefault();
                const path = this.resolvePath(routePath);
                this.$router.push(path);
            }
        }
    }
}
</script>
<style>
.el-menu .fa {
    margin-left: 4px;
    margin-right: 18px;
} 
</style>


