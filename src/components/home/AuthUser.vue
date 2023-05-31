<template>
    <div class="hidden lg:block" style="height: 100vh">
        <img
            :src="imgLogin"
            alt="Login Image"
            class="object-cover w-full h-full"
        />
    </div>
</template>

<script>
import imgLogin from "@/assets/img/img-login.jpg";

export default {
    data() {
        return {
            imgLogin,
        };
    },
};
</script>
