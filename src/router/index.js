import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import InformasiSistemView from "@/views/InformasiSistemView.vue";
import DaftarMikatView from "@/views/DaftarMikatView.vue";
import TentangKamiView from "@/views/TentangKamiView.vue";
import HasilView from "@/views/HasilView.vue";
import UserLayout from "@/layouts/UserLayout.vue";

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
        name: "hasil-diagnosis",
        meta: { layout: UserLayout },
        component: HasilView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
