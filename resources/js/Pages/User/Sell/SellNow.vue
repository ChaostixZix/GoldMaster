<template>
    <div class="card card-primary">
        <Spinner v-if="loading"></Spinner>
        <div v-else class="card-body">
            <label class="form-control-label">
                Server
            </label>
            <p>{{p.server}}</p>
            <label class="form-control-label">
                Game
            </label>
            <p>{{p.kategori}}</p>
            <label class="form-control-label">
                Quantity <span> ({{this.$page.flash.currency === 'usd' ? '$'+data.price : 'Rp. '+idr}}) </span>
            </label>
            <input v-model="data.quantity" class="form-control" type="number">
            <label class="form-control-label">
                Your In-Game Name
            </label>
            <input v-model="data.nama" class="form-control">
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
        name: "SellNow",
        components: {Spinner},
        data() {
            return{
                data: {
                    quantity: '',
                    id_items: this.p.id_items,
                    id_user: this.$page.flash.id_user,
                    price: 0,
                    nama: '',
                    status_o: 'pending',
                },
                loading: false,
                idr: 0
            }
        },
        props: {
            p: Object,
        },
        watch: {
            'data.quantity': function () {
                this.data.price = parseInt(this.data.quantity)*this.p.dollar;
                this.idr = parseInt(this.data.price * this.$page.flash.idrrate);
            }
        },
        methods: {
            submit(){

                if(this.data.quantity > this.p.butuh)
                {
                    alert('Quantity must be lower than needed stock');
                }else{
                    this.loading = true;
                    this.$inertia.post(this.$route('user.history.addorder'), this.data).then(() => {
                        console.log('tes')
                        this.loading = false;
                        this.$inertia.visit(this.$route('user.history'));
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>
