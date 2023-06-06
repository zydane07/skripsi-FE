<template>
    <section class="register-user flex items-center" style="height: 100vh">
        <div class="w-9/12 mx-11 sm:mx-auto">
            <div class="mb-8">
                <h1 class="font-bold text-lg text-center">
                    Selamat Datang di Yourney!
                </h1>
                <h2 class="text-sm text-center">
                    Lengkapi data-data untuk memulai perjalananmu
                </h2>
            </div>

            <!-- form -->
            <form
                @submit.prevent="register"
                class="lg:grid grid-cols-2 gap-x-4"
            >
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
                    <label class="label-text" for="nama">Nama</label>
                    <input
                        class="input-text focus:outline-none focus:shadow-outline"
                        id="nama"
                        type="nama"
                        placeholder="Masukkan Namamu"
                        v-model="name"
                    />
                    <span v-if="!name" class="error-sign text-red-500"
                        >Nama belum diisi</span
                    >
                    <span
                        v-else-if="!isNameValid()"
                        class="error-sign text-red-500"
                        >Nama hanya boleh huruf alfabet[a-z]</span
                    >
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
                <div class="mb-4">
                    <label class="label-text" for="jenis-kelamin"
                        >Jenis Kelamin</label
                    >
                    <select
                        v-model="gender"
                        name="jenis-kelamin"
                        id="jenis-kelamin"
                        class="leading-tight shadow text-sm rounded border text-gray-700 h-14 w-full px-3 bg-white hover:border-gray-400 focus:outline-none focus:shadow-outline"
                    >
                        <option disabled value="">Pilih Jenis Kelamin</option>
                        <option value="LK">Laki-Laki</option>
                        <option value="PR">Perempuan</option>
                    </select>
                    <span v-if="!gender" class="error-sign text-red-500"
                        >Jenis Kelamin tidak boleh kosong</span
                    >
                </div>
                <div class="mb-4">
                    <label class="label-text" for="pekerjaan">Pekerjaan</label>
                    <select
                        v-model="job"
                        name="pekerjaan"
                        id="pekerjaan"
                        class="leading-tight shadow text-sm rounded border text-gray-700 h-14 w-full px-3 bg-white hover:border-gray-400 focus:outline-none focus:shadow-outline"
                    >
                        <option disabled value="">Pilih Pekerjaanmu</option>
                        <option value="pelajar">Pelajar</option>
                        <option value="mahasiswa">Mahasiswa</option>
                        <option value="jobseekers">Jobseekers</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                    <span v-if="!job" class="error-sign text-red-500"
                        >Pekerjaan tidak boleh kosong</span
                    >
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
            email: "",
            name: "",
            password: "",
            gender: "",
            job: "",
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
        register() {
            if (
                !this.email ||
                !this.name ||
                !this.password ||
                !this.gender ||
                !this.job
            ) {
                alert("Semua Field Harus diisi");
                return;
            }

            // validasi email
            if (!this.isEmailValid(this.email)) {
                alert("Please enter a valid email");
                return;
            }

            if (!this.isPasswordValid(this.password)) {
                alert("Password Harus minimal 5 kata");
                return;
            }

            // name harus huruf
            if (!this.isNameValid(this.name)) {
                alert("Please enter a valid name");
                return;
            }
            alert("Registrasi berhasil");

            // Navigate to the login page
            this.$router.push({ name: "login-user" });
        },
        isEmailValid(email) {
            // Email validation regex pattern
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
        },

        isNameValid() {
            // Name validation regex pattern
            const regex = /^[a-zA-Z\s]+$/;
            return regex.test(this.name);
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
