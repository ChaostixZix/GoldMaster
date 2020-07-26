<template>
    <div class="card">
        <div class="card-header text-white bg-info">
            Edit Item #{{data.id_items}}
        </div>
        <div class="card-body">
            <label class="form-control-label">
                Game
            </label>
            <select class="form-control" v-model="data.id_kategori">
                <option v-for="g in game" :value="g.id_kategori">{{g.kategori}}</option>
            </select>
            <label class="form-control-label">
                Server
            </label>
            <select class="form-control" v-model="data.id_item">
                <option v-for="s in server" :value="s.id_item">{{s.server}}</option>
            </select>
            <label class="form-control-label">
                Harga(Dollar)
            </label>
            <input class="form-control" v-model="data.dollar">
            <label class="form-control-label">
                In-Game Name
            </label>
            <input class="form-control" v-model="data.n_karakter">
            <label class="form-control-label">
                Trade Method
            </label>
            <select class="form-control" v-model="data.id_pengiriman">
                <option v-for="s in trademode" :value="s.id_pengiriman">{{s.pengiriman}}</option>
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
        name: "ItemsEdit",
        props: {
            data: Object,
            server: Array,
            game: Array,
            trademode: Array,
        },
        methods: {
            submit() {
                this.$inertia.post(this.$route('admin.items.update'), {
                    id_items: this.data.id_items,
                    id_kategori: this.data.id_kategori,
                    id_item: this.data.id_item,
                    id_pengiriman: this.data.id_pengiriman,
                    dollar: this.data.dollar,
                    n_karakter: this.data.n_karakter,
                }, {
                    preserveState: false
                })
            }
        }
    }
</script>

<style scoped>

</style>
