<template>
    <section class="home">
        <!-- jumbotron -->
        <div
            class="bg-primary-100 box flex items-center justify-between gap-2 xl:gap-4 py-16 shadow-xl"
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
                    :src="consultation"
                    alt="Consultation"
                    class="w-64 xl:w-96"
                />
            </div>
        </div>

        <!-- konsultasi -->
        <div class="box my-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Mulai Konsultasi</h1>
            <p class="text-caption" style="text-align-last: center">
                Konsultasi akan dilakukan dengan kamu memilih minat dan bakat
                yang kamu rasa cocok dengan dirimu. Jika kamu ragu tentang minat
                dan bakat yang kamu miliki, kamu dapat melihat<br />
                <a
                    href="#"
                    class="transition duration-300 hover:font-bold text-primary-100"
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
                            v-for="talent in talents"
                            :key="talent.text"
                        >
                            <input
                                :id="talent.id"
                                :name="talent.id"
                                type="checkbox"
                                value=""
                                class="checkbox-mikat"
                            />
                            <label
                                :for="talent.id"
                                class="ml-2 text-sm font-medium text-gray-900 lg:text-base"
                                >{{ talent.text }}</label
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
                                :id="interest.id"
                                :name="interest.id"
                                type="checkbox"
                                value=""
                                class="checkbox-mikat"
                            />
                            <label
                                :for="interest.id"
                                class="ml-2 text-sm font-medium text-gray-900 lg:text-base"
                                >{{ interest.text }}</label
                            >
                        </div>
                    </div>
                </div>
            </div>

            <!-- button submit -->
            <div class="text-center">
                <button class="btn btn-transition px-6 py-4 rounded-lg">
                    <router-link :to="{ name: 'diagnosis-result' }">
                        Lihat Hasil Bidang Pekerjaan</router-link
                    >
                </button>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import consultation from "@/assets/img/consultation.svg";

export default {
    data() {
        return {
            consultation,
        };
    },
    computed: {
        ...mapState(["interests", "talents"]),
    },
};
</script>
