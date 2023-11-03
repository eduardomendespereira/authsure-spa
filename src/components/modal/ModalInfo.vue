<template>
    <ModalBase :isOpen="dialog" :title="title">
        <slot>
            <div>hello</div>
        </slot>
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
        title: {
            type: String,
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
  