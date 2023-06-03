import { createRouter, createWebHistory } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import HomeView from "@/views/home/HomeView.vue";
import InformasiSistemView from "@/views/home/InformasiSistemView.vue";
import DaftarMikatView from "@/views/home/DaftarMikatView.vue";
import TentangKamiView from "@/views/home/TentangKamiView.vue";
import LoginUser from "@/views/auth/LoginUser.vue";
import RegisterUser from "@/views/auth/RegisterUser.vue";
import DashboardView from "@/views/admin/DashboardView.vue";
import PekerjaanView from "@/views/admin/PekerjaanView.vue";
import MinatView from "@/views/admin/MinatView.vue";
import BakatView from "@/views/admin/BakatView.vue";
import RulesView from "@/views/admin/RulesView.vue";
import LoginAdminView from "@/views/admin/LoginAdminView.vue";
const routes = [
    // user
    {
        path: "/",
        name: "home-user",
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
        path: "/konsultasi",
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
    // end user

    // admin
    {
        path: "/admin/",
        name: "dashboard-admin",
        meta: { layout: AdminLayout },
        component: DashboardView,
    },
    {
        path: "/admin/data-bidang-pekerjaan",
        name: "data-bidang-pekerjaan",
        meta: { layout: AdminLayout },
        component: PekerjaanView,
    },
    {
        path: "/admin/data-minat",
        name: "data-minat",
        meta: { layout: AdminLayout },
        component: MinatView,
    },
    {
        path: "/admin/data-bakat",
        name: "data-bakat",
        meta: { layout: AdminLayout },
        component: BakatView,
    },
    {
        path: "/admin/data-bakat",
        name: "data-bakat",
        meta: { layout: AdminLayout },
        component: BakatView,
    },
    {
        path: "/admin/data-rules",
        name: "data-rules",
        meta: { layout: AdminLayout },
        component: RulesView,
    },
    {
        path: "/admin/login",
        name: "login",
        component: LoginAdminView,
    },
    // end admin
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
