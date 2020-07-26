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
        <li v-if="pagination.prevPage" @click="$emit('prev');" class="page-item">
            <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
        </li>
        <li v-else :disabled="true" class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
        </li>
        <li v-if="pagination.nextPage" @click="$emit('next');" class="page-item">
            <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
        </li>
        <li v-else :disabled="true" class="page-item disabled">
            <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
        </li>
    </nav>
</template>

<script>
    export default {
        props: ['pagination', 'client', 'filtered']
    }
</script>
