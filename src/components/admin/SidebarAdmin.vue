<template>
    <nav
        class="sidebar-admin md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
    >
        <div
            class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
            <!-- Brand -->
            <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                :to="{ name: 'dashboard-admin' }"
            >
                <div class="flex items-center gap-x-2 cursor-pointer">
                    <img
                        :src="logo"
                        alt="Logo Web"
                        class="w-8 border-navbar rounded-lg"
                    />
                    <h1 class="font-bold">Yourney</h1>
                </div>
            </router-link>
            <!-- Toggler -->
            <button
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                type="button"
                v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
            >
                <i class="fas fa-bars"></i>
            </button>

            <!-- Collapse -->
            <div
                class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
                v-bind:class="collapseShow"
            >
                <!-- Collapse header -->
                <div
                    class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
                >
                    <div class="flex flex-wrap">
                        <div class="w-6/12">
                            <router-link
                                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                :to="{ name: 'dashboard-admin' }"
                            >
                                <div
                                    class="flex items-center gap-x-2 cursor-pointer"
                                >
                                    <img
                                        :src="logo"
                                        alt="Logo Web"
                                        class="w-8 border-navbar rounded-lg"
                                    />
                                    <h1 class="font-bold">Yourney</h1>
                                </div>
                            </router-link>
                        </div>
                        <div class="w-6/12 flex justify-end">
                            <button
                                type="button"
                                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                v-on:click="toggleCollapseShow('hidden')"
                            >
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Navigation -->

                <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                    <li
                        class="items-center"
                        v-for="menu in menus"
                        :key="menu.route"
                    >
                        <router-link
                            :to="menu.route"
                            v-slot="{ href, navigate, isActive }"
                        >
                            <a
                                :href="href"
                                @click="navigate"
                                class="text-xs uppercase py-3 font-bold block"
                                :class="[
                                    isActive
                                        ? 'text-primary-500 hover:text-primary-100'
                                        : 'text-state-700 hover:text-state-500',
                                ]"
                            >
                                <i
                                    class="mr-2 text-sm"
                                    :class="[
                                        isActive
                                            ? 'opacity-75'
                                            : 'text-state-300',
                                        menu.icon,
                                    ]"
                                ></i>
                                {{ menu.text }}
                            </a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import logo from "@/assets/img/Logo.png";
export default {
    name: "sidebar-admin",
    data() {
        return {
            logo,
            collapseShow: "hidden",
            menus: [
                {
                    text: "Dashboard",
                    route: "/admin/dashboard",
                    icon: "fa-solid fa-house",
                },
                {
                    text: "Data Bidang Pekerjaan",
                    route: "/admin/data-bidang-pekerjaan",
                    icon: "fa-solid fa-briefcase",
                },
                {
                    text: "Data Minat",
                    route: "/admin/data-minat",
                    icon: "fa-solid fa-hospital-user",
                },
                {
                    text: "Data Bakat",
                    route: "/admin/data-bakat",
                    icon: "fa-solid fa-hospital-user",
                },
                {
                    text: "Data Rules",
                    route: "/admin/data-rules",
                    icon: "fa-solid fa-pen-ruler",
                },
                {
                    text: "Logout",
                    route: "/admin/",
                    icon: "fa-solid fa-right-from-bracket",
                },
            ],
        };
    },
    methods: {
        toggleCollapseShow: function (classes) {
            this.collapseShow = classes;
        },
    },
};
</script>
