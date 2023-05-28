import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InformasiSistemView from "../views/InformasiSistemView.vue";
import DaftarMikatView from "../views/DaftarMikatView.vue";
import TentangKamiView from "../views/TentangKamiView.vue";
import HasilView from "@/views/HasilView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/informasi-sistem",
        name: "system-information",
        component: InformasiSistemView,
    },
    {
        path: "/daftar-minat-bakat",
        name: "list-talent-interest",
        component: DaftarMikatView,
    },
    {
        path: "/tentang-kami",
        name: "about-us",
        component: TentangKamiView,
    },
    {
        path: "/hasil-diagnosis",
        name: "hasil-diagnosis",
        component: HasilView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
