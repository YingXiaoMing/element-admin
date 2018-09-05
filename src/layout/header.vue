<template>
    <header class="main-header animated" :class="{closeLogo:sidebar.collapsed}">
        <a href="#" class="logo">
            <span class="logo-lg"><img src="https://pictrue-1256199976.cos.ap-guangzhou.myqcloud.com/E0CC7F03DBEF41A9981C2DDEDE9DC145.jpg"/>&nbsp;<b>新感觉管理后台</b></span>
        </a>
        <nav class="navbar">
            <a href="#" class="sidebar-toggle" role="button" @click.stop.prevent="toggleMenu()"></a>
        </nav>
    </header>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import types from "../store/mutation-types";
export default {
    computed: mapGetters({
        sidebar: 'sidebar'
    }),
    methods: {
        toggleMenu() {
            this.toggleSidebar();
        },
        ...mapMutations({
            toggleSidebar: types.TOGGLE_SIDEBAR,
            toggleSidebarShow: types.toggleSidebarShow
        })
    },
    
}
</script>

<style lang="scss" scoped>
.animated {
    animation-duration: .2s;
}
.main-header {
    position: fixed;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    z-index: 1999;
    color: #48576a;
    background: #ffffff;
    animation-name: slideInDown;
    animation-fill-mode: both;
    &.closeLogo {
        .navbar {
            margin-left: 44px;
        }
        .logo {
            width: 44px;
            padding: 0 8px;
        }
        
    }
    .navbar {
        -webkit-transition: margin-left 0.3s ease-in-out;
        -o-transition: margin-left 0.3s ease-in-out;
        transition: margin-left 0.3s ease-in-out;
        margin-bottom: 0;
        margin-left: 230px;
        min-height: 50px;
        border: none;
        background-color: #ffffff;
        border-radius: 0;
        .sidebar-toggle{
            display: block;
            float: left;
            background-color: transparent;
            background-image: none;
            padding: 15px 15px;
            line-height: 20px;
            font-family: fontAwesome;
            &:before {
                content: "\f03b";
            }
            &:hover {
                background: #f9f9f9;
            }
        }
    }
    .logo {
        -webkit-transition: width 0.3s ease-in-out;
        -o-transition: width 0.3s ease-in-out;
        transition: width 0.3s ease-in-out;
        display: block;
        float: left;
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 230px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        font-size: 20px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0 15px;
        font-weight: 300;
        overflow: hidden;
        text-decoration: none;
        .logo-lg {
            // display: block;
            height: 38px;
            line-height: 38px;
            img {
                width: 32px;
                height: 32px;
                vertical-align: middle;
            }
            b{
                vertical-align: middle;
            }
        }
    }
    a {
        text-decoration: none;
        color: #48576a;
    }
}
</style>
