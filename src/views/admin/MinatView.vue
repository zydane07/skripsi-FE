<template>
    <section class="data-minat flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
            <div class="admin-container bg-primary-100">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center my-2">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <h3 class="font-semibold text text-blueGray-700">
                                Minat
                            </h3>
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
                                    Id Minat
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 15%"
                                >
                                    Jenis Minat
                                </th>
                                <th class="thead-style-1 thead-style-2">
                                    Penjelasan Minat
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 20%"
                                >
                                    Contoh
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(interest, index) in interests"
                                :key="index"
                                :class="{
                                    'bg-blue-200': index % 2 === 0,
                                    'bg-white': index % 2 !== 0,
                                }"
                            >
                                <th class="tbody-style">{{ index + 1 }}</th>
                                <td class="tbody-style">
                                    {{ interest.code }}
                                </td>
                                <td class="tbody-style">
                                    {{ interest.name }}
                                </td>
                                <td class="tbody-style text-justify">
                                    {{ interest.description }}
                                </td>
                                <td class="tbody-style">
                                    {{
                                        Array.isArray(interest.example)
                                            ? interest.example.join(", ")
                                            : ""
                                    }}
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
// @ is an alias to /src
import axios from "axios";

export default {
    name: "data-minat",
    data() {
        return {
            interests: [],
        };
    },

    methods: {
        axiosGetInterests() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/interests`)
                .then((res) => {
                    this.interests.push(...res.data);
                })
                .catch((err) => console.error(err));
        },
    },
    mounted() {
        this.axiosGetInterests(); // Call the method when the component is mounted or as needed
    },
};
</script>
