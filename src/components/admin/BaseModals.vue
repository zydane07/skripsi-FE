<template>
    <div
        class="absolute w-full bg-black bg-opacity-30 h-full top-0 left-0 flex justify-center px-8"
    >
        <div
            class="p-4 bg-slate-200 self-start mt-32 max-w-screen-md rounded-lg"
            style="width: 10000px"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "base-modals",
    setup() {
        return {};
    },
};
</script>
