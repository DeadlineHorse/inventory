import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        
        {
            path: "/signin",
            name: "signin",
            component: () => import("../pages/signin.vue"),
            alias: ['/']
        },

        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../pages/dashboard.vue")
        }

    ]

})

router.beforeEach((to) => {

    const AuthStorage = localStorage.getItem("auth") || false

    const AuthGranted =  JSON.parse(AuthStorage) ?? AuthStorage

    if(!AuthGranted && to.name !== 'signin') {

        return { name: 'signin' }

    }

    if(AuthGranted && to.name === 'signin') {

        return { name: 'dashboard' }

    }

})

export default router