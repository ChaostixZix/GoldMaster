<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Tambah Trade Mode
        </div>
        <div class="card-body">
            <input class="form-control" v-model="data.pengiriman">
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
        name: "TradeMode",
        data()
        {
            return{
                data: {
                    pengiriman: ''
                }
            }
        },
        methods: {
            tambah()
            {
                this.$inertia.post(this.$route('admin.trademode.tambah'), this.data, {
                    replace: true,
                    preserveState: false,
                    preserveScroll: false,
                    only: ['trademode'],
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
