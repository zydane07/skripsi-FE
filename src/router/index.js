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
        path: "/dashboard",
        name: "home-user",
        meta: { layout: UserLayout, title: "Landing Page" },
        component: HomeView,
    },
    {
        path: "/informasi-sistem",
        name: "system-information",
        meta: { layout: UserLayout, title: "Informasi Sistem" },
        component: InformasiSistemView,
    },
    {
        path: "/konsultasi",
        name: "list-talent-interest",
        meta: { layout: UserLayout, title: "Konsultasi" },
        component: DaftarMikatView,
    },
    {
        path: "/tentang-kami",
        name: "about-us",
        meta: { layout: UserLayout, title: "Tentang Kami" },
        component: TentangKamiView,
    },

    {
        path: "/",
        name: "login-user",
        meta: { layout: LoginLayout, title: "Login User" },
        component: LoginUser,
    },
    {
        path: "/register",
        name: "register-user",
        meta: { layout: LoginLayout, title: "Register User" },
        component: RegisterUser,
    },
    // end user

    // admin
    {
        path: "/admin/dashboard",
        name: "dashboard-admin",
        meta: { layout: AdminLayout, title: "Dashboard" },
        component: DashboardView,
    },
    {
        path: "/admin/data-bidang-pekerjaan",
        name: "data-bidang-pekerjaan",
        meta: { layout: AdminLayout, title: "Data Bidang Pekerjaan" },
        component: PekerjaanView,
    },
    {
        path: "/admin/data-minat",
        name: "data-minat",
        meta: { layout: AdminLayout, title: "Data Minat" },
        component: MinatView,
    },
    {
        path: "/admin/data-bakat",
        name: "data-bakat",
        meta: { layout: AdminLayout, title: "Data Bakat" },
        component: BakatView,
    },
    {
        path: "/admin/data-rules",
        name: "data-rules",
        meta: { layout: AdminLayout, title: "Data Rules" },
        component: RulesView,
    },
    {
        path: "/admin/",
        name: "login",
        meta: { title: "Login Admin" },
        component: LoginAdminView,
    },
    // end admin
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
