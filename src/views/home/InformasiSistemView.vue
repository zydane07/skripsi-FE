<template>
    <section class="system-information">
        <!-- how to use -->
        <div class="box bg-primary-100">
            <h1 class="text-header pt-10 pb-4">Bagaimana Yourney digunakan?</h1>
            <div
                class="lg:grid grid-cols-2 justify-items-center items-center pb-10 xl:grid-cols-4 gap-x-6"
            >
                <div
                    v-for="(howToUse, index) in howToUses"
                    :key="howToUse.text"
                    class="mb-8"
                >
                    <img :src="howToUse.img" alt="" class="w-64 mx-auto mb-4" />
                    <p class="text-center text-sm block lg:text-lg">
                        {{ index + 1 }}. {{ howToUse.text }}
                    </p>
                </div>
            </div>
        </div>

        <!-- hasil diagnosa -->
        <div class="box my-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Hasil Diagnosaku dari mana sih?</h1>
            <p class="text-caption" style="text-align-last: center">
                Yourney adalah sistem pakar yang mengadopsi kemampuan manusia
                untuk menyelesaikan masalah berdasarkan diagsona dan pengetahuan
                seorang pakar yang telah dimiliki. Dalam menentukan hasil
                diagnosa, Seorang Knowledge Engineer sudah terlebih dahulu
                melakukan konsultasi dengan pakar yang memiliki pengalaman dalam
                bidang membantu menentukan bidang pekerjaan berdasarkan minat
                dan bakat. Jadi hasil dari diagnosa sistem akan sama dengan
                diagnosa dari seorang pakar. Jika kamu ingin melakukan
                konsultasi secara langsung, hal itu tentu juga akan lebih
                memantapkan dirimu untuk mencapai bidang pekerjaan sesuai minat
                dan bakatmu!
            </p>
        </div>

        <!-- kemampuan -->
        <div class="box my-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Sejauh Apakah Kemampuan Yourney?</h1>
            <div
                v-for="(adventage, index) in adventages"
                :key="adventage.text"
                class="lg:grid grid-cols-2 gap-4 lg:mb-4 items-center justify-center"
            >
                <img
                    :src="adventage.img"
                    alt="Power"
                    class="w-64 mx-auto mb-4"
                />
                <div>
                    <h1 class="font-bold my-2 lg:text-lg">
                        {{ index + 1 }}. {{ adventage.title }}
                    </h1>
                    <p class="text-caption mb-8">
                        {{ adventage.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            howToUses: [
                {
                    img: "/img/consultation.svg",
                    text: "Login untuk dapat deteksi bidang pekerjaan",
                },
                {
                    img: "/img/consultation.svg",
                    text: "Pilihlah minat dan bakat sesuai dengan dirimu",
                },
                {
                    img: "/img/consultation.svg",
                    text: "Lihat daftar minat dan bakat untuk memudahkanmu dalam menentukannya",
                },
                {
                    img: "/img/consultation.svg",
                    text: "Yourney akan memberikan hasil bidang pekerjaan berdasarkan minat dan bakatmu",
                },
            ],
            adventages: [
                {
                    img: "/img/consultation.svg",
                    title: "membantu memberikan rekomendasi bidang pekerjaan",
                    text: "Saat ini yourney hanya memiliki fitur untuk menentukan bidang pekerjaan berdasarkan minat dan bakat. Yourney akan terus berkembang searah dengan perkembangan zaman. Nantikan perkembangan Yourney ya!",
                },
                {
                    img: "/img/consultation.svg",
                    title: "Implementasi Metode Forward Chaining",
                    text: "Forward Chaining merupakan salah satu metode yang sering digunakan dalam sistem pakar. Dalam implementasinya, Knowledge Engineer menggunakan teknik tree untuk menggambarkan metode ini.",
                },
                {
                    img: "/img/consultation.svg",
                    title: "Memberikan Saran sesuai bidang pekerjaan",
                    text: "Teman-teman harus ingat ya.. Yourney hanya memberikan saran untuk memudahkan teman-teman meraih bidang pekerjaan tersebut. Yourney tidak menjamin teman-teman meraih bidang pekerjaan yang diinginkan jika tidak ada doa dan usaha yang dilakukan.",
                },
            ],
        };
    },
};
</script>
