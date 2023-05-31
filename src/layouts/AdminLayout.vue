<template>
    <sidebar-admin />
    <div class="relative md:ml-64 bg-white">
        <header-stats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <router-view />
            <footer-admin />
        </div>
    </div>
</template>

<script>
import FooterAdmin from "@/components/admin/FooterAdmin.vue";
import HeaderStats from "@/components/admin/HeaderStats.vue";
import SidebarAdmin from "@/components/admin/SidebarAdmin.vue";
export default {
    components: { SidebarAdmin, HeaderStats, FooterAdmin },
    name: "admin-layout",
};
</script>
