<template>
    <section class="list-talent-interest">
        <div class="box py-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Daftar Minat</h1>
            <div class="md:grid grid-cols-2 gap-6 lg:gap-10">
                <div v-for="(talent, index) in talents" :key="talent.id">
                    <h1 class="mb-1 font-bold lg:text-lg">
                        {{ index + 1 }}. {{ talent.text }}
                    </h1>
                    <p class="ml-4 text-justify mb-4 lg:text-lg">
                        {{ talent.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="box py-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Daftar Bakat</h1>
            <div class="md:grid grid-cols-2 gap-6 lg:gap-10">
                <div v-for="(interest, index) in interests" :key="interest.id">
                    <h1 class="mb-1 font-bold lg:text-lg">
                        {{ index + 1 }}. {{ interest.text }}
                    </h1>
                    <p class="ml-4 text-justify mb-4 lg:text-lg">
                        {{ interest.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["interests", "talents"]),
    },
};
</script>

<style lang="scss" scoped></style>
