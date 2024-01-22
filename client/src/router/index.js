import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        
        {
            path: "/signin",
            name: "signin",
            component: () => import("../pages/guest/signin.vue"),
            alias: ['/'],
            meta: {
                layout: 'Layout'
            }
        },

        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../pages/auth/dashboard.vue"),
            meta: {
                layout: 'Layout'
            }
        },

        {
            path: "/items",
            name: "items",
            component: () => import("../pages/auth/items.vue"),
            meta: {
                layout: 'Layout'
            },
            children: [{

                path: ":id",
                component: () => import("../pages/auth/item.vue")

            }]
        },

        {
            path: "/import",
            name: "import",
            component: () => import("../pages/auth/import.vue"),
            meta: {
                layout: 'Layout'
            }
        },

        {
            path: "/export",
            name: "export",
            component: () => import("../pages/auth/export.vue"),
            meta: {
                layout: 'Layout'
            }
        },

        {
            path: "/profile",
            name: "profile",
            component: () => import("../pages/auth/profile.vue"),
            meta: {
                layout: 'Layout'
            }
        }

    ]

})

router.beforeEach((to) => {

    const AuthStorage = localStorage.getItem("auth") || false

    let AuthGranted;

    try {

        AuthGranted = JSON.parse(AuthStorage)

    } catch(error) {

        AuthGranted = AuthStorage

    }

    if(!AuthGranted && to.name !== 'signin') {

        return { name: 'signin' }

    }

    if(AuthGranted && to.name === 'signin') {

        return { name: 'dashboard' }

    }

})

export default router