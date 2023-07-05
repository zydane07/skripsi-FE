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
                                @click="addRulesModals"
                                class="btn-transition btn px-5 py-3 rounded-md cursor-pointer"
                            >
                                <i class="fa-solid fa-plus mr-1"></i> Tambah
                                Rules
                            </a>
                        </div>
                    </div>
                </div>
                <div v-if="deletionSuccessMessage" class="alert success-alert">
                    {{ deletionSuccessMessage }}
                </div>

                <!-- Success Alert -->
                <div v-if="successMessage" class="alert success-alert">
                    {{ successMessage }}
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
                                    Nama Bidang Pekerjaan
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
                                v-for="(rule, index) in rules"
                                :key="index"
                                :class="{
                                    'bg-blue-200': index % 2 === 0,
                                    'bg-white': index % 2 !== 0,
                                }"
                            >
                                <th class="tbody-style">{{ index + 1 }}</th>
                                <td class="tbody-style">
                                    {{ rule.code }}
                                </td>
                                <td class="tbody-style">
                                    {{ getWorkName(rule.workCode) }}
                                </td>
                                <td class="tbody-style">
                                    {{ rule.talentInterestCode }}.
                                    {{
                                        getTalentInterestName(
                                            rule.talentInterestCode
                                        )
                                    }}
                                </td>
                                <td class="tbody-style">
                                    <div class="flex justify-start gap-4">
                                        <a
                                            @click="openDeleteModal"
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

        <!-- tambah pekerjaan modals -->
        <transition name="modal-outer">
            <base-modals v-if="activeaddRulesModals">
                <div class="text-center relative">
                    <h1 class="lg:text-2xl font-bold py-2 border-b-2 mb-4">
                        Tambah Rules
                    </h1>
                    <div
                        class="absolute top-0 right-0 mt-[0.55rem] mr-3 cursor-pointer text-red-500"
                        @click="closeModals"
                    >
                        <i class="fa-solid fa-xmark text-xl"></i>
                    </div>
                </div>
                <div class="text-black flex flex-wrap">
                    <div class="relative w-full px-4 mb-5">
                        <label class="label-admin-input" for="kd-rules">
                            Kode Rules
                        </label>
                        <input
                            id="kd-rules"
                            type="text"
                            class="input-admin-type"
                            placeholder="Kode diawali 'R' diikuti 2 angka"
                        />
                    </div>
                    <div class="relative w-full px-4 mb-5">
                        <label class="label-admin-input" for="kd-bidang">
                            Kode Bidang Pekerjaan
                        </label>
                        <input
                            id="kd-bidang"
                            type="text"
                            class="input-admin-type"
                            placeholder="Kode diawali 'P' diikuti 2 angka"
                        />
                    </div>
                    <div class="relative w-full px-4 mb-5">
                        <label class="label-admin-input" for="kd-MB">
                            Kode Minat Bakat
                        </label>
                        <input
                            id="kd-MB"
                            type="text"
                            class="input-admin-type"
                            placeholder="Kode diawali 'M/B' diikuti 2 angka"
                        />
                    </div>

                    <button
                        class="btn-submit mx-4"
                        type="button"
                        @click="addNewRules"
                    >
                        Submit Rules
                    </button>
                </div>
            </base-modals>
        </transition>

        <!-- Delete Work Modal -->
        <transition name="modal-outer">
            <div v-if="activeDeleteRulesModal" class="modal">
                <base-modals>
                    <div class="text-center relative">
                        <h1 class="lg:text-2xl font-bold py-2 border-b-2 mb-4">
                            Hapus Rule
                        </h1>
                        <div
                            class="absolute top-0 right-0 mt-[0.55rem] mr-3 cursor-pointer text-red-500"
                            @click="closeModals"
                        >
                            <i class="fa-solid fa-xmark text-xl"></i>
                        </div>
                    </div>
                    <div class="text-black">
                        <p class="mx-4 text-center text-lg">
                            Apakah Kamu yakin ingin menghapus rule?
                        </p>
                        <button
                            class="mt-4 mb-4 px-3 py-3 bg-red-400 text-white active:bg-red-600 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                            type="button"
                            @click="axiosDeleteRule"
                        >
                            Hapus Rule
                        </button>
                    </div>
                </base-modals>
            </div>
        </transition>
    </section>
