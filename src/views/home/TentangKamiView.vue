<template>
    <section class="about-us">
        <div
            class="box xl:w-11/12 xl:gap-x-10 xl:mx-auto py-10 justify-items-center gap-6 lg:grid grid-cols-2 justify-between"
        >
            <div v-for="user in users" :key="user.header" class="mb-8">
                <h1 class="text-header">{{ user.header }}</h1>
                <p class="text-caption" style="text-align-last: center">
                    {{ user.text }}
                </p>
            </div>
        </div>

        <div class="box bg-primary">
            <div class="lg:w-3/4 xl:w-3/5 lg:mx-auto">
                <h1 class="text-header pt-10">Hubungi Kami</h1>
                <p class="text-caption mb-8">
                    Kami sangat terbuka untuk menerima kritik dan saran dalam
                    pengembangan sistem ini. silahkan hubungi kami dengan
                    mengisi form dibawah ini.
                </p>

                <form action="#">
                    <div class="mb-4">
                        <label class="label-text" for="nama">Nama</label>
                        <input
                            class="input-text focus:outline-none focus:shadow-outline"
                            id="nama"
                            type="text"
                            placeholder="Masukkan Namamu"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="label-text" for="email">Email</label>
                        <input
                            class="input-text focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Masukkan Emailmu"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="label-text" for="subject">subject</label>
                        <input
                            class="input-text focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Masukkan Subject Pesanmu"
                        />
                    </div>
                    <div class="mb-4">
                        <label class="label-text" for="pesan">Pesan</label>
                        <textarea
                            class="input-text focus:outline-none focus:shadow-outline"
                            name="pesan"
                            id="pesan"
                            rows="4"
                            placeholder="Masukkan Pesanmu..."
                        ></textarea>
                    </div>
                    <div class="pb-10 flex justify-center">
                        <button
                            class="btn btn-transition py-4 px-4 rounded text-center w-full"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    header: "Yuk Kenalan dengan Pakar",
                    text: "Dra. Yayuk Hari Sugihartini, S.Pd., Kons. adalah seorang ahli bimbingan konsultasi yang telah memiliki pengalaman 18 tahun dalam mengarahkan murid-muridnya untuk dapat bekerja sesuai bidang dengan minat dan bakat yang dimiliki.",
                },
                {
                    header: "Yuk Kenalan dengan Admin",
                    text: "Mohamad Zydane Ulir Rizqi Toyyibi adalah mahasiswa tingkat akhir di UPN Veteran Jakarta yang sangat tertarik dengan UI/UX, Mobile, dan Web Development. Di Kampus Saya mengambil fokus di bidang data science dan sistem ini merupakan implementasi sistem pakar sebagai bahan skripsi",
                },
            ],
        };
    },
};
</script>
