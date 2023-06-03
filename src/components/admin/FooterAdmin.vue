<template>
    <footer class="footer-admin block py-4">
        <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-blueGray-200" />
            <div
                class="flex flex-wrap items-center md:justify-between justify-center"
            >
                <div class="w-full md:w-4/12 px-4">
                    <div
                        class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
                    >
                        Copyright © {{ date }}
                        <a
                            href="https://www.creative-tim.com?ref=vn-footer-admin"
                            class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                        >
                            Yourney
                        </a>
                    </div>
                </div>
                <div class="w-full md:w-8/12 px-4">
                    <div
                        class="flex flex-wrap list-none md:justify-end justify-center"
                    >
                        <h1 class="text-sm">
                            Mohamad Zydane Ulir Rizqi Toyyibi
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-admin",
    data() {
        return {
            date: new Date().getFullYear(),
        };
    },
};
</script>
