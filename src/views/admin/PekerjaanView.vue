<template>
    <section class="data-bidang-pekerjaan flex flex-wrap mt-4">
        <div class="w-full mb-12 px-4">
            <card-table />
        </div>
    </section>
</template>

<script>
import CardTable from "@/components/CardTable.vue";
export default {
    components: {
        CardTable,
    },
};
</script>
