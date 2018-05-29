import Vue from 'vue';
import App from './app.vue';
import Mint from 'mint-ui';
import VueX from 'vuex';
import VueRouter from 'vue-router';
import createRouter from './router/router';

import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
Vue.use(VueX);
Vue.use(Mint);

const router = createRouter();

router.beforeEach((to, from, next) => {
    console.log("to: ", to);
    // if (to.fullPath !== '/login') {
    //     next({ path: '/login'})
    // } else {
    //     next();
    // }
    next();
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')