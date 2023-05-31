<template>
    <NavbarUser />
    <Router-view />
    <FooterUser />
</template>

<script>
import NavbarUser from "@/components/home/NavbarUser.vue";
import FooterUser from "@/components/home/FooterUser.vue";
export default {
    components: { NavbarUser, FooterUser },
    name: "user-layout",
};
</script>
