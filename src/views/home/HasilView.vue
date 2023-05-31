<template>
    <section class="diagnosis-result">
        <!-- minat bakat dipilih -->
        <div class="box mt-10 lg:w-9/12 lg:mx-auto pt-10">
            <div class="result-container">
                <h1 class="text-left mb-4 lg:text-xl">
                    Minat Bakat yang Kamu Masukkan
                </h1>
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
                            <th class="thead-style-1 thead-style-2">
                                Nama Minat
                            </th>
                            <th class="thead-style-1 thead-style-2">
                                Nama Bakat
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            :class="{
                                'bg-blue-200': 2 % 2 === 0,
                                'bg-white': 2 % 2 !== 0,
                            }"
                        >
                            <th class="tbody-style">1</th>
                            <td class="tbody-style">Mechanical</td>
                            <td class="tbody-style">Membaaca</td>
                        </tr>
                        <tr
                            :class="{
                                'bg-blue-200': 1 % 2 === 0,
                                'bg-white': 1 % 2 !== 0,
                            }"
                        >
                            <th class="tbody-style">2</th>
                            <td class="tbody-style">Mechanical</td>
                            <td class="tbody-style">Membaaca</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Hasil diagnosa -->
        <div class="box lg:w-9/12 lg:mx-auto pt-10">
            <div class="result-container">
                <h1 class="text-left mb-4 lg:text-xl">
                    Hasil Diagnosa:
                    <span class="font-bold text-teal-500"
                        >Pertanian, Kehutanan dan Perikanan</span
                    >
                </h1>
                <p class="text-justify text-sm" style="text-align-last: center">
                    Yourney adalah sistem pakar yang mengadopsi kemampuan
                    manusia untuk menyelesaikan masalah berdasarkan diagsona dan
                    pengetahuan seorang pakar yang telah dimiliki. Dalam
                    menentukan hasil diagnosa, Seorang Knowledge Engineer sudah
                    terlebih dahulu melakukan konsultasi dengan pakar yang
                    memiliki pengalaman dalam bidang membantu menentukan bidang
                    pekerjaan berdasarkan minat dan bakat. Jadi hasil dari
                    diagnosa sistem akan sama dengan diagnosa dari seorang
                    pakar. Jika kamu ingin melakukan konsultasi secara langsung,
                    hal itu tentu juga akan lebih memantapkan dirimu untuk
                    mencapai bidang pekerjaan sesuai minat dan bakatmu!
                </p>
            </div>
        </div>

        <!-- back button -->
        <div class="box mb-10 lg:w-9/12 lg:mx-auto pt-10">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex justify-center">
                    <button
                        class="bg-blue-300 hover:bg-primary-200 hover:text-slate-50 text-gray-800 font-bold btn-transition py-4 px-4 rounded text-center w-full"
                    >
                        Kembali ke Homepage
                    </button>
                </div>
            </RouterLink>
        </div>
    </section>
</template>

<script setup></script>
