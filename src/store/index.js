import { createStore } from "vuex";

export default createStore({
    state: {
        interests: [
            {
                //
                id: "B01",
                text: "Kecerdasan Umum",
                description:
                    "Bakat yang berhubungan dengan kemampaun Inteligensi secara menyeluruh yang dimiliki individu untuk menyelesaikan beberapa tugas yang bervariasi",
            },
            {
                //
                id: "B02",
                text: "Penalaran Verbal",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami informasi yang disampaikan dalam bentuk Bahasa, baik lisan maupun tulisan",
            },
            {
                //
                id: "B03",
                text: "Penalaran Non-Verbal",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami symbol, bentuk dan bangun ruang",
            },
            {
                //
                id: "B04",
                text: "Penalaran Numerik",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat meamhami dan mengolah berbagai data berupa angka melalui proses berhitung",
            },
            {
                //
                id: "B05",
                text: "Pengetahuan Umum",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat menyerap informasi dari lingkungan dan memanfaatkannya dalam pemecahan masalah keseharian",
            },
            {
                //
                id: "B06",
                text: "Kemampuan Ruang Bidang",
                description:
                    "Bakat yang berhubungan dengan kemampuan memahami dan mengolah bentuk tiga dimensi",
            },
            {
                //
                id: "B07",
                text: "Kemampuan Dasar Administrasi",
                description:
                    "Bakat yang berhubungan dengan kemampuan untuk mengelompokkan data berdasarkan kriteria tertentu",
            },
            {
                //
                id: "B08",
                text: "Daya Ingat",
                description:
                    "Bakat yang berhubungan dengan kemampuan untuk menyimpan informasi jangka pendek dan jangka panjang",
            },
        ],
        talents: [
            {
                id: "M01",
                text: "Outdoor",
                description:
                    "Minat yang berhubungan dengan pekerjaan di lapangan/luar kantor",
                example: ["Petani", "Pemain Bola", "Nelayan"],
            },
            {
                id: "M02",
                text: "Mechanical",
                description:
                    "Minat yang berhubungan dengan pekerjaan yang berhubungan dengan mekanik/Teknik",
                example: ["Insinyur", "Montir", "Teknisi"],
            },
            {
                id: "M03",
                text: "Computational",
                description:
                    "Minat yang berhubungan dengan pekerjaan yang membutuhkan kemampuan berhitung",
                example: ["Ahli statistik", "Auditor", "Akuntan"],
            },
            {
                id: "M04",
                text: "Scientific",
                description:
                    "minat yang berhubungan dengan pekerjaan dilaboratorium atau meneliti",
                example: ["Ilmuwan", "Peneliti"],
            },
            {
                id: "M05",
                text: "Persuasive",
                description:
                    "minat yang berhubungan dengan pekerjaan yang menggunakan kemampuan persuasi",
                example: ["Konselor", "Sales", "Penyiar"],
            },
            {
                id: "M06",
                text: "Aesthetic ",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni dan kreasi",
                example: ["Arsitek", "Pekerja seni", "Desainer"],
            },
            {
                id: "M07",
                text: "Literary",
                description:
                    "merupakan minat yang berhubungan dengan pekerjaan yang berkaitan dengan membaca atau menulis",
                example: ["Wartawan", "Penulis", "Penyair"],
            },
            {
                id: "M08",
                text: "Musical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni musik",
                example: ["Pianis", "Arranger lagu", "Gitaris"],
            },
            {
                id: "M09",
                text: "Social Service",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan pelayanan sosial",
                example: ["Dosen", "Penyuluh lapangan"],
            },
            {
                id: "M10",
                text: "Clerical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang memerlukan ketelitian dan ketekunan",
                example: ["Sekretaris", "Manager bank"],
            },
            {
                id: "M11",
                text: "Practical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang praktis dan memerlukan keterampilan",
                example: ["Ahli bangunan", "Karya petukangan"],
            },
            {
                id: "M12",
                text: "Medical ",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berhubungan dengan pelayanan medis",
                example: ["Dokter", "Fisioterapi", "Apoteker", "bidan"],
            },
        ],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
