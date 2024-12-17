import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ResembleDemoView',
            component: () => import('../views/ResembleDemoView.vue'),
        },
    ],
})

export default router
