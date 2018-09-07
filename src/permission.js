import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    //权限控制在这里做
    // store.dispatch('GenerateRoutes');
    // router.addRoutes(store.getters.addRoutes);
    next()
})  