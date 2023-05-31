<template>
    <div
        class="lg:grid grid-cols-2 items-center justify-center relative m-auto"
    >
        <header
            class="flex items-center gap-x-2 lg:absolute top-0 left-0 mt-10 ml-10 z-10 m-auto"
        >
            <img
                :src="logo"
                alt="Logo Web"
                class="w-10 border-navbar rounded-lg"
            />
            <h1 class="font-bold">Yourney</h1>
        </header>
        <router-view />
        <AuthUser />
    </div>
</template>

<script>
import AuthUser from "@/components/home/AuthUser.vue";
import logo from "@/assets/img/Logo.png";
export default {
    data() {
        return {
            logo,
        };
    },
    components: { AuthUser },
    name: "login-layout",
};
</script>

<style lang="scss" scoped></style>
