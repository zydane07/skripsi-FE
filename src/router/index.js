import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/HomeView.vue";
import InformasiSistemView from "@/views/home/InformasiSistemView.vue";
import DaftarMikatView from "@/views/home/DaftarMikatView.vue";
import TentangKamiView from "@/views/home/TentangKamiView.vue";
import HasilView from "@/views/home/HasilView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import LoginUser from "@/views/auth/LoginUser.vue";
import RegisterUser from "@/views/auth/RegisterUser.vue";

const routes = [
    {
        path: "/",
        name: "home",
        meta: { layout: UserLayout },
        component: HomeView,
    },
    {
        path: "/informasi-sistem",
        name: "system-information",
        meta: { layout: UserLayout },
        component: InformasiSistemView,
    },
    {
        path: "/daftar-minat-bakat",
        name: "list-talent-interest",
        meta: { layout: UserLayout },
        component: DaftarMikatView,
    },
    {
        path: "/tentang-kami",
        name: "about-us",
        meta: { layout: UserLayout },
        component: TentangKamiView,
    },
    {
        path: "/hasil-diagnosis",
        name: "diagnosis-result",
        meta: { layout: UserLayout },
        component: HasilView,
    },
    {
        path: "/login",
        name: "login-user",
        meta: { layout: LoginLayout },
        component: LoginUser,
    },
    {
        path: "/register",
        name: "register-user",
        meta: { layout: LoginLayout },
        component: RegisterUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
