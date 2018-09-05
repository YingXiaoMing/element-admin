<template>
<div class="wrapper fixed">
    <v-header></v-header>
    <v-sider></v-sider>
    <div class="content-wrapper" :class="{ slideCollapse: sidebar.collapsed }">
        <el-scrollbar tag="div" wrapClass="content-scrollbar">
            <section class="content">
                <el-breadcrumb separator=">" style="margin-bottom:20px;">
                  <template v-for="child in currentMenus">
                      <el-breadcrumb-item>{{child.name}}</el-breadcrumb-item>
                  </template>
                </el-breadcrumb>
                <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
                    <router-view></router-view>
                </transition>
            </section>
        </el-scrollbar>
    </div>
</div>
</template>
<script>
import Vue from "vue";
import VHeader from "./header";
import VSider from "./sideMenu";
import { mapActions, mapGetters } from 'vuex';
import 'animate.css'
export default {
    name: 'home',
    components: {
        VHeader,
        VSider
    },
    computed: {
        ...mapGetters({
            currentMenus: 'currentMenus',
            sidebar: 'sidebar'
        })
    },
    created () {
        this.$router.beforeEach((to, from, next) => {
            this.$store.dispatch('changeCurrentMenu',to);
            next()
        })
    },
    methods: {
        ...mapActions({
            changeCurrentMenu: 'changeCurrentMenu'
        })
    }
}
</script>
<style lang="scss">
html{
    background-color: #f5f5f5;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    /*overflow-y: hidden;*/
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
}
body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
}
.content-wrapper {
    -webkit-transition: -webkit-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;
    margin-left: 230px;
    padding-top: 50px;
    .content {
        padding: 1.25rem;
    }
    &.slideCollapse {
        margin-left: 44px;
    }
    .el-scrollbar__bar.is-vertical{
        display: none;
    }
}
.animated {
    animation-duration: .2s;
}
</style>


