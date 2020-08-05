<template>
    <App>
        <div class="row">
            <div class="col-lg-4 col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-primary">
                            <div class="card-body">
                                <img :src="$route('depan.index') + 'img/wow.png'"
                                     class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <ul>
                                    <li v-for="g in games">
<!--                                        <inertia-link :href="$route('user.sell', {game: g.id_kategori})">{{g.kategori}}</inertia-link>-->
                                        <a @click="showCategory(g.id_kategori)" href="#">{{g.kategori}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="jumbotron jumb"></div>
                    </div>
                </div>
                <SellDepan :items="items" :category="category" v-if="show"></SellDepan>
                <div v-else class="row">
                    <div class="col-lg-12 col-12">
                        <div class="card">
                            <div class="card-header text-white bg-primary">
                                <h4>Welcome</h4>
                            </div>
                            <div class="card-body">
                                <p>Welcome to GoldMaster Website.. We provide place to sell online games gold</p>
                            </div>
                            <div class="card-footer bg-whitesmoke">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../Utils/Layout/App";
    import SellDepan from "./SellDepan";

    export default {
        name: "Depan",
        props: {
            games: Array,
            items: Array
        },
        data() {
            return {
                breadcumb: [
                    'Dashboard'
                ],
                category: '',
                show: false
            }
        },
        methods: {
            showCategory(id)
            {
                this.category = id;
                this.show = true;
            }
        },
        components: {SellDepan, App}
    }
</script>

<style scoped>
    .jumb{
        background-image: url('https://external-preview.redd.it/zUTMRGV4F1eau1ygpc7yTqef448PPEK-rvZNN-ycOgQ.png?auto=webp&s=37040ff365cae83eaf3f3b567c6e38d1b310b62e');
        background-size: cover;
        height: 300px;
    }
</style>
