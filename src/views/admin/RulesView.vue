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
                                    style="width: 13%"
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
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(work, index) in works"
                                :key="index"
                                :class="{
                                    'bg-blue-200': index % 2 === 0,
                                    'bg-white': index % 2 !== 0,
                                }"
                            >
                                <th class="tbody-style">{{ index + 1 }}</th>
                                <td class="tbody-style">{{ work.code }}</td>
                                <td class="tbody-style">{{ work.name }}</td>
                                <td class="tbody-style">
                                    <div class="flex justify-start gap-4">
                                        <a
                                            href="#"
                                            class="hover:text-primary-500"
                                        >
                                            <i class="fa-solid fa-pen"></i>
                                            Edit
                                        </a>
                                        <a href="#" class="hover:text-red-500">
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
        ...mapState(["works"]),
    },
};
</script>
