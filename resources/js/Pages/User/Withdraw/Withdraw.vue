<template>
    <App topnav="Withdraw">
        <div class="row">
            <div class="col-12">
                <div class="alert alert-info">Minimum withdraw ({{$page.flash.currency === 'usd' ? '$'+10 : 'Rp.'+10*$page.flash.idrrate}})
                </div>
            </div>
            <div class="col-6">
                <div class="card card primary">
                    <div class="card-header">Balance left : ({{$page.flash.currency === 'usd' ? '$'+$page.flash.saldo : 'Rp. '+parseInt($page.flash.saldo*$page.flash.idrrate)}})
                    </div>
                    <div v-if="$page.flash.saldo > 0 && show" class="card-body">
                        <div class="form-group">
                            <label class="form-control-label">
                                Withdraw Amount
                            </label>
                        </div>
                        <input v-model="dollar" type="number" class="form-control">
                        <div class="form-group">
                            <label class="form-control-label">Capthca</label>
                            <VueRecaptcha ref="recaptcha" sitekey="6LfUq7kZAAAAANr2AHfnAZ_v67nkLEDUJC_wHiiU"
                                          @verify="onVerify"></VueRecaptcha>
                        </div>
                    </div>
                    <div v-if="$page.flash.saldo > 0 && show && robot" class="card-footer">
                        <button class="btn btn-primary" @click="request">Submit</button>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Request History</h4>
                    </div>
                    <div class="card-body p-0">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="r in requests">
                                <th scope="row">{{r.id}}</th>
                                <td>{{$page.flash.currency === 'usd' ? '$'+r.dollar : 'Rp.'+parseInt(r.dollar*$page.flash.idrrate)}}
                                </td>
                                <td>
                                    <div v-if="r.status_wd === 'pending'" class="badge badge-warning">Pending</div>

                                    <div v-if="r.status_wd === 'process'" class="badge badge-primary">Process</div>
                                    <div v-if="r.status_wd === 'done'" class="badge badge-success">Done</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "Withdraw",
        components: {App, VueRecaptcha},
        props: {
            requests: Array
        },
        mounted() {
            this.show = true
            if (this.$page.flash.saldo < 10) {
                this.show = false
            }
        },
        created() {
            Echo.channel('Item')
                .listen('ItemEvents', (e) => {
                    this.$inertia.reload({
                        preserveState: false,
                        preserveScroll: true
                    })
                });
        },
        data() {
            return {
                data: {
                    dollar: 1,
                },
                dollar: 1,
                show: true,
                robot: false
            }
        },
        watch: {
            'dollar': function () {
                if (this.$page.flash.currency === 'usd' && this.dollar > this.$page.flash.saldo) {
                    this.dollar = this.$page.flash.saldo
                }
                console.log(this.$page.flash.currency);
                if (this.$page.flash.currency === 'idr' && this.dollar > this.$page.flash.idrrate * this.$page.flash.saldo) {
                    this.dollar = parseInt(this.$page.flash.saldo * this.$page.flash.idrrate)
                }
                if (this.dollar < 1) {
                    this.dollar = 1;
                }
                this.data.dollar = this.dollar / this.$page.flash.idrrate;
            }
        },
        methods: {
            onVerify: function (response) {
                if (response) this.robot = true;
            },
            request() {
                this.$inertia.post(this.$route('user.withdraw.request'), this.data).then(() => {
                    this.$inertia.reload({
                        reload: true,
                        preserveState: false,
                        preserveScroll: true,
                        only: ['request']
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>
