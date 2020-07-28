<template>
    <App topnav="Withdraw">
        <div class="row">
            <div class="col-6">
                <div class="card card primary">
                    <div class="card-body">
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
                        <input v-if="data.pembayaran !== ''" type="text" class="form-control">
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
        data()
        {
            return {
                data: {
                    dollar: 0,
                    pembayaran: '',
                    ket_pembayaran: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
