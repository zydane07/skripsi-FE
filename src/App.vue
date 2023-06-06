<template>
    <main class="font-Montserrat">
        <component :is="layout">
            <router-view />
        </component>
    </main>
</template>

<script>
import { onMounted } from "vue";
import router from "./router";
import UserLayout from "@/layouts/UserLayout.vue";
import LoginLayout from "./layouts/LoginLayout.vue";

export default {
    components: { UserLayout, LoginLayout },
    setup() {
        onMounted(() => {
            router.beforeEach((to, from, next) => {
                document.title = `${to.meta.title} || Yourney`;
                next();
            });
        });
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "div";
        },
    },
};
</script>
