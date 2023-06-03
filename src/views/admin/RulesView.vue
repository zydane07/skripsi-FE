<template>
    <section class="data-rules flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
            <div class="admin-container bg-primary-100">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center my-2">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <h3 class="font-semibold text text-blueGray-700">
                                Data Rules
                            </h3>
                        </div>
                        <div class="mx-4 text-xs">
                            <a
                                href=""
                                class="btn-transition btn px-5 py-3 rounded-md"
                            >
                                <i class="fa-solid fa-plus mr-1"></i> Tambah
                                Rules
                            </a>
                        </div>
                    </div>
                </div>
                <div class="block w-full overflow-x-auto">
                    <!-- Projects table -->
                    <table
                        class="items-center w-full bg-transparent border-collapse"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 2%"
                                >
                                    No
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 10%"
                                >
                                    Id Rule
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 15%"
                                >
                                    Nama Bidang
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 15%"
                                >
                                    Nama Minat Bakat
                                </th>

                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 15%"
                                >
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in combinedData"
                                :key="index"
                                :class="{
                                    'bg-blue-200': index % 2 === 0,
                                    'bg-white': index % 2 !== 0,
                                }"
                            >
                                <th class="tbody-style">{{ index + 1 }}</th>
                                <td class="tbody-style">
                                    {{ item.work.code }}
                                </td>
                                <td class="tbody-style">
                                    {{ item.work.name }}
                                </td>
                                <td class="tbody-style">
                                    {{ item.talentInterest.name }}
                                </td>
                                <td class="tbody-style">
                                    <div class="flex justify-start gap-4">
                                        <a
                                            href="#"
                                            class="text-white bg-teal-400 px-2 py-2 rounded-md hover:bg-teal-600"
                                        >
                                            <i class="fa-solid fa-pen"></i>
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            class="text-white bg-red-400 px-2 py-2 rounded-md hover:bg-red-600"
                                        >
                                            <i class="fa-solid fa-trash"></i>
                                            Hapus
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "data-rules",
    computed: {
        ...mapState(["works", "talentInterests"]),
        combinedData() {
            return this.works.map((work, index) => {
                return {
                    work,
                    talentInterest: this.talentInterests[index],
                };
            });
        },
    },

    methods: {},
};
</script>
