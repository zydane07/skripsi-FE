<template>
    <main class="font-Montserrat">
        <component :is="layout">
            <router-view />
        </component>
        <!-- <user-layout v-if="userLayout">
            <router-view />
        </user-layout>
        <login-layout v-else-if="loginLayout">
            <router-view />
        </login-layout>
        <admin-layout v-else-if="adminLayout">
            <router-view />
        </admin-layout> -->
    </main>
</template>

<script>
import UserLayout from "@/layouts/UserLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue";
// import AdminLayout from "./layouts/AdminLayout.vue";
// const userLayout = "user-layout";
// const loginLayout = "login-layout";
// const adminLayout = "admin-layout";

export default {
    data() {
        return {
            btn: !null,
        };
    },
    components: { UserLayout, LoginLayout },
    computed: {
        layout() {
            return this.$route.meta.layout || "div";
        },
        userLayout() {
            return this.$route.meta.layout;
        },
        loginLayout() {
            console.log(this.$route.meta.layout);
            return this.$route.meta.layout;
        },
        adminLayout() {
            return this.$route.meta.layout;
        },
    },
};
</script>
