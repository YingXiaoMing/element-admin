<template>
    <aside class="main-sidebar animated" :class="{ expandSide:!sidebar.collapsed}">
        <el-scrollbar wrapClass="vue-scrollbar" tag="div">
            <div class="sidebar">
                <el-menu :default-active="onRoutes" class="el-menu-style" theme="light" router
                :collapse="sidebar.collapsed">
                  <sub-menu v-for="route in routers" :key="route.name" :item="route" :base-path="route.path"></sub-menu>
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
            load: 'GenerateRoutes'
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
    .el-scrollbar__bar.is-vertical{
        display: none;
    }
    &.expandSide {
        width: 230px;
    }
    .el-menu--collapse {
        width: 44px;
        .el-menu-item,.el-submenu>.el-submenu__title {
            padding-left: 13px !important;
            width: 24px;
            margin: 0;
            text-align: center;
            vertical-align: middle;
        }
        .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
            display: none;
        }
        .el-tooltip {
            padding: 0 10px !important;
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