</template>

<script>
import axios from "axios";
import BaseModals from "@/components/admin/BaseModals.vue";
export default {
    name: "data-rules",
    components: { BaseModals },

    data() {
        return {
            rules: [],
            works: [],
            talentInterests: [],

            activeaddRulesModals: false,
            activeDeleteRulesModal: null,

            deletionSuccessMessage: null,
            successMessage: "",
        };
    },
    computed: {},

    methods: {
        axiosGetRules() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        // const talentInterestCode = rule.talentInterestCode;
                        this.rules.push(rule);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetWorks() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/works`)
                .then((res) => {
                    this.works.push(...res.data);
                })
                .catch((err) => console.error(err));
        },
        axiosGetTalentInterests() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/talent-interest`)
                .then((res) => {
                    this.talentInterests.push(...res.data);
                })
                .catch((err) => console.error(err));
        },

        addNewRules() {
            // Retrieve the field values from the inputs
            const kodeRule = document.getElementById("kd-rules").value;
            const kodeBidang = document.getElementById("kd-bidang").value;
            const kodeMinatBakat = document.getElementById("kd-MB").value;

            // Make the API request to add the job field
            axios
                .post(`${process.env.VUE_APP_BASE_URL}/rules`, {
                    code: kodeRule,
                    workCode: kodeBidang,
                    talentInterestCode: kodeMinatBakat,
                })
                .then(() => {
                    // Display success message

                    this.successMessage = "Rule added successfully";

                    // Clear success message after 2000 milliseconds (2 seconds)
                    setTimeout(() => {
                        this.successMessage = "";
                    }, 2000);
                })
                .catch((error) => {
                    // Handle error response
                    console.error(error);
                });
        },

        axiosDeleteRule() {
            if (this.activeDeleteRulesModal) {
                const code = this.activeDeleteRulesModal;

                axios
                    .delete(`${process.env.VUE_APP_BASE_URL}/rules/${code}`)
                    .then(() => {
                        // Remove the deleted work from the works array
                        this.works = this.works.filter(
                            (work) => work.code !== code
                        );
                        this.activeDeleteRulesModal = null; // Close the delete modal
                        this.deletionSuccessMessage = "Rule berhasil dihapus."; // Show success message

                        setTimeout(() => {
                            this.deletionSuccessMessage = "";
                        }, 2000);
                    })
                    .catch((error) => {
                        console.error(error);
                        // Handle the error case here
                    });
            }
        },

        // Method to fetch work name based on work code
        getWorkName(workCode) {
            const work = this.works.find((work) => work.code === workCode);
            return work ? work.name : "";
        },
        // Method to fetch talentInterest name based on talentInterest code
        getTalentInterestName(talentInterestCode) {
            const talentInterest = this.talentInterests.find(
                (talentInterest) => talentInterest.code === talentInterestCode
            );
            return talentInterest ? talentInterest.name : "";
        },

        // tambah rules
        addRulesModals() {
            this.activeaddRulesModals = true;
        },
        openDeleteModal(ruleCode) {
            // this.activeDeleteRulesModal = true;
            this.activeDeleteRulesModal = ruleCode;
        },
        closeModals() {
            this.activeaddRulesModals = false;
            this.activeDeleteRulesModal = false;
        },
    },
    mounted() {
        this.axiosGetRules();
        this.axiosGetWorks();
        this.axiosGetTalentInterests();
    },
};
</script>
<style scoped>
.alert {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    font-weight: bold;
}

.success-alert {
    background-color: #4caf50;
    color: #fff;
}
</style>
