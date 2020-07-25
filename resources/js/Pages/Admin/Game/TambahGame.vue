<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Tambah Game
        </div>
        <div class="card-body">
            <input class="form-control" v-model="data.kategori">
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
                    kategori: ''
                }
            }
        },
        methods: {
            tambah()
            {
                this.$inertia.post(this.$route('admin.game.tambah'), this.data, {
                    replace: true,
                    preserveState: false,
                    preserveScroll: false,
                    only: ['game'],
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
