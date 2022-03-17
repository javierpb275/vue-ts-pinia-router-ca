import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';
import CartView from '../views/CartView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;