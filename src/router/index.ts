import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';
import CartView from '../views/CartView.vue';
import CatsView from '../views/CatsView.vue';
import { facts } from '../assets/facts';

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
    },
    {
        path: '/cats',
        name: 'Cats',
        component: CatsView
    }, 
    {
        path: '/cats/fact/:id',
        name: 'Fact',
        component: () => import('../views/Fact.vue'),
        beforeEnter: (to, _, next) => {
            const { id } = to.params

            if (Array.isArray(id)) {
              next({ path: '/error' })
              return
            }
      
            // Is a valid index number
            const index = parseInt(id)
            if (index < 0 || index >= facts.length) {
              next({ path: '/error' })
              return
            }
      
            next()
        }
    },
    /*
    {
        path: '/cats/facts/',
        name: 'FactList',
        component: () => import('../views/FactList.vue'),
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: () => import('../views/PageNotFound.vue')
    }
    */
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;