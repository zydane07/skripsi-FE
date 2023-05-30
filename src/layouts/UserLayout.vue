<template>
    <NavbarUser />
    <Router-view />
    <FooterUser />
</template>

<script>
import NavbarUser from "@/components/NavbarUser.vue";
import FooterUser from "@/components/FooterUser.vue";
export default {
    components: { NavbarUser, FooterUser },
    name: "user-layout",
};
</script>
