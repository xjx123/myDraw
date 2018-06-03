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
    if (!Vue.prototype.$webSocket) {
        const webSocket = new WebSocket('ws://localhost:3333/ws/');
        console.log("beforeEach webSocket: ",webSocket);
        webSocket.onmessage = (event) => {
            var data = event.data;
            console.log("webSocket onmessage: ", data);
        }

        Vue.prototype.$webSocket = webSocket;
    }

    if ((!localStorage.getItem('userName') || !localStorage.getItem('userId')) && to.fullPath !== '/login') {
        next({ path: '/login' })
    } else if (to.fullPath === '/') {
        next({ path: '/home' })
    } else {
        next();
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

document.addEventListener('touchmove', e => {
    e.preventDefault()
}, false);