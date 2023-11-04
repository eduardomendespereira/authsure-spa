<template>
    <div class="text-center">
        <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
    </div>
</template>
<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            page: this.currentPage
        }
    },
    watch: {
        page() {
            this.$emit('paginate', this.page)
        }
    }
}
</script>
