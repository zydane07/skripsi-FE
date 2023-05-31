<template>
    <section class="login-user flex items-center" style="height: 100vh">
        <div class="mx-11 sm:mx-auto">
            <div class="mb-8">
                <h1 class="font-bold text-lg text-center">
                    Selamat Datang di Yourney!
                </h1>
                <h2 class="text-sm text-center">
                    Masukkan email dan password untuk memulai perjalananmu
                </h2>
            </div>

            <!-- form -->
            <form action="#" class="">
                <div class="mb-4">
                    <label class="label-text" for="email">Email</label>
                    <input
                        class="input-text focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Masukkan Emailmu"
                    />
                </div>
                <div class="mb-4">
                    <label class="label-text" for="password">Password</label>
                    <div class="relative">
                        <input
                            class="input-text focus:outline-none focus:shadow-outline"
                            id="password"
                            :type="passwordFieldType"
                            v-model="password"
                            placeholder="Masukkan Password"
                        />
                        <div
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        >
                            <button type="password" @click="switchVisibility">
                                show/hide
                            </button>
                        </div>
                    </div>
                </div>
                <div class="mb-2 flex justify-center">
                    <button
                        class="btn btn-transition py-4 px-4 rounded text-center w-full"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p class="text-sm text-center">
                Belum Memiliki Akun?
                <RouterLink
                    :to="{ name: 'register-user' }"
                    class="font-bold text-primary-100"
                    >Daftar disini</RouterLink
                >
            </p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            password: "",
            passwordFieldType: "password",
        };
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
        },
    },
};
</script>

<style scoped>
@media only screen and (max-width: 640px) {
    section {
        height: 90vh;
    }
}
</style>
