<template>
    <header
        class="mb-16 lg:mb-[4.5rem] navbar-user"
        style="@media screen and (min-width: 1037px) {margin-bottom: 4.5rem}"
    >
        <nav
            class="box py-4 bg-primary-100 border-b border-hover shadow fixed top-0 inset-x-0 z-10"
        >
            <div class="flex items-center justify-between px-2">
                <!-- logo -->
                <div class="flex items-center gap-x-2 cursor-pointer">
                    <img
                        :src="logo"
                        alt="Logo Web"
                        class="w-8 border-navbar rounded-lg"
                    />
                    <h1 class="font-bold">Yourney</h1>
                </div>

                <!-- menu web-->
                <div class="hidden lg:flex lg:items-center lg:justify-between">
                    <ul class="lg:flex hidden">
                        <li
                            class="px-2 py-2 rounded-md cursor-pointer"
                            v-for="link in links"
                            :key="link.route"
                        >
                            <RouterLink
                                :to="link.route"
                                v-slot="{ href, navigate, isActive }"
                            >
                                <a
                                    :href="href"
                                    @click="navigate"
                                    class="block"
                                    :class="[
                                        isActive
                                            ? 'text-primary-500 hover:text-primary-600 font-bold'
                                            : 'text-state-700 hover:text-state-500',
                                    ]"
                                    >{{ link.text }}</a
                                >
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- username Web -->
                <div class="hidden lg:block">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full border-navbar"
                                :src="profilPict"
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
                                    href=""
                                    class="text-black px-4 py-3 block hover:bg-secondary-300"
                                    >Profile</a
                                >
                                <RouterLink
                                    :to="{ name: 'login-user' }"
                                    v-slot="{ href }"
                                >
                                    <a
                                        :href="href"
                                        class="text-black px-4 py-3 block hover:bg-secondary-300"
                                        >Logout</a
                                    >
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex lg:hidden">
                    <button
                        type="button"
                        class="outline-none text-gray-800 hover:text-hover focus:outline-none focus:text-gray-400"
                    >
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul
                :class="showMenu ? 'flex' : 'hidden'"
                class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0"
            >
                <li
                    class="p-2 hover:bg-white rounded-md lg:hidden"
                    v-for="link in links"
                    :key="link.route"
                >
                    <RouterLink
                        :to="link.route"
                        v-slot="{ href, navigate, isActive }"
                    >
                        <a
                            :href="href"
                            @click="navigate"
                            class="block"
                            :class="[
                                isActive
                                    ? 'text-primary-500 hover:text-primary-600 font-bold'
                                    : 'text-state-700 hover:text-state-500',
                            ]"
                            >{{ link.text }}</a
                        >
                    </RouterLink>
                </li>
                <!-- userName -->
                <div
                    class="border-t border-gray-700 mt-4 cursor-pointer lg:hidden"
                >
                    <div class="flex items-center mt-3">
                        <div class="flex-shrink-0">
                            <img
                                class="h-10 w-10 rounded-full border-navbar"
                                :src="profilPict"
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
                        <RouterLink
                            :to="{ name: 'login-user' }"
                            v-slot="{ href }"
                        >
                            <a
                                :href="href"
                                class="block m-0 rounded-md hover:bg-white p-2 text-base font-medium"
                                >Logout</a
                            >
                        </RouterLink>
                    </div>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
// Close the dropdown if the user clicks outside of it
import logo from "@/assets/img/Logo.png";
import profilPict from "@/assets/img/Men-PP.png";
export default {
    name: "navbar-user",
    data() {
        return {
            logo,
            profilPict,
            showMenu: false,
            links: [
                {
                    text: "Homepage",
                    route: "/",
                },
                { text: "Informasi Sistem", route: "/informasi-sistem" },
                {
                    text: "Mulai Konsultasi",
                    route: "/konsultasi",
                },
                { text: "Tentang Kami", route: "/tentang-kami" },
            ],
        };
    },
    methods: {
        dropdownMenu() {
            window.onclick = (event) => {
                if (!event.target.matches(".dropbtn")) {
                    var dropdowns =
                        document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains("show")) {
                            openDropdown.classList.remove("show");
                        }
                    }
                }
            };
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
