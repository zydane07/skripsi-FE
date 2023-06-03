<template>
    <section class="home">
        <!-- jumbotron -->
        <div
            class="jumbotron bg-primary-100 box flex items-center justify-between gap-2 xl:gap-4 shadow-xl"
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
                    <router-link :to="{ name: 'list-talent-interest' }">
                        Mulai Konsultasi</router-link
                    >
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

<style scoped>
.jumbotron {
    height: 70vh;
}

@media only screen and (min-width: 1037px) {
    section {
        height: 69vh;
    }
}
</style>
