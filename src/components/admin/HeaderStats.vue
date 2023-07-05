<template>
    <div class="header-admin relative bg-primary-400 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
            <div>
                <!-- Card stats -->
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <card-stats
                            statSubtitle="Jumlah Pengguna"
                            :statTitle="numberOfUsers.toString()"
                            statIconName="fas fa-users"
                            statIconColor="bg-red-500"
                        />
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <card-stats
                            statSubtitle="Jumlah Minat"
                            statTitle="12"
                            statIconName="fa-solid fa-hospital-user"
                            statIconColor="bg-orange-500"
                        />
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <card-stats
                            statSubtitle="Jumlah Bakat"
                            statTitle="8"
                            statIconName="fa-solid fa-hospital-user"
                            statIconColor="bg-pink-500"
                        />
                    </div>
                    <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <card-stats
                            statSubtitle="Jumlah Pekerjaan"
                            :statTitle="numberOfWorks.toString()"
                            statIconName="fa-solid fa-briefcase"
                            statIconColor="bg-emerald-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardStats from "@/components/admin/CardStats.vue";
import axios from "axios";

export default {
    name: "header-admin",
    data() {
        return {
            numberOfUsers: 0,
            numberOfWorks: 0,
        };
    },
    components: {
        CardStats,
    },
    methods: {
        axiosGetUsers() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/users`)
                .then((res) => {
                    this.numberOfUsers = res.data.length;
                })
                .catch((err) => console.error(err));
        },
        axiosGetWorks() {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}/works`)
                .then((res) => {
                    this.numberOfWorks = res.data.length;
                    console.log(this.numberOfWorks);
                })
                .catch((err) => console.error(err));
        },
    },
    mounted() {
        this.axiosGetWorks();
        this.axiosGetUsers();
    },
};
</script>
