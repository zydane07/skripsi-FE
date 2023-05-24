<template>
    <navbar-user />
    <section class="home">
        <!-- jumbotron -->
        <div
            class="bg-primary box flex items-center justify-between gap-2 xl:gap-4 py-16 shadow-xl"
        >
            <!-- CTA -->
            <div class="sm:w-1/2">
                <div class="text-justify">
                    <h1 class="font-bold text-lg lg:text-xl">
                        Konsultasikan Minat dan Bakatmu Untuk Pekerjaan yang
                        sesuai bidang
                    </h1>
                    <h2 class="lg:text-lg mt-2">
                        Tentukan bidang pekerjaan yang sesuai minat dan bakatmu
                    </h2>
                </div>
                <button
                    class="btn btn-transition py-2 px-4 rounded-md inline-flex items-center gap-x-2 my-4 lg:text-lg"
                >
                    <i class="fa-solid fa-hand-holding-heart"></i>
                    <span>Mulai Konsultasi</span>
                </button>
            </div>
            <div class="hidden sm:block">
                <img
                    src="../assets/img/consultation.svg"
                    alt="Consultation"
                    class="w-64 xl:w-96"
                />
            </div>
        </div>

        <!-- konsultasi -->
        <div class="box my-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header lg:text-xl">Mulai Konsultasi</h1>
            <p class="text-justify lg:text-lg" style="text-align-last: center">
                Konsultasi akan dilakukan dengan kamu memilih minat dan bakat
                yang kamu rasa cocok dengan dirimu. Jika kamu ragu tentang minat
                dan bakat yang kamu miliki, kamu dapat melihat<br />
                <a
                    href="#"
                    class="transition duration-300 hover:font-bold text-primary"
                    >penjelasan minat dan bakat disini.</a
                >
            </p>
            <div class="lg:grid grid-cols-2 gap-2">
                <!-- pilihan minat -->
                <div class="my-5">
                    <h2 class="font-bold mb-3 lg:text-lg">
                        Pilih minat yang sesuai
                    </h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="flex items-center mb-4"
                            v-for="(talent, index) in talents"
                            :key="talent.text"
                        >
                            <input
                                id="minat-checkbox-{index}"
                                type="checkbox"
                                value="{talent.text}"
                                class="checkbox-mikat"
                            />
                            <label
                                for="minat-checkbox-{index}"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >{{ index + 1 }} {{ talent.text }}</label
                            >
                        </div>
                    </div>
                </div>
                <!-- pilihan bakat -->
                <div class="mt-7">
                    <h2 class="font-bold mb-3 lg:text-lg">
                        Pilih bakat yang sesuai
                    </h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="flex items-center mb-4"
                            v-for="interest in interests"
                            :key="interest.text"
                        >
                            <input
                                id="bakat-checkbox"
                                type="checkbox"
                                value=""
                                class="checkbox-mikat"
                            />
                            <label
                                for="bakat-checkbox"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >{{ interest.text }}</label
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- button submit -->
            <div class="text-center">
                <button class="btn btn-transition px-6 py-4 rounded-lg">
                    Lihat Hasil Bidang Pekerjaan
                </button>
            </div>
        </div>
    </section>
    <footer-user />
</template>

<script>
// @ is an alias to /src
import NavbarUser from "@/components/NavbarUser.vue";
import FooterUser from "@/components/FooterUser.vue";

export default {
    components: { NavbarUser, FooterUser },
    data() {
        return {
            interests: [
                { text: "Kecerdasan Umum" },
                { text: "Penalaran Verbal" },
                { text: "Penalaran Non-Verbal" },
                { text: "Penalaran Numerik" },
                { text: "Pengetahuan Umum" },
                { text: "Kemampuan Ruang Bidang" },
                { text: "Kemampuan Dasar Administrasi" },
                { text: "Daya Ingat" },
            ],
            talents: [
                { text: "Outdoor" },
                { text: "Mechanical" },
                { text: "Computational" },
                { text: "Scientific" },
                { text: "Persuasive" },
                { text: "Aesthetic" },
                { text: "Literary" },
                { text: "Musical" },
                { text: "Social Service" },
                { text: "Clerical" },
                { text: "Practical" },
                { text: "Medical " },
            ],
        };
    },
};
</script>
