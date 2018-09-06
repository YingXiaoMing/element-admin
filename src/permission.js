import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    console.log("2222");
    store.dispatch('GenerateRoutes');
    console.log("2");
    router.addRoutes(store.getters.addRoutes);
    console.log(router);
    next();
})  