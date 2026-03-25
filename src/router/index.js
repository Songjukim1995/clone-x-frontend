import DemoPage from "@/views/DemoPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import LifeCycle from "@/views/LifeCycle.vue"
import SignUpPage from "@/views/SignUpPage.vue"
import MainPage from "@/views/MainPage.vue"
import { createWebHistory, createRouter } from "vue-router"

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/demo',
            component: DemoPage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/life',
            component: LifeCycle
        },
        {
            path: '/signup',
            component: SignUpPage
        },
        {
            path: '/main',
            component: MainPage
        },
    ]
})

export default router