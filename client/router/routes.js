import App from '../app.vue';
import Login from '../views/login/login.vue';
import Home from '../views/home/home.vue';
import Room from '../views/room/room.vue';
import Game from '../views/game/game.vue';

export default [
    {
        path: '/',
        component: App
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        name: 'room',
        path: '/room/:id',
        component: Room
    },
    {
        path: '/game',
        component: Game
    }
]