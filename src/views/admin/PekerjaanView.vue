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
                            placeholder="Kode diawali 'P' diikuti 2 a"
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
                            saran Bidang Pekerjaan
                        </label>
                        <textarea
                            id="saran-bidang"
                            type="text"
                            class="input-admin-type"
                            rows="4"
                            placeholder="Masukkan saran bidang pekerjaan"
                        ></textarea>
                    </div>
                    <button class="btn-submit mx-4" type="button">
                        Submit Pekerjaan
                    </button>
                </div>
            </base-modals>
        </transition>

        <!-- Edit Work Modal -->
        <div v-if="activeEditWorksModal" class="modal">
            <transition name="modal-outer">
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
                                    saran Bidang Pekerjaan
                                </label>
                                <textarea
                                    :id="work.suggestion"
                                    type="text"
                                    class="input-admin-type"
                                    rows="6"
                                    :value="work.suggestion"
                                ></textarea>
                            </div>
                            <button class="btn-submit mx-4" type="button">
                                Edit Bidang pekerjaan {{ work.code }}
                            </button>
                        </div>
                    </div>
                </base-modals>
            </transition>
        </div>

        <!-- Delete Work Modal -->
        <div v-if="activeDeleteWorksModal" class="modal">
            <transition name="modal-outer">
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
                        >
                            Hapus Bidang pekerjaan
                        </button>
                    </div>
                </base-modals>
            </transition>
        </div>
    </section>
</template>

<script>
import BaseModals from "@/components/admin/BaseModals.vue";
import WorkTable from "@/components/admin/WorkTable.vue";

export default {
    name: "data-bidang-pekerjaan ",

    components: { BaseModals, WorkTable },
    data() {
        return {
            activeAddWorksModals: false,
            activeEditWorksModal: false,
            activeDeleteWorksModal: null,
            selectedWork: null,
            works: [
                {
                    code: "P01",
                    name: "Pertanian, Kehutanan dan Perikanan",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P02",
                    name: "Perdagangan Besar Dan Eceran",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P03",
                    name: "Industri Pengolahan",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P04",
                    name: "Penyediaan Akomodasi dan Penyediaan Makan Minum",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P05",
                    name: "Konstruksi",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P06",
                    name: "Jasa Pendidikan",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P07",
                    name: "Transportasi dan Pergudangan",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P08",
                    name: "Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P09",
                    name: "Jasa Kesehatan dan Kegiatan Sosial",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P10",
                    name: "Jasa Perusahaan",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P11",
                    name: "Pertambangan dan Penggalian",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P12",
                    name: "Jasa Keuangan dan Asuransi",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P13",
                    name: "Informasi dan Komunikasi",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P14",
                    name: "Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P15",
                    name: "Real Estat",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
                {
                    code: "P16",
                    name: "Artistik/kesenian",
                    suggestion:
                        "Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.",
                },
            ],
        };
    },

    computed: {
        // ...mapState(["works"]),
        filteredWorks() {
            return this.works.filter((work) => work.code === this.selectedWork);
        },
    },
    methods: {
        addWorkModals() {
            this.activeAddWorksModals = true;
        },
        closeModals() {
            this.activeAddWorksModals = false;
            this.activeEditWorksModal = false;
            this.activeDeleteWorksModal = false;
            this.selectedWork = null;
        },
        openEditModal(work) {
            this.selectedWork = work;
            this.activeEditWorksModal = true;
        },
        openDeleteModal(workCode) {
            // this.activeDeleteWorksModal = true;
            this.activeDeleteWorksModal = workCode;
        },
        // deleteWork(workCode) {
        //     this.works = this.works.filter((work) => work.code !== workCode);
        // },
    },
};
</script>

<style scoped></style>
