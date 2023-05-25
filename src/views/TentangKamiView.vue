<template>
    <navbar-user />
    <section class="about-us">
        <h1>sasasdd</h1>
    </section>
    <footer-user />
</template>

<script>
import FooterUser from "@/components/FooterUser.vue";
import NavbarUser from "@/components/NavbarUser.vue";

export default {
    setup() {
        return {};
    },
    components: { NavbarUser, FooterUser },
};
</script>

<style lang="scss" scoped></style>
