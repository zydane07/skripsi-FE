<template>
    <section class="list-talent-interest">
        <!-- konsultasi -->
        <div class="box py-10 lg:w-9/12 lg:mx-auto">
            <h1 class="text-header">Mulai Konsultasi</h1>
            <p class="text-caption" style="text-align-last: center">
                Konsultasi akan dilakukan dengan kamu memilih minat dan bakat
                yang kamu rasa cocok dengan dirimu. Jika kamu ragu tentang minat
                dan bakat yang kamu miliki, kamu dapat melihat penjelasan dari
                masing-masing minat dan bakat terlebih dahulu.
            </p>
            <p class="text-center text-sm">
                <span class="font-bold">Note:</span> M merepresentasikan Minat &
                B merepresentasikan Bakat
            </p>
            <div class="">
                <!-- pilihan minat -->
                <div class="my-5">
                    <h2 class="font-bold mb-3 lg:text-lg text-center">
                        Pilih minat dan bakat yang sesuai
                    </h2>
                    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div
                            class="flex items-center mb-4"
                            v-for="talentInterest in talentInterests"
                            :key="talentInterest.name"
                        >
                            <input
                                :id="talentInterest.code"
                                :name="talentInterest.code"
                                type="checkbox"
                                :value="talentInterest.code"
                                class="checkbox-mikat cursor-pointer"
                                v-model="checkedTalentInterest"
                                :disabled="buttonClicked"
                            />
                            <label
                                :for="talentInterest.code"
                                class="ml-2 text-sm font-medium text-gray-900 lg:text-base cursor-pointer"
                            >
                                {{ talentInterest.code }}
                                {{ talentInterest.name }}</label
                            >
                        </div>
                    </div>
                </div>
            </div>
            <!-- button submit -->
            <div class="text-center">
                <button
                    class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold btn-transition px-6 py-4 rounded-lg"
                    @click="toggleModal"
                >
                    {{
                        buttonClicked
                            ? "Diagnosis Kembali"
                            : "Lihat Hasil Bidang Pekerjaan"
                    }}
                </button>
                <!-- <button
                    @click="axiosGetRules4"
                    class="ml-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold btn-transition px-6 py-4 rounded-lg"
                >
                    GET TALENT INTEREST
                </button> -->
            </div>
        </div>

        <div v-if="showModal">
            <!-- minat bakat dipilih -->
            <div class="box lg:w-9/12 lg:mx-auto">
                <div class="result-container">
                    <h1 class="mb-4 lg:text-xl text-center">
                        Minat Bakat yang Kamu Masukkan
                    </h1>
                    <table
                        class="items-center w-full bg-transparent border-collapse"
                        v-if="interests.length || talents.length"
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
                                v-for="(item, index) in mergedData"
                                :key="index"
                            >
                                <th class="tbody-style">{{ index + 1 }}</th>
                                <td class="tbody-style">
                                    {{ item.interest }}
                                </td>
                                <td class="tbody-style">
                                    {{ item.talent }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Hasil diagnosa  1 bidang-->
            <!-- <div class="box lg:w-9/12 lg:mx-auto py-10">
                <div class="result-container" v-if="showDiagnosis">
                    <h1 class="text-left mb-4 lg:text-xl">
                        Hasil Diagnosa Bidang Pekerjaan:
                        <span class="font-bold text-teal-500">{{
                            showDiagnosis.name
                        }}</span>
                    </h1>
                    <p class="text-justify text-sm">
                        {{ showDiagnosis.suggestion }}
                    </p>
                </div>
            </div> -->

            <!-- hasil diagnosa bidang -->
            <div class="box lg:w-9/12 lg:mx-auto py-10">
                <div
                    class="result-container"
                    v-if="getMostSuitableWorks.length > 0"
                >
                    <h1 class="text-center mb-4 lg:text-2xl font-bold">
                        Hasil Diagnosa Bidang Pekerjaan:
                    </h1>
                    <ul>
                        <li
                            v-for="(work, index) in getMostSuitableWorks"
                            :key="work.code"
                            class="text-justify"
                        >
                            <span class="font-bold text-teal-500">
                                {{ index + 1 }}. {{ work.name }} <br />
                            </span>
                            <span class="text-justify text-sm" vf>
                                <span class="font-bold">
                                    Kompetensi yang dibutuhkan: <br />
                                </span>
                                <span
                                    v-for="(
                                        competence, index
                                    ) in work.competence"
                                    :key="index"
                                    class="mb-2"
                                >
                                    {{ index + 1 + ". " + competence }}
                                    <br />
                                </span>

                                <br />
                            </span>
                            <span class="text-justify text-sm">
                                <span class="font-bold">
                                    saran untuk kamu:
                                </span>
                                {{ work.suggestion }} <br />
                                <br />
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-else class="result-container">
                    <p class="text-center text-red-500 font-bold">
                        Minat dan Bakat yang kamu masukkan tidak bisa di
                        analisis. Silahkan lakukan diagnosa ulang.
                    </p>
                </div>
            </div>
        </div>

        <div class="box py-10 lg:w-9/12 lg:mx-auto">
            <!-- daftar minat -->
            <h1 class="text-header">Daftar Minat</h1>
            <div class="md:grid grid-cols-2 gap-6 lg:gap-10">
                <div v-for="(interest, index) in interest" :key="index">
                    <h1 class="mb-1 font-bold lg:text-lg">
                        {{ index + 1 }}. {{ interest.name }}
                    </h1>
                    <p class="ml-4 text-justify mb-4 lg:text-lg">
                        {{ interest.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="box py-10 lg:w-9/12 lg:mx-auto">
            <!-- daftar bakat -->
            <h1 class="text-header">Daftar Bakat</h1>
            <div class="md:grid grid-cols-2 gap-6 lg:gap-10">
                <div v-for="(talent, index) in talent" :key="index">
                    <h1 class="mb-1 font-bold lg:text-lg">
                        {{ index + 1 }}. {{ talent.name }}
                    </h1>
                    <p class="ml-4 text-justify mb-4 lg:text-lg">
                        {{ talent.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "list-talent-interest",
    data() {
        return {
            checkedTalentInterest: [],
            works: [],
            talent: [],
            interest: [],
            talentInterests: [],
            rules1: [],
            rules2: [],
            rules3: [],
            rules4: [],
            rules5: [],
            rules6: [],
            rules7: [],
            rules8: [],
            rules9: [],
            rules10: [],
            rules11: [],
            rules12: [],
            rules13: [],
            rules14: [],
            rules15: [],
            rules16: [],
            showModal: false,
            clickCount: 0,
            buttonClicked: false,
        };
    },
    watch: {
        checkedTalentInterest() {
            if (
                this.checkedTalentInterest.length >= 7 &&
                this.clickCount >= 1
            ) {
                this.showModal = false;
            }
        },
    },
    computed: {
        interests() {
            return this.checkedTalentInterest
                .filter((item) => item.startsWith("M"))
                .map((code) => this.getTalentInterestName(code));
        },
        talents() {
            return this.checkedTalentInterest
                .filter((item) => item.startsWith("B"))
                .map((code) => this.getTalentInterestName(code));
        },
        mergedData() {
            const maxLength = Math.max(
                this.talents.length,
                this.interests.length
            );
            const merged = [];

            for (let i = 0; i < maxLength; i++) {
                const talent = this.talents[i] || "";
                const interest = this.interests[i] || "";
                merged.push({ talent, interest });
            }

            return merged;
        },
        getMostSuitableWorks() {
            const {
                checkedTalentInterest,
                rules1,
                rules2,
                rules3,
                rules4,
                rules5,
                rules6,
                rules7,
                rules8,
                rules9,
                rules10,
                rules11,
                rules12,
                rules13,
                rules14,
                rules15,
                rules16,
            } = this;

            // Calculate the number of matches between each rules array and checkedTalentInterest
            const matchCounts = [
                {
                    code: "P01",
                    count: this.countMatches(checkedTalentInterest, rules1),
                },
                {
                    code: "P02",
                    count: this.countMatches(checkedTalentInterest, rules2),
                },
                {
                    code: "P03",
                    count: this.countMatches(checkedTalentInterest, rules3),
                },
                {
                    code: "P04",
                    count: this.countMatches(checkedTalentInterest, rules4),
                },
                {
                    code: "P05",
                    count: this.countMatches(checkedTalentInterest, rules5),
                },
                {
                    code: "P06",
                    count: this.countMatches(checkedTalentInterest, rules6),
                },
                {
                    code: "P07",
                    count: this.countMatches(checkedTalentInterest, rules7),
                },
                {
                    code: "P08",
                    count: this.countMatches(checkedTalentInterest, rules8),
                },
                {
                    code: "P09",
                    count: this.countMatches(checkedTalentInterest, rules9),
                },
                {
                    code: "P10",
                    count: this.countMatches(checkedTalentInterest, rules10),
                },
                {
                    code: "P11",
                    count: this.countMatches(checkedTalentInterest, rules11),
                },
                {
                    code: "P12",
                    count: this.countMatches(checkedTalentInterest, rules12),
                },
                {
                    code: "P13",
                    count: this.countMatches(checkedTalentInterest, rules13),
                },
                {
                    code: "P14",
                    count: this.countMatches(checkedTalentInterest, rules14),
                },
                {
                    code: "P15",
                    count: this.countMatches(checkedTalentInterest, rules15),
                },
                {
                    code: "P16",
                    count: this.countMatches(checkedTalentInterest, rules16),
                },
            ];

            matchCounts.sort((a, b) => b.count - a.count);
            console.log(matchCounts.sort((a, b) => b.count - a.count));

            // const maxMatchCount = Math.max(
            //     ...matchCounts.map((match) => match.count)
            // );
            const maxMatchCount = matchCounts[0].count;

            if (maxMatchCount < 5) {
                return []; // Return an empty array if max count is 5
            }

            // const mostSuitableWorkId = matchCounts[0].code;
            // Get 3  suitable work ID
            // const mostSuitableWorkIds = matchCounts
            //     .slice(0, 3)
            //     .map((item) => item.code);

            // console.log("mostSuitableWorkIds: ", mostSuitableWorkIds);
            //Find two corresponding work object

            // const mostSuitableWork = mostSuitableWorkIds.map((workId) => {
            //     return this.works.find((work) => work.code === workId);
            // });

            const mostSuitableWork = matchCounts
                .filter((item) => item.count === maxMatchCount)
                .map((item) =>
                    this.works.find((work) => work.code === item.code)
                );

            return mostSuitableWork;
        },
        // menampilkan 1 bidang kerja
        // showDiagnosis() {
        //     // ISI RULES
        //     // MINIMAL MASUKIN 7 MAKSIMAL 13
        //     const {
        //         checkedTalentInterest,
        //         rules1,
        //         rules2,
        //         rules3,
        //         rules4,
        //         rules5,
        //         rules6,
        //         rules7,
        //         rules8,
        //         rules9,
        //         rules10,
        //         rules11,
        //         rules12,
        //         rules13,
        //         rules14,
        //         rules15,
        //         rules16,
        //     } = this;

        //     // rules lengt
        //     // console.log(
        //     //     rules1.length,
        //     //     rules2.length,
        //     //     rules3.length,
        //     //     rules4.length,
        //     //     rules5.length,
        //     //     rules6.length,
        //     //     rules7.length,
        //     //     rules8.length,
        //     //     rules9.length,
        //     //     rules10.length,
        //     //     rules11.length,
        //     //     rules12.length,
        //     //     rules13.length,
        //     //     rules14.length,
        //     //     rules15.length,
        //     //     rules16.length
        //     // );

        //     // Calculate the number of matches between each rules array and checkedTalentInterest
        //     const matchCounts = [
        //         {
        //             code: "P01",
        //             count: this.countMatches(checkedTalentInterest, rules1),
        //         },
        //         {
        //             code: "P02",
        //             count: this.countMatches(checkedTalentInterest, rules2),
        //         },
        //         {
        //             code: "P03",
        //             count: this.countMatches(checkedTalentInterest, rules3),
        //         },
        //         {
        //             code: "P04",
        //             count: this.countMatches(checkedTalentInterest, rules4),
        //         },
        //         {
        //             code: "P05",
        //             count: this.countMatches(checkedTalentInterest, rules5),
        //         },
        //         {
        //             code: "P06",
        //             count: this.countMatches(checkedTalentInterest, rules6),
        //         },
        //         {
        //             code: "P07",
        //             count: this.countMatches(checkedTalentInterest, rules7),
        //         },
        //         {
        //             code: "P08",
        //             count: this.countMatches(checkedTalentInterest, rules8),
        //         },
        //         {
        //             code: "P09",
        //             count: this.countMatches(checkedTalentInterest, rules9),
        //         },
        //         {
        //             code: "P10",
        //             count: this.countMatches(checkedTalentInterest, rules10),
        //         },
        //         {
        //             code: "P11",
        //             count: this.countMatches(checkedTalentInterest, rules11),
        //         },
        //         {
        //             code: "P12",
        //             count: this.countMatches(checkedTalentInterest, rules12),
        //         },
        //         {
        //             code: "P13",
        //             count: this.countMatches(checkedTalentInterest, rules13),
        //         },
        //         {
        //             code: "P14",
        //             count: this.countMatches(checkedTalentInterest, rules14),
        //         },
        //         {
        //             code: "P15",
        //             count: this.countMatches(checkedTalentInterest, rules15),
        //         },
        //         {
        //             code: "P16",
        //             count: this.countMatches(checkedTalentInterest, rules16),
        //         },
        //     ];
        //     // Sort the matchCounts array in descending order based on the count
        //     matchCounts.sort((a, b) => b.count - a.count);

        //     // log minat yang sesuai
        //     // console.log(matchCounts.sort((a, b) => b.count - a.count));
        //     // Get the most suitable workcode
        //     const mostSuitableWorkId = matchCounts[0].code;
        //     // console.log(mostSuitableWorkId);

        //     // Get 3  suitable work ID
        //     // const mostSuitableWorkIds = matchCounts
        //     //     .slice(0, 3)
        //     //     .map((item) => item.id);

        //     // Find the one corresponding work object
        //     const mostSuitableWork = this.works.find(
        //         (work) => work.code === mostSuitableWorkId
        //     );

        //     //Find two corresponding work object
        //     // const mostSuitableWork = this.works.filter((work) =>
        //     //     mostSuitableWorkIds.includes(work.id)
        //     // );

        //     return mostSuitableWork;
        // },
    },
    methods: {
        axiosGetWorks() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/works`)
                .then((res) => {
                    this.works.push(...res.data);
                })
                .catch((err) => console.error(err));
        },

        axiosGetTalents() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/talents`)
                .then((res) => {
                    this.talent.push(...res.data);
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
        axiosGetInterests() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/interests`)
                .then((res) => {
                    this.interest.push(...res.data);
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules1() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R01`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules1.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules2() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R02`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules2.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules3() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R03`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules3.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules4() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R04`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules4.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules5() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R05`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules5.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules6() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R06`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules6.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules7() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R07`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules7.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules8() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R08`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules8.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules9() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R09`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules9.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules10() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R10`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules10.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules11() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R11`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules11.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules12() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R12`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules12.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules13() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R13`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules13.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules14() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R14`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules14.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules15() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R15`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules15.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },
        axiosGetRules16() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/rules?code=R16`)
                .then((res) => {
                    res.data.forEach((rule) => {
                        const talentInterestCode = rule.talentInterestCode;
                        this.rules16.push(talentInterestCode);
                    });
                })
                .catch((err) => console.error(err));
        },

        getTalentInterestName(code) {
            // Find the interest object based on the interest code
            const interestObj = this.talentInterests.find(
                (item) => item.code === code
            );
            // Return the interest name if found, otherwise return the interest code
            return interestObj ? interestObj.name : code;
        },
        // Method to count the number of matches between two arrays
        countMatches(array1, array2) {
            // return array1.filter((value) => array2.includes(value)).length;
            return array1.filter((item) => array2.includes(item)).length;
        },

        // modal
        toggleModal() {
            if (
                this.checkedTalentInterest.length < 7 ||
                this.checkedTalentInterest.length > 13
            ) {
                alert(
                    "Kamu hanya bisa memilih minimal 7 minat bakat dan maksimal 13 minat bakat"
                );
            } else {
                this.clickCount++;
                this.buttonClicked = true;
                if (this.clickCount === 2) {
                    window.location.reload();
                } else {
                    this.showModal = true;
                }
            }
        },
    },
    mounted() {
        this.axiosGetWorks();
        this.axiosGetInterests();
        this.axiosGetTalentInterests();
        this.axiosGetTalents();
        this.axiosGetRules1();
        this.axiosGetRules2();
        this.axiosGetRules3();
        this.axiosGetRules4();
        this.axiosGetRules5();
        this.axiosGetRules6();
        this.axiosGetRules7();
        this.axiosGetRules8();
        this.axiosGetRules9();
        this.axiosGetRules10();
        this.axiosGetRules11();
        this.axiosGetRules12();
        this.axiosGetRules13();
        this.axiosGetRules14();
        this.axiosGetRules15();
        this.axiosGetRules16();
    },
};
</script>

<style lang="scss" scoped></style>
