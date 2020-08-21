import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: () => import("@/views/home") },
    ],
    mode: "history"
})
export default router;