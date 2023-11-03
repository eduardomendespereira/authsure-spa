<template>
    <ModalBase :isOpen="dialog" :title="info?.title">
        <slot>Delete</slot>
    </ModalBase>
</template>
  
<script>
import ModalBase from "@/components/modal/ModalBase.vue";

export default {
    components: {
        ModalBase,
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        object: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dialog: this.isOpen,
        };
    },
    watch: {
        isOpen(value) {
            this.dialog = value;
        },
    },
}
</script>
  