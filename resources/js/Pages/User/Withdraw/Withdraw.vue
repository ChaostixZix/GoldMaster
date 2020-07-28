<template>
    <App topnav="Withdraw">
        <div class="row">
            <div class="col-6">
                <div class="card card primary">
                    <div class="card-header">Balance left : ${{$page.flash.saldo}}</div>
                    <div v-if="$page.flash.saldo > 0" class="card-body">
                        <label class="form-control-label">
                            Withdraw Amount
                        </label>
                        <input v-model="data.dollar" type="number" class="form-control">
                        <label class="form-control-label">
                            Payment Method
                        </label>
                        <select v-model="data.pembayaran" class="form-control">
                            <option>Bitcoin</option>
                            <option>Etherum</option>
                            <option>Paypal</option>
                            <option>Webmoney</option>
                        </select>
                        <label v-if="data.pembayaran !== ''" class="form-control-label">
                            {{data.pembayaran}} Address
                        </label>
                        <input v-if="data.pembayaran !== ''" v-model="data.ket_pembayaran" type="text" class="form-control">
                    </div>
                    <div v-if="$page.flash.saldo > 0" class="card-footer">
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
                                <th scope="col">Method</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="r in requests">
                                <th scope="row">{{r.id}}</th>
                                <td>${{r.dollar}}</td>
                                <td>{{r.pembayaran}}</td>
                                <td>{{r.ket_pembayaran}}</td>
                                <td>
                                    <div v-if="r.status === 'pending'" class="badge badge-warning">Pending</div>
                                    <div v-if="r.status === 'proccess'" class="badge badge-primary">Process</div>
                                    <div v-if="r.status === 'done'" class="badge badge-success">Done</div>
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
    export default {
        name: "Withdraw",
        components: {App},
        props: {
            requests: Array
        },
        data()
        {
            return {
                data: {
                    dollar: 0,
                    pembayaran: '',
                    ket_pembayaran: ''
                }
            }
        },
        watch: {
            'data.dollar': function () {
                if(this.data.dollar > this.$page.flash.saldo)
                {
                    this.data.dollar = this.$page.flash.saldo
                }
            }
        },
        methods: {
            request()
            {
                this.$inertia.post(this.$route('user.withdraw.request'), this.data).then(() => {
                    this.$inertia.reload({
                        reload: true,
                        preserveState: false,
                        preserveScroll: true,
                        only: ['request']})
                })
            }
        }
    }
</script>

<style scoped>

</style>
