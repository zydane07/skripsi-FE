import { createStore } from "vuex";

export default createStore({
    state: {
        talentInterests: [
            {
                code: "M01",
                name: "Outdoor",
                description:
                    "Minat yang berhubungan dengan pekerjaan di lapangan/luar kantor",
                example: ["Petani", "Pemain Bola", "Nelayan"],
            },
            {
                code: "M02",
                name: "Mechanical",
                description:
                    "Minat yang berhubungan dengan pekerjaan yang berhubungan dengan mekanik/Teknik",
                example: ["Insinyur", "Montir", "Teknisi"],
            },
            {
                code: "M03",
                name: "Computational",
                description:
                    "Minat yang berhubungan dengan pekerjaan yang membutuhkan kemampuan berhitung",
                example: ["Ahli statistik", "Auditor", "Akuntan"],
            },
            {
                code: "M04",
                name: "Scientific",
                description:
                    "minat yang berhubungan dengan pekerjaan dilaboratorium atau meneliti",
                example: ["Ilmuwan", "Peneliti"],
            },
            {
                code: "M05",
                name: "Persuasive",
                description:
                    "minat yang berhubungan dengan pekerjaan yang menggunakan kemampuan persuasi",
                example: ["Konselor", "Sales", "Penyiar"],
            },
            {
                code: "M06",
                name: "Aesthetic ",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni dan kreasi",
                example: ["Arsitek", "Pekerja seni", "Desainer"],
            },
            {
                code: "M07",
                name: "Literary",
                description:
                    "merupakan minat yang berhubungan dengan pekerjaan yang berkaitan dengan membaca atau menulis",
                example: ["Wartawan", "Penulis", "Penyair"],
            },
            {
                code: "M08",
                name: "Musical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni musik",
                example: ["Pianis", "Arranger lagu", "Gitaris"],
            },
            {
                code: "M09",
                name: "Social Service",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berkaitan dengan pelayanan sosial",
                example: ["Dosen", "Penyuluh lapangan"],
            },
            {
                code: "M10",
                name: "Clerical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang memerlukan ketelitian dan ketekunan",
                example: ["Sekretaris", "Manager bank"],
            },
            {
                code: "M11",
                name: "Practical",
                description:
                    "minat yang berhubungan dengan pekerjaan yang praktis dan memerlukan keterampilan",
                example: ["Ahli bangunan", "Karya petukangan"],
            },
            {
                code: "M12",
                name: "Medical ",
                description:
                    "minat yang berhubungan dengan pekerjaan yang berhubungan dengan pelayanan medis",
                example: ["Dokter", "Fisioterapi", "Apoteker", "bidan"],
            },
            {
                //
                code: "B01",
                name: "Kecerdasan Umum",
                description:
                    "Bakat yang berhubungan dengan kemampaun Inteligensi secara menyeluruh yang dimiliki individu untuk menyelesaikan beberapa tugas yang bervariasi",
            },
            {
                //
                code: "B02",
                name: "Penalaran Verbal",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami informasi yang disampaikan dalam bentuk Bahasa, baik lisan maupun tulisan",
            },
            {
                //
                code: "B03",
                name: "Penalaran Non-Verbal",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami symbol, bentuk dan bangun ruang",
            },
            {
                //
                code: "B04",
                name: "Penalaran Numerik",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat meamhami dan mengolah berbagai data berupa angka melalui proses berhitung",
            },
            {
                //
                code: "B05",
                name: "Pengetahuan Umum",
                description:
                    "Bakat yang berhubungan dengan kemampuan individu untuk dapat menyerap informasi dari lingkungan dan memanfaatkannya dalam pemecahan masalah keseharian",
            },
            {
                //
                code: "B06",
                name: "Kemampuan Ruang Bidang",
                description:
                    "Bakat yang berhubungan dengan kemampuan memahami dan mengolah bentuk tiga dimensi",
            },
            {
                //
                code: "B07",
                name: "Kemampuan Dasar Administrasi",
                description:
                    "Bakat yang berhubungan dengan kemampuan untuk mengelompokkan data berdasarkan kriteria tertentu",
            },
            {
                //
                code: "B08",
                name: "Daya Ingat",
                description:
                    "Bakat yang berhubungan dengan kemampuan untuk menyimpan informasi jangka pendek dan jangka panjang",
            },
        ],
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
        rules1: [
            //
            "M02",
            "M04",
            "M07",
            "M11",
            "M12",
            "B02",
            "B04",
        ],
        rules2: [
            //
            "M02",
            "M04",
            "M05",
            "M07",
            "M12",
            "B01",
            "B02",
            "B07",
            "B08",
        ],
        rules3: [
            //
            "M01",
            "M02",
            "M11",
            "M12",
            "B01",
            "B02",
            "B06",
        ],
        rules4: [
            //
            "M02",
            "M04",
            "M07",
            "M09",
            "M12",
            "B01",
            "B03",
            "B07",
        ],
        rules5: [
            //
            "M01",
            "M02",
            "M04",
            "M06",
            "M11",
            "M12",
            "B02",
            "B05",
            "B06",
        ],
        rules6: [
            //
            "M02",
            "M06",
            "M07",
            "M08",
            "M09",
            "M10",
            "M11",
            "M12",
            "B01",
            "B02",
            "B08",
        ],
        rules7: [
            //
            "M02",
            "M04",
            "M07",
            "M09",
            "M12",
            "B01",
            "B02",
            "B05",
            "B07",
        ],
        rules8: [
            //
            "M05",
            "M09",
            "M12",
            "B01",
            "B02",
            "B07",
            "B08",
        ],
        rules9: [
            //
            "M03",
            "M04",
            "M07",
            "M09",
            "M11",
            "M12",
            "B01",
            "B02",
            "B04",
        ],
        rules10: [
            //
            "M02",
            "M04",
            "M05",
            "M06",
            "M07",
            "M09",
            "M12",
            "B07",
            "B08",
        ],
        rules11: [
            //
            "M01",
            "M02",
            "M04",
            "M11",
            "M12",
            "B01",
            "B02",
            "B05",
            "B06",
        ],
        rules12: [
            //
            "M04",
            "M05",
            "M07",
            "M09",
            "M12",
            "B01",
            "B02",
            "B07",
            "B08",
        ],
        rules13: [
            //
            "M02",
            "M04",
            "M06",
            "M07",
            "M08",
            "M09",
            "M11",
            "M12",
            "B01",
            "B02",
        ],
        rules14: [
            //
            "M01",
            "M02",
            "M04",
            "M06",
            "M07",
            "M09",
            "M11",
            "M12",
            "B01",
            "B02",
            "B03",
            "B05",
            "B06",
        ],
        rules15: [
            //
            "M02",
            "M04",
            "M06",
            "M07",
            "M09",
            "M11",
            "M12",
            "B01",
            "B02",
            "B04",
            "B05",
        ],
        rules16: [
            //
            "M02",
            "M04",
            "M06",
            "M07",
            "M08",
            "M09",
            "M10",
            "M12",
            "B01",
            "B04",
            "B08",
        ],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
