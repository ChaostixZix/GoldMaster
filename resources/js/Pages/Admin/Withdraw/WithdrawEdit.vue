<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Edit Withdraw #{{data.id}}
        </div>
        <div class="card-body">
            <select class="form-control" v-model="data.status_wd">
                <option value="pending">Pending</option>
                <option value="process">Proccess</option>
                <option value="done">Done</option>
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
        name: "WithdrawEdit",
        props: {
            data: Object
        },
        methods: {
            submit()
            {
                this.$inertia.post(this.$route('admin.withdraw.update'), {
                    id: this.data.id,
                    status_wd: this.data.status_wd
                }, {
                    preserveState: false,
                    preserveScroll: true,
                    only: ['requests']
                })
            }
        }
    }
</script>

<style scoped>

</style>
