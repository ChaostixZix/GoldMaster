<style lang="scss">
    .pagination {
        justify-content: flex-end !important;
        .page-stats {
            align-items: center;
            margin-right: 5px;
        }
        i {
            color: #3273dc !important;
        }
    }
</style>

<template>
    <nav class="pagination" v-else>
        <a v-if="pagination.prevPage" class="btn btn-info text-white is-small pagination-previous" @click="$emit('prev');">
            Prev
        </a>
        <a class="btn btn-info text-white is-small pagination-previous" v-else :disabled="true">
            Prev
        </a>

        <a v-if="pagination.nextPage" class="btn btn-info text-white is-small pagination-next" @click="$emit('next');">
            Next
        </a>
        <a class="btn btn-info text-white is-small pagination-next" v-else :disabled="true">
            Next
        </a>
    </nav>
</template>

<script>
    export default {
        props: ['pagination', 'client', 'filtered']
    }
</script>
