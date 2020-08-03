<template>
    <App topnav="IDR USD Rate">
        <div class="row">
            <Messages></Messages>
            <div class="col-6">
                <div class="card card primary">
                    <div class="card-header">IDR Rate : {{idr.price}}</div>
                    <div class="card-body">
                        <label class="form-control-label">
                            Change Price
                        </label>
                        <input v-model="idr.price" type="number" class="form-control">
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary" @click="request">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import Messages from "../../../Utils/Shared/Messages";
    export default {
        name: "Withdraw",
        components: {Messages, App},
        props: {
            idr: Object
        },
        methods: {
            request()
            {
                this.$inertia.post(this.$route('admin.usdrate.changeIdr'), this.idr).then(() => {
                    this.$inertia.reload({
                        reload: true,
                        preserveState: false,
                        preserveScroll: true,
                        only: ['idr']})
                })
            }
        }
    }
</script>

<style scoped>

</style>
