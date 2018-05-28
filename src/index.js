import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';
import VueX from 'vuex';
import VueRouter from 'vue-router';

import 'mint-ui/lib/style.css';

Vue.use(VueRouter);
Vue.use(VueX);
Vue.use(Mint);


new Vue({
    render: h => h(App)
}).$mount('#app')