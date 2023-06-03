<template>
    <section class="dashboard-admin flex flex-wrap mt-4">
        <div class="w-full mb-5 px-4">
            <div class="admin-container bg-sky-300">
                <div class="admin-box">
                    <div class="flex flex-wrap items-center">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <div class="my-4 text-sky-950">
                                <h3 class="font-semibold text-lg mb-2">
                                    Hai Zydane!
                                </h3>
                                <p class="text-sm">
                                    Tingkatkan Produktifitas dan Sistem ini
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mb-5 px-4">
            <div class="admin-container bg-amber-300">
                <div class="admin-box">
                    <div class="flex flex-wrap items-center">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <div class="my-4 text-amber-950">
                                <h3 class="font-semibold text-lg mb-2">
                                    Petunjuk Penggunaan
                                </h3>
                                <ol class="text-sm list-decimal ml-5">
                                    <li>
                                        Pilih menu untuk melakukan olah data
                                    </li>
                                    <li>
                                        Pastikan data yag dimasukkan sudah
                                        melalui validasi
                                        <span class="font-bold">pakar</span>
                                    </li>
                                    <li>
                                        Pastikan menekan tombol submit setelah
                                        input data
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mb-5 px-4">
            <div class="admin-container bg-emerald-300">
                <div class="admin-box">
                    <div class="flex flex-wrap items-center">
                        <div
                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                        >
                            <div class="my-4 text-emerald-950">
                                <h3 class="font-semibold text-lg mb-2">
                                    Kebijakan Pengguna
                                </h3>
                                <ol class="text-sm list-decimal ml-5">
                                    <li>
                                        Jaga keamanan email dan password admin
                                    </li>
                                    <li>
                                        Pastikan menekan logout setelah
                                        menggunakan sistem!
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "dashboard-admin ",
};
</script>
