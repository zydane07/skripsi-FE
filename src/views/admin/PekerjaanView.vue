<template>
    <section class="data-bidang-pekerjaan flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
            <div class="admin-container bg-primary-100">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center my-2">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <h3 class="font-semibold text text-blueGray-700">
                                Bidang Pekerjaan
                            </h3>
                        </div>
                        <div class="mx-4 text-xs">
                            <a
                                @click="addWorkModals"
                                class="btn-transition btn px-5 py-3 rounded-md cursor-pointer"
                            >
                                <i class="fa-solid fa-plus mr-1"></i> Tambah
                                Bidang
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
                                    style="width: 13%"
                                >
                                    Id Bidang
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 15%"
                                >
                                    Nama Bidang
                                </th>
                                <th class="thead-style-1 thead-style-2">
                                    Saran
                                </th>
                                <th
                                    class="thead-style-1 thead-style-2"
                                    style="width: 18%"
                                >
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <work-table
                                v-for="(work, index) in works"
                                :key="work.code"
                                :work="work"
                                :index="index + 1"
                                @detail-work="openDetailModal"
                                @edit-work="openEditModal"
                                @delete-work="openDeleteModal"
                            ></work-table>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- tambah pekerjaan modals -->
        <transition name="modal-outer">
            <base-modals v-if="activeAddWorksModals">
                <div class="text-center relative">
                    <h1 class="lg:text-2xl font-bold py-2 border-b-2 mb-4">
                        Tambah Bidang Pekerjaan
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
                        <label class="label-admin-input" for="nama-bidang">
                            Nama Bidang Pekerjaan
                        </label>
                        <input
                            id="nama-bidang"
                            type="text"
                            class="input-admin-type"
                            placeholder="Masukkan Nama bidang pekerjaan"
                        />
                    </div>
                    <div class="relative w-full px-4 mb-5">
                        <label class="label-admin-input" for="saran-bidang">
                            Saran Bidang Pekerjaan
                        </label>
                        <textarea
                            id="saran-bidang"
                            type="text"
                            class="input-admin-type"
                            rows="4"
                            placeholder="Masukkan saran bidang pekerjaan"
                        ></textarea>
                    </div>
                    <div class="relative w-full px-4 mb-5">
                        <label class="label-admin-input" for="saran-bidang">
                            Kompentensi Bidang Pekerjaan
                        </label>
                        <textarea
                            id="kompentensi-bidang"
                            type="text"
                            class="input-admin-type"
                            rows="4"
                            placeholder="Masukkan Kompetensi bidang pekerjaan"
                        ></textarea>
                    </div>

                    <button
                        class="btn-submit mx-4"
                        type="button"
                        @click="addJobField"
                    >
                        Submit Pekerjaan
                    </button>
                </div>
            </base-modals>
        </transition>

        <!-- Detail Work Modal -->
        <transition name="modal-outer">
            <div v-if="activeDetailWorksModal" class="modal">
                <base-modals v-if="activeDetailWorksModal">
                    <div v-for="work in filteredWorks" :key="work.code">
                        <div class="text-center relative">
                            <h1
                                class="lg:text-2xl font-bold py-2 border-b-2 mb-4"
                            >
                                Kompetensi yang dibutuhkan bidang
                                {{ work.code }}
                            </h1>
                            <div
                                class="absolute top-0 right-0 mt-[0.55rem] mr-3 cursor-pointer text-red-500"
                                @click="closeModals"
                            >
                                <i class="fa-solid fa-xmark text-xl"></i>
                            </div>
                        </div>
                        <div class="text-black flex flex-wrap">
                            <ul>
                                <li
                                    v-for="(
                                        competence, index
                                    ) in work.competence"
                                    :key="index"
                                    class="mb-2 mx-4"
                                >
                                    {{ index + 1 + ". " + competence }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </base-modals>
            </div>
        </transition>

        <!-- Edit Work Modal -->
        <transition name="modal-outer">
            <div v-if="activeEditWorksModal" class="modal">
                <base-modals v-if="activeEditWorksModal">
                    <div v-for="work in filteredWorks" :key="work.code">
                        <div class="text-center relative">
                            <h1
                                class="lg:text-2xl font-bold py-2 border-b-2 mb-4"
                            >
                                Edit Bidang Pekerjaan
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
                                <label
                                    class="label-admin-input"
                                    :for="work.code"
                                >
                                    Kode Bidang Pekerjaan
                                </label>
                                <input
                                    :id="work.code"
                                    type="text"
                                    class="input-admin-type"
                                    :value="work.code"
                                />
                            </div>
                            <div class="relative w-full px-4 mb-5">
                                <label
                                    class="label-admin-input"
                                    :for="work.name"
                                >
                                    Nama Bidang Pekerjaan
                                </label>
                                <input
                                    :id="work.name"
                                    type="text"
                                    class="input-admin-type"
                                    :value="work.name"
                                />
                            </div>
                            <div class="relative w-full px-4 mb-5">
                                <label
                                    class="label-admin-input"
                                    :for="work.suggestion"
                                >
                                    Saran Bidang Pekerjaan
                                </label>
                                <textarea
                                    :id="work.suggestion"
                                    type="text"
                                    class="input-admin-type"
                                    rows="6"
                                    :value="work.suggestion"
                                ></textarea>
                            </div>
                            <div class="relative w-full px-4 mb-5">
                                <label
                                    class="label-admin-input"
                                    :for="work.competence"
                                >
                                    Kompetensi Bidang Pekerjaan
                                </label>
                                <textarea
                                    :id="work.competence"
                                    type="text"
                                    class="input-admin-type"
                                    rows="6"
                                    :value="work.competence"
                                ></textarea>
                            </div>
                            <button class="btn-submit mx-4" type="button">
                                Edit Bidang pekerjaan {{ work.code }}
                            </button>
                        </div>
                    </div>
                </base-modals>
            </div>
        </transition>

        <!-- Delete Work Modal -->
        <transition name="modal-outer">
            <div v-if="activeDeleteWorksModal" class="modal">
                <base-modals>
                    <div class="text-center relative">
                        <h1 class="lg:text-2xl font-bold py-2 border-b-2 mb-4">
                            Hapus Bidang Pekerjaan
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
                            Apakah Kamu yakin ingin menghapus bidang pekerjaan
                            {{ activeDeleteWorksModal }}?
                        </p>
                        <button
                            class="mt-4 mb-4 px-3 py-3 bg-red-400 text-white active:bg-red-600 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                            type="button"
                            @click="axiosDeleteWork"
                        >
                            Hapus Bidang pekerjaan
                        </button>
                    </div>
                </base-modals>
            </div>
        </transition>
    </section>
</template>

<script>
// import { mapState } from "vuex";
import axios from "axios";

import BaseModals from "@/components/admin/BaseModals.vue";
import WorkTable from "@/components/admin/WorkTable.vue";

export default {
    name: "data-bidang-pekerjaan ",

    components: { BaseModals, WorkTable },
    data() {
        return {
            works: [],
            activeAddWorksModals: false,
            activeDetailWorksModal: false,
            activeEditWorksModal: false,
            activeDeleteWorksModal: null,
            selectedWork: null,
            deletionSuccessMessage: null,
            successMessage: "",
        };
    },

    computed: {
        // ...mapState(["works"]),
        filteredWorks() {
            return this.works.filter((work) => work.code === this.selectedWork);
        },
    },
    methods: {
        axiosGetWorks() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/works`)
                .then((res) => {
                    this.works.push(...res.data);
                    console.log(res.data);
                })
                .catch((err) => console.error(err));
        },

        axiosDeleteWork() {
            if (this.activeDeleteWorksModal) {
                const code = this.activeDeleteWorksModal;

                axios
                    .delete(`${process.env.VUE_APP_BASE_URL}/works/${code}`)
                    .then(() => {
                        // Remove the deleted work from the works array
                        this.works = this.works.filter(
                            (work) => work.code !== code
                        );
                        this.activeDeleteWorksModal = null; // Close the delete modal
                        this.deletionSuccessMessage =
                            "Bidang pekerjaan berhasil dihapus."; // Show success message

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

        addJobField() {
            // Retrieve the field values from the inputs
            const kodeBidang = document.getElementById("kd-bidang").value;
            const namaBidang = document.getElementById("nama-bidang").value;
            // const saranBidang = document.getElementById("saran-bidang").value;
            const kompentensiBidang =
                document.getElementById("kompentensi-bidang").value;

            console.log(kodeBidang);
            console.log(namaBidang);
            console.log(kompentensiBidang);
            // Make the API request to add the job field
            axios
                .post(
                    `${process.env.VUE_APP_BASE_URL}/works`,
                    {
                        kodeBidang: "P19",
                        namaBidang: "makan sepeda",
                        // kompentensiBidang: "ayayya",
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    // Display success message
                    this.successMessage = "Job field added successfully";

                    // Clear success message after 2000 milliseconds (2 seconds)
                    setTimeout(() => {
                        this.successMessage = "";
                    }, 2000);

                    console.log(response.data);

                    // ... any other logic or updates you need after a successful request ...
                })
                .catch((error) => {
                    // Handle error response
                    console.error(error);
                });
        },

        addWorkModals() {
            this.activeAddWorksModals = true;
        },
        closeModals() {
            this.activeAddWorksModals = false;
            this.activeDetailWorksModal = false;
            this.activeEditWorksModal = false;
            this.activeDeleteWorksModal = false;
            this.selectedWork = null;
        },
        openEditModal(work) {
            this.selectedWork = work;
            this.activeEditWorksModal = true;
        },
        openDetailModal(work) {
            this.selectedWork = work;
            this.activeDetailWorksModal = true;
        },
        openDeleteModal(workCode) {
            // this.activeDeleteWorksModal = true;
            this.activeDeleteWorksModal = workCode;
        },
    },
    mounted() {
        this.axiosGetWorks(); // Call the method when the component is mounted or as needed
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
