<template>
    <div class="card card-primary">
        <Spinner v-if="loading"></Spinner>
        <div v-else class="card-body">
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
                Quantity
            </label>
            <input v-model="data.stock" class="form-control" type="number">
        </div>
        <div class="card-footer">
            <button @click="submit" class="btn btn-primary">
                <i class="fa fa-paper-plane"></i>
                Submit
            </button>
        </div>
    </div>
</template>

<script>
    import Spinner from "../../../Utils/Shared/Spinner";

    export default {
        name: "MemberStockAdd",
        components: {Spinner},
        props: {
            p: Object,
            server: Array,
            game: Array,
            type: String
        },
        data() {
            return {
                data: {
                    id_kategori: this.p.id_kategori,
                    id_item: this.p.id_item,
                    id_user: this.$page.flash.id_user,
                    stock: this.p.stock,
                },
                loading: false
            }
            //
        },
        methods: {
            submit() {
                this.loading = true;
                if(this.type === 'baru')
                {
                    this.$inertia.post(this.$route('user.memberstock.insert'), this.data,
                        {
                            preserveState: false,
                            preserveScroll: true,
                            only: ['stocks']
                        }
                    ).then(() => {
                        this.loading = false;
                    });
                }else if(this.type === 'edit'){
                    this.$inertia.post(this.$route('user.memberstock.update', {id: this.p.id_stock}), this.data,
                        {
                            preserveState: false,
                            preserveScroll: true,
                            only: ['stocks']
                        }
                    ).then(() => {
                        this.loading = false;
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
