<template>
    <App>
        <div class="row">
            <div class="col-12">
                <div class="jumbotron jumb"></div>
            </div>
            <div class="col-lg-9 col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Welcome</h4>
                    </div>
                    <div class="card-body">
                        <p>Welcome to GoldMaster Website. We provide place to sell online games gold</p>
                    </div>
                    <div class="card-footer bg-whitesmoke">
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../Utils/Layout/App";

    export default {
        name: "Depan",
        data() {
            return {
                breadcumb: [
                    'Dashboard'
                ]
            }
        },
        components: {App}
    }
</script>

<style scoped>
    .jumb{
        background-image: url('https://external-preview.redd.it/zUTMRGV4F1eau1ygpc7yTqef448PPEK-rvZNN-ycOgQ.png?auto=webp&s=37040ff365cae83eaf3f3b567c6e38d1b310b62e');
        background-size: cover
    }
</style>
