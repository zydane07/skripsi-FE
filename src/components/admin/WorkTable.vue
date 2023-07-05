<template>
    <tr
        :class="{
            'bg-white': index % 2 === 0,
            'bg-blue-200': index % 2 !== 0,
        }"
    >
        <td class="tbody-style">{{ index }}</td>
        <td class="tbody-style">{{ work.code }}</td>
        <td class="tbody-style">{{ work.name }}</td>
        <td class="tbody-style text-justify">{{ work.suggestion }}</td>
        <td class="tbody-style">
            <div class="flex justify-start gap-4">
                <button
                    @click="detailWork(work.code)"
                    class="text-white bg-fuchsia-500 p-2 rounded-md hover:bg-teal-600"
                >
                    <i class="fa-solid fa-circle-info"></i>
                    Detail
                </button>
                <button
                    @click="editWork(work.code)"
                    class="text-white bg-teal-400 p-2 rounded-md hover:bg-teal-600"
                >
                    <i class="fa-solid fa-pen"></i>
                    Edit
                </button>
                <button
                    @click="deleteWork(work.code)"
                    class="text-white bg-red-400 p-2 rounded-md hover:bg-red-600"
                >
                    <i class="fa-solid fa-trash"></i>
                    Hapus
                </button>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    methods: {
        detailWork(code) {
            // console.log(code);
            this.$emit("detail-work", code);
        },
        editWork(code) {
            // console.log(code);
            this.$emit("edit-work", code);
        },
        deleteWork(code) {
            this.$emit("delete-work", code);
        },
    },
};
</script>
