<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Tambah Server
        </div>
        <div class="card-body">
            <input class="form-control" v-model="data.server">
        </div>
        <div class="card-footer bg-info">
            <button @click="tambah" class="btn">
                Submit
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TambahGame",
        data()
        {
            return{
                data: {
                    server: ''
                }
            }
        },
        methods: {
            tambah()
            {
                this.$inertia.post(this.$route('admin.server.tambah'), this.data, {
                    replace: true,
                    preserveState: false,
                    preserveScroll: false,
                    only: ['server'],
                }).then(() =>
                {
                    this.$parent.tambah = false;
                });
            }
        }
    }
</script>

<style scoped>

</style>
