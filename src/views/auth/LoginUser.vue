<template>
    <section class="login-user flex items-center" style="height: 100vh">
        <div class="w-9/12 mx-11 sm:mx-auto">
            <div class="mb-8">
                <h1 class="font-bold text-lg text-center">
                    Selamat Datang di Yourney!
                </h1>
                <h2 class="text-sm text-center">
                    Masukkan email dan password untuk memulai perjalananmu
                </h2>
            </div>

            <!-- form -->
            <form @submit.prevent="login" action="#" class="">
                <div class="mb-4">
                    <label class="label-text" for="email">Email</label>
                    <input
                        class="input-text focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Masukkan Emailmu"
                        v-model="email"
                    />
                    <span v-if="!email" class="error-sign text-red-500"
                        >Email belum diisi</span
                    >
                    <span
                        v-else-if="!isEmailValid(email)"
                        class="error-sign text-red-500"
                        >Tolong Masukkan Email yang Valid</span
                    >
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
                            <button type="button" @click="switchVisibility">
                                <i
                                    class="fa-solid"
                                    :class="{
                                        'fa-eye': text,
                                        'fa-eye-slash': password,
                                    }"
                                ></i>
                            </button>
                        </div>
                    </div>
                    <span v-if="!password" class="error-sign text-red-500"
                        >password tidak boleh kosong</span
                    >
                    <span
                        v-else-if="!isPasswordValid(password)"
                        class="error-sign text-red-500"
                        >Password harus terdiri dari minimal 5 kata</span
                    >
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
import axios from "axios";

axios.interceptors.request.use((config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
});
export default {
    name: "login-user",
    data() {
        return {
            email: "",
            password: "",
            passwordFieldType: "password",
            text: false, // Added 'text' variable
            passwords: false, // Added 'passwords' variable
        };
    },
    methods: {
        switchVisibility() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
            this.text = !this.text; // Toggle 'text' value
            this.passwords = !this.passwords; // Toggle 'passwords' value
        },

        async login() {
            if (!this.email || !this.password) {
                alert("Semua Field Harus diisi");
                return;
            }

            // validasi email
            if (!this.isEmailValid(this.email)) {
                alert("Please enter a valid email");
                return;
            }
            if (!this.isPasswordValid(this.password)) {
                alert("Password Salah");
                return;
            }

            try {
                const response = await axios.post(
                    `${process.env.VUE_APP_BASE_URL}/auth/login`,
                    {
                        email: this.email,
                        password: this.password,
                    }
                );

                const { access_token } = response.data; // Assuming the response contains an 'access_token' field
                alert("Login berhasil");
                localStorage.setItem("access_token", access_token);

                this.$router.push({ name: "home-user" });
            } catch (error) {
                alert(
                    "Login failed. Please check your credentials and try again."
                );
                console.error(error);
            }
        },

        isEmailValid(email) {
            // Email validation regex pattern
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
        },
        isPasswordValid(password) {
            return password.length >= 5;
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
