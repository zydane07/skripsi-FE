<template>
    <section class="login-admin relative w-full h-full py-40 min-h-screen">
        <div
            class="absolute top-0 w-full h-full bg-black bg-no-repeat bg-cover"
            :style="`background-image: url('${registerBg2}');`"
        ></div>
        <div class="container mx-auto px-4 h-full">
            <div class="flex content-center items-center justify-center h-full">
                <div class="w-full lg:w-3/6 xl:w-5/12 px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0"
                    >
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div
                                class="text-blueGray-400 text-center mb-3 px-6 py-6"
                            >
                                <h1 class="text-lg font-bold">
                                    Selamat Datang di Yourney
                                </h1>
                                <small
                                    >Silahkan Masukkan Email dan Password</small
                                >
                            </div>
                            <form @submit.prevent="login">
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Email"
                                        v-model="email"
                                    />
                                    <span
                                        v-if="!email"
                                        class="error-sign text-red-500"
                                        >Email belum diisi</span
                                    >
                                    <span
                                        v-else-if="!isEmailValid(email)"
                                        class="error-sign text-red-500"
                                        >Tolong Masukkan Email yang Valid</span
                                    >
                                </div>

                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <div class="relative">
                                        <input
                                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            :type="passwordFieldType"
                                            v-model="password"
                                        />

                                        <div
                                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            <button
                                                type="button"
                                                @click="switchVisibility"
                                            >
                                                <i
                                                    class="fa-solid"
                                                    :class="{
                                                        'fa-eye': text,
                                                        'fa-eye-slash':
                                                            password,
                                                    }"
                                                ></i>
                                            </button>
                                        </div>
                                    </div>
                                    <span
                                        v-if="!password"
                                        class="error-sign text-red-500"
                                        >password tidak boleh kosong</span
                                    >
                                    <span
                                        v-else-if="!isPasswordValid(password)"
                                        class="error-sign text-red-500"
                                        >Password harus terdiri dari minimal 5
                                        kata</span
                                    >
                                </div>

                                <div class="text-center mt-6">
                                    <button
                                        class="bg-black text-white active:bg-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import registerBg2 from "@/assets/img/register_bg_2.png";
axios.interceptors.request.use((config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
});
export default {
    name: "login-admin",
    data() {
        return {
            registerBg2,
            email: "",
            password: "",
            passwordFieldType: "password",
            text: false, // Added 'text' variable
            passwords: false, // Added 'passwords' variable

            date: new Date().getFullYear(),
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

                localStorage.setItem("access_token", access_token);
                // Check if user is an admin
                const userResponse = await axios.get(
                    `${process.env.VUE_APP_BASE_URL}/users`
                );
                const users = userResponse.data;
                const currentUser = users.find(
                    (user) => user.email === this.email
                );
                if (currentUser.isAdmin) {
                    alert("Login berhasil");
                    this.$router.push({ name: "dashboard-admin" });
                } else {
                    alert(
                        "You do not have admin privileges. Please contact an administrator."
                    );
                }
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
