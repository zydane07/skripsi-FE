<template>
    <sidebar-admin />
    <div class="relative md:ml-64 bg-blueGray-100">
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <router-view />
            <footer-admin />
        </div>
    </div>
</template>

<script>
import FooterAdmin from "@/components/FooterAdmin.vue";
import HeaderStats from "@/components/HeaderStats.vue";
import SidebarAdmin from "@/components/SidebarAdmin.vue";
export default {
    components: { SidebarAdmin, HeaderStats, FooterAdmin },
    name: "admin-layout",
};
</script>
