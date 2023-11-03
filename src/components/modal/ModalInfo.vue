<template>
    <ModalBase :isOpen="dialog" :title="info.title">
        <slot v-if="object">
            <div v-for="(key, index) in info.keys" :key="index" class="table-row">
                <div class="label mr-1">{{ info.labels[index] }}:</div>

                <template v-if="typeof object[key] === 'boolean'">
                    <v-icon v-if="object[key] === true" color="green">mdi-check</v-icon>
                    <v-icon v-else color="red">mdi-close</v-icon>
                </template>
                <template v-else>
                    {{ object[key] }}
                </template>
            </div>
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
        info: {
            type: Object,
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

<style>
.table-row {
    display: flex;
    margin-bottom: 8px;
}

.label {
    font-weight: bold;
    text-align: left;
}

.key {
    text-align: left;
}
</style>
  