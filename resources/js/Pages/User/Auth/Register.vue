<template>
    <App>
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div
                        class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div class="login-brand">
                            <img :src="this.$route('depan.index') + 'logo.png'" alt="logo"
                                 width="100">
                        </div>

                        <div class="card card-primary">
                            <div class="card-header"><h4>Register</h4></div>

                            <div class="card-body">
                                <form ref="form" method="POST" :action="$route('user.auth.register')">
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input id="username" type="text" class="form-control" v-model="input.username">
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Full Name</label>
                                        <input id="name" type="text" class="form-control" v-model="input.fullname">
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" type="email" class="form-control" v-model="input.email">
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label for="n_bank">Contact Type</label>
                                            <select id="n_bank" class="form-control" v-model="input.contacttype">
                                                <option>Skype</option>
                                                <option>Discord</option>
                                                <option>Telegram</option>
                                                <option>WhatSapp</option>
                                                <option>Facebook</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-6">
                                            <label for="telp">Contact</label>
                                            <input id="telp" type="text" class="form-control" v-model="input.telp">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="payment">Payment Method</label>
                                        <select id="payment" type="text" class="form-control" v-model="payment">
                                            <option value="indonesian">Indonesian Bank</option>
                                            <option value="virtual">Virtual Wallet/Bank</option>
                                        </select>
                                        <div class="invalid-feedback">
                                        </div>
                                    </div>

                                    <div v-if="payment === 'indonesian'" class="row">
                                        <div class="form-group col-4">
                                            <label for="n_bank">Bank</label>
                                            <select id="n_bank" class="form-control" v-model="input.n_bank">
                                                <option>Mandiri</option>
                                                <option>BRI</option>
                                                <option>BCA</option>
                                                <option>BNI</option>
                                                <option>BTPN</option>
                                                <option>Bank Lain</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="a_nama">Atas Nama</label>
                                            <input id="a_nama" type="text" class="form-control" v-model="input.a_nama">
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="n_rekening">Nomor Rekening</label>
                                            <input id="n_rekening" type="text" class="form-control"
                                                   v-model="input.n_rekening">
                                        </div>
                                    </div>

                                    <div v-if="payment === 'virtual'" class="row">
                                        <div class="form-group col-4">
                                            <label for="n_bank">Virtual Bank Type</label>
                                            <select id="n_bank" class="form-control" v-model="input.n_bank">
                                                <option>Paypal</option>
                                                <option>Webmoney</option>
                                                <option>Bitcoin</option>
                                                <option>Etherum</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="a_nama">Issued Name (Optional)</label>
                                            <input id="a_nama" type="text" class="form-control" v-model="input.a_nama">
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="n_rekening">Payment Address</label>
                                            <input id="n_rekening" type="text" class="form-control"
                                                   v-model="input.n_rekening">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-6">
                                            <label for="password" class="d-block">Password</label>
                                            <input id="password" type="password" class="form-control pwstrength"
                                                   data-indicator="pwindicator" v-model="input.password">
                                            <div id="pwindicator" class="pwindicator">
                                                <div class="bar"></div>
                                                <div class="label"></div>
                                            </div>
                                        </div>
                                        <div class="form-group col-6">
                                            <label for="password2" class="d-block">Password Confirmation</label>
                                            <input id="password2" type="password" class="form-control"
                                                   v-model="passwordconfirm">
                                        </div>
                                    </div>

                                    <div class="form-divider">
                                        Your Home
                                    </div>
                                    <div class="form-group">
                                        <label>Country</label>
                                        <div class="selectric-wrapper selectric-form-control selectric-selectric">
                                            <div class="selectric-hide-select">
                                                <select v-model="input.negara" class="form-control selectric"
                                                        tabindex="-1">
                                                    <option v-for="c in country">{{c.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Capthca</label>
                                        <VueRecaptcha ref="recaptcha" sitekey="6LfUq7kZAAAAANr2AHfnAZ_v67nkLEDUJC_wHiiU"
                                                      @verify="onVerify"></VueRecaptcha>
                                    </div>
                                    <div v-if="robot" class="form-group">
                                        <button @click="register" type="button"
                                                class="btn btn-primary btn-lg btn-block">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </App>
</template>


<script>
    import VueRecaptcha from 'vue-recaptcha';
    import App from "../../../Utils/Layout/App";
    import axios from 'axios';

    export default {
        name: "Register",
        components: {App, VueRecaptcha},
        data() {
            return {
                passwordconfirm: '',
                input: {},
                robot: false,
                payment: '',
                country: []
            }
        },
        mounted() {
            this.loadCountry()
        },
        methods: {
            loadCountry()
            {
                axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                    this.country = response.data;
                });
            },
            onVerify: function (response) {
                if (response) this.robot = true;
            },
            register() {
                if (this.input.password === this.passwordconfirm) {
                    this.$inertia.post(this.$route('user.auth.register'), this.input, {
                        preserveState: false,
                        preserveScroll: true,
                        replace: true
                    })
                    // this.$refs['form'].submit()
                } else {
                    alert('Password does not match')
                }
            }
        }
    }
</script>

<style scoped>

</style>
