<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Edit Order #{{data.id_order}}
        </div>
        <div class="card-body">
            <select class="form-control" v-model="data.status_o">
                <option value="pending">Pending</option>
                <option value="aktif">Active</option>
                <option v-if="data.file !== null" value="done">Done</option>
            </select>
        </div>
        <div class="card-footer bg-info">
            <button @click="submit" class="btn">
                Submit
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "OrderEdit",
        props: {
            data: Object
        },
        methods: {
            submit()
            {
                this.$inertia.post(this.$route('admin.order.update'), {
                    id_order: this.data.id_order,
                    status_o: this.data.status_o
                }, {
                    preserveState: false
                })
            }
        }
    }
</script>

<style scoped>

</style>
