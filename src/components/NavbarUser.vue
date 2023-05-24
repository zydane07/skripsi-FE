<template>
    <header
        class="mb-16"
        style="@media screen and (mib-width: 10037px) {margin-bottom: 4.5rem}"
    >
        <nav
            class="box py-4 bg-primary border-b border-hover shadow fixed top-0 inset-x-0 z-10"
        >
            <div class="flex items-center justify-between px-2">
                <!-- logo -->
                <div class="flex items-center gap-x-2 cursor-pointer">
                    <img
                        src="../assets/img/Logo.png"
                        alt="Logo Web"
                        class="w-8 border-navbar rounded-lg"
                    />
                    <h1 class="font-bold">Yourney</h1>
                </div>

                <!-- menu mobile -->
                <div class="flex items-center lg:hidden cursor-pointer">
                    <button class="mobile-menu-button outline-none">
                        <i
                            class="fa-solid fa-bars text-xl"
                            x-show="!showMenu"
                        ></i>
                    </button>
                </div>

                <!-- menu web-->
                <div class="hidden lg:flex lg:items-center lg:justify-between">
                    <ul class="lg:flex hidden">
                        <li
                            class="hover:bg-white px-2 py-2 rounded-md cursor-pointer"
                            v-for="link in links"
                            :key="link.route"
                            router
                            :to="link.route"
                        >
                            {{ link.text }}
                        </li>
                    </ul>
                </div>

                <!-- username Web -->
                <div class="hidden lg:block">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full border-navbar"
                                src="../assets/img/Men-PP.png"
                                alt="Profile Picture"
                            />
                        </div>
                        <div
                            class="ml-2 dropdown relative inline-block cursor-pointer"
                        >
                            <div
                                @click="dropdownMenu()"
                                class="text-base font-medium text-white dropbtn border-none cursor-pointer hover:text-black"
                            >
                                Muhammad Zydane
                                <i class="fa-solid fa-caret-down"></i>
                            </div>
                            <div
                                id="myDropdown"
                                class="dropdown-content hidden absolute bg-white min-w-full overflow-auto shadow-md z-10 rounded-lg"
                            >
                                <a
                                    href="#home"
                                    class="text-black px-4 py-3 block hover:bg-secondary"
                                    >Profile</a
                                >
                                <a
                                    href="#about"
                                    class="text-black px-4 py-3 block hover:bg-secondary"
                                    >Logout</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- menu mobile aktif -->
            <div class="mobile-menu hidden lg:hidden my-4">
                <ul class="lg:hidden cursor-pointer">
                    <li
                        class="p-2 hover:bg-white rounded-md"
                        v-for="link in links"
                        :key="link.route"
                    >
                        {{ link.text }}
                    </li>
                </ul>
                <!-- userName -->
                <div class="border-t border-gray-700 mt-4 cursor-pointer">
                    <div class="flex items-center mt-3">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full border-navbar"
                                src="../assets/img/Men-PP.png"
                                alt="Profile Picture"
                            />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium text-white">
                                Muhammad Zydane
                            </div>
                            <div class="text-sm font-medium text-gray-200">
                                muhammadzydane3@gmail.com
                            </div>
                        </div>
                    </div>
                    <!-- menu -->
                    <div class="mt-3">
                        <a
                            href="#"
                            class="block m-0 rounded-md hover:bg-white p-2 text-base font-medium"
                            >Profile</a
                        >
                        <a
                            href="#"
                            class="block m-0 rounded-md hover:bg-white p-2 text-base font-medium"
                            >Logout</a
                        >
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
window.onload = () => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
};

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

export default {
    data() {
        return {
            links: [
                {
                    text: "Homepage",
                    route: "/",
                },
                { text: "Informasi Sistem", route: "/informasi-sistem" },
                {
                    text: "Daftar Minat dan Bakat",
                    route: "/daftar-minat-bakat",
                },
                { text: "Tentang Kami", route: "/tentang-kami" },
            ],
        };
    },
    methods: {
        dropdownMenu() {
            document.getElementById("myDropdown").classList.toggle("show");
        },
    },
};
</script>

<style scoped>
.show {
    display: block;
}
</style>
