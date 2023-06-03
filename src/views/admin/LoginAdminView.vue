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
                            <form>
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
                                    />
                                </div>

                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                    />
                                </div>

                                <div class="text-center mt-6">
                                    <RouterLink
                                        :to="{ name: 'dashboard-admin' }"
                                    >
                                        <button
                                            class="bg-black text-white active:bg-black text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Sign In
                                        </button>
                                    </RouterLink>
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
import registerBg2 from "@/assets/img/register_bg_2.png";

export default {
    name: "login-admin",
    data() {
        return {
            registerBg2,
            date: new Date().getFullYear(),
        };
    },
};
</script>
