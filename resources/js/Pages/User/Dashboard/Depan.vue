<template>
    <App>
        <div class="row">
            <div class="col-12">
                <div class="hero bg-primary text-white">
                    <div class="hero-inner">
                        <h2>Welcome, !</h2>
                        <p class="lead">You almost arrived, complete the information about your account to complete registration.</p>
                        <div class="mt-4 text-center">
                            <a href="#" class="btn btn-outline-white btn-lg btn-icon icon-left"><i class="fa fa-cart-plus"></i> Sell</a>
                            <a :href="$route('user.history')" class="btn btn-outline-white btn-lg btn-icon icon-left"><i class="fa fa-file-invoice"></i> History</a>
                            <a href="#" class="btn btn-outline-white btn-lg btn-icon icon-left"><i class="fa fa-box-open"></i> Stock</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    export default {
        name: "Depan",
        components: {App}
    }
</script>

<style scoped>

</style>
