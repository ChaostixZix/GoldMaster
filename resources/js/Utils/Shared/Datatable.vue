<template>
    <div class="table-responsive">
        <table id="dataTableExample" class="table dataTable no-footer" role="grid"
               aria-describedby="dataTableExample_info">
            <thead>
            <tr role="row">
                <th v-for="column in columns" :key="column.name" @click="$emit('sort', column.name)"
                    class="sorting_asc"
                    :class="sortKey === column.name ? (sortOrders[column.name] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting'"
                    :style="'width:'+column.width+';'+'cursor:pointer;'">
                    {{column.label}}
                </th>
            </tr>
            </thead>
            <slot />
        </table>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'sortKey', 'sortOrders'],
    }
</script>
