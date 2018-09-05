import Vue from "vue";
import Vuex from "vuex";
import types from "./mutation-types";
import defaultValue from "../config/default";
import { getCurrentMenu } from "../common/utils";
Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    getters: {
        menuList: state => state.menuList,
        currentMenus: state => state.currentMenus,
        sidebar: state => state.sidebar
    },
    state: {
        menuList: {},
        currentMenus: [],
        sidebar: {
            collapsed: false,
            show: true
        }
    },
    //同步函数
    mutations: {
        [types.LOAD_MENU] (state,menu) {
            state.menuList = menu;
        },
        [types.LOAD_CURRENT_MENU] (state,menu) {
            state.currentMenus = menu;
        },
        [types.TOGGLE_SIDEBAR] (state,collapsed) {
            if (collapsed == null) collapsed = !state.sidebar.collapsed;
            state.sidebar.collapsed = collapsed;
        },
        [types.TOGGLE_SIDEBAR_SHOW] (state, show) {
            if (show == null) state.sidebar.show = !state.sidebar.show;
            else {
                state.sidebar.show = show;
            }
        }
    },
    actions: {
        loadMenuList : ({commit}) => {
            commit(types.LOAD_MENU,defaultValue.menuList);
        },
        changeCurrentMenu: ({state,commit},{fullPath}) => {
            const a = getCurrentMenu(fullPath,state.menuList);
            commit(types.LOAD_CURRENT_MENU, a.reverse());
        }
    }
})

export default store