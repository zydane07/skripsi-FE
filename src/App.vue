<template>
    <div class="font-Montserrat">
        <component :is="layout">
            <router-view />
        </component>
        <!-- <NavbarUser />
        <Router-view />
        <FooterUser /> -->
    </div>
</template>

<!-- <script>
import FooterUser from "./components/FooterUser.vue";
import NavbarUser from "./components/NavbarUser.vue";
export default {
    components: { NavbarUser, FooterUser },
};
</script> -->
<script>
import UserLayout from "@/layouts/UserLayout.vue";
const userLayout = "user-layout";

export default {
    components: UserLayout,
    computed: {
        layout() {
            console.log(this.$route.meta.layout);
            return this.$route.meta.layout || userLayout;
        },
    },
};
</script>
