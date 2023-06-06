<template>
    <section class="home-user">
        <!-- jumbotron -->
        <div
            class="jumbotron bg-white box flex flex-col-reverse lg:flex-row items-center justify-evenly gap-4 shadow-xl lg:mx-auto"
        >
            <!-- CTA -->
            <div class="text-center lg:text-justify lg:w-1/2 2xl:w-5/12">
                <div class="">
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
            <div class="">
                <img
                    :src="consultation"
                    alt="Consultation"
                    class="w-80 xl:w-96"
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
    name: "home-user",
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
    height: 76.8vh;
}

@media only screen and (min-width: 1037px) {
    .jumbotron {
        height: 75.8vh;
    }
}
</style>
