<template>
    <aside class="main-sidebar animated" :class="{ expandSide:!sidebar.collapsed}">
        <el-scrollbar wrapClass="vue-scrollbar" tag="div">
            <div class="sidebar">
                <el-menu :default-active="onRoutes" class="el-menu-style" theme="light" router
                :collapse="sidebar.collapsed">
                  <template v-for="item in routers" v-if="!item.hidden&&item.children">
                      <sub-menu :param="item"></sub-menu>
                  </template>
                </el-menu>
            </div>
        </el-scrollbar>
    </aside>
</template>
<script>
import subMenu from "./subMenu";
import { mapActions,mapMutations, mapState, mapGetters } from "vuex";
export default {
    components: {
        subMenu
    },
    computed: {
        ...mapGetters([
            'menuList',
            'sidebar',
            'routers'
        ]),
        onRoutes() {
            return this.$route.path;
        }
    },
    created() {
        this.load();
    },
    methods: {
        ...mapActions({
            load: 'loadMenuList'
        })
    }
}
</script>

<style lang="scss">
.showSlide {
    animation-duration: .2s;
    animation-name: slideInLeft;
}
.hideSlide {
    animation-duration: .2s;
    animation-name: slideOutLeft;
}
.main-sidebar {
    background-color: #ffffff;
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    height: calc(100vh - 20px);
    width: 44px;
    z-index: 810;
    -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    &.expandSide {
        width: 230px;
    }
    .el-menu--collapse {
        width: 44px;
        .el-menu-item,.el-submenu>.el-submenu__title {
            padding-left: 13px !important;
        }
    }
    .vue-scrollbar {
        background-color: #ffffff;
        height: calc(100vh -50px);
        .sidebar {
            min-height: 450px;
            .el-menu-style .el-submenu .el-menu-item {
                height: 45px;
                line-height: 45px;
            }
            .el-menu-style .el-menu-item,.el-menu-style .el-submenu__title{
                height: 45px;
                line-height: 45px;
            } 
        }
    }
}
</style>

