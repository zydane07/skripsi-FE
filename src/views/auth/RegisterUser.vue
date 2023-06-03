<template>
    <section class="register-user flex items-center" style="height: 100vh">
        <div class="mx-11 sm:mx-auto">
            <div class="mb-8">
                <h1 class="font-bold text-lg text-center">
                    Selamat Datang di Yourney!
                </h1>
                <h2 class="text-sm text-center">
                    Lengkapi data-data untuk memulai perjalananmu
                </h2>
            </div>

            <!-- form -->
            <form action="#" class="lg:grid grid-cols-2 gap-x-4">
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
                    <label class="label-text" for="nama">Nama</label>
                    <input
                        class="input-text focus:outline-none focus:shadow-outline"
                        id="nama"
                        type="nama"
                        placeholder="Masukkan Namamu"
                    />
                </div>
                <div class="mb-4 col-span-2">
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
                </div>
                <div class="mb-4">
                    <label class="label-text" for="jenis-kelamin"
                        >Jenis Kelamin</label
                    >
                    <select
                        name="jenis-kelamin"
                        id="jenis-kelamin"
                        class="leading-tight shadow text-sm rounded border text-gray-700 h-14 w-full px-3 bg-white hover:border-gray-400 focus:outline-none focus:shadow-outline"
                    >
                        <option selected>Pilih Jenis Kelamin</option>
                        <option value="LK">Laki-Laki</option>
                        <option value="PR">Perempuan</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="label-text" for="pekerjaan">Pekerjaan</label>
                    <select
                        name="pekerjaan"
                        id="pekerjaan"
                        class="leading-tight shadow text-sm rounded border text-gray-700 h-14 w-full px-3 bg-white hover:border-gray-400 focus:outline-none focus:shadow-outline"
                    >
                        <option selected>Pilih Pekerjaanmu</option>
                        <option value="pelajar">Pelajar</option>
                        <option value="mahasiswa">Mahasiswa</option>
                        <option value="jobseekers">Jobseekers</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </div>

                <div class="mb-2 flex justify-center col-span-2">
                    <button
                        class="btn btn-transition py-4 px-4 rounded text-center w-full"
                    >
                        Register
                    </button>
                </div>
            </form>
            <p class="text-sm text-center">
                Sudah Memiliki Akun?
                <RouterLink
                    :to="{ name: 'login-user' }"
                    class="font-bold text-primary-100"
                    >Login disini</RouterLink
                >
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "register-user",
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
