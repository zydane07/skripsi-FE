<template>
    <footer
        class="footer-user text-center bg-primary-100 py-6 text-black border-t border-secondary-300"
    >
        <h1 class="mb-3 font-bold">
            © Muhammad Zydane 2023 | Yourney | muhammadzydane3@gmail.com
        </h1>

        <div
            class="box mx-6 sm:flex justify-evenly lg:justify-center lg:gap-x-8 sm:mx-0"
        >
            <div v-for="sosialMedia in sosialMedias" :key="sosialMedia.text">
                <div
                    class="flex justify-start items-center gap-x-2 mb-2 sm:mb-0 text-sm"
                >
                    <i :class="sosialMedia.logo" class=""></i>
                    <p>{{ sosialMedia.text }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-user",
    data() {
        return {
            sosialMedias: [
                {
                    logo: "fa-brands fa-github",
                    text: "zydane07",
                },
                {
                    logo: "fa-brands fa-linkedin",
                    text: "Muhammad Zydane",
                },
                {
                    logo: "fa-brands fa-square-instagram",
                    text: "muhammadzydane",
                },
            ],
        };
    },
};
</script>
