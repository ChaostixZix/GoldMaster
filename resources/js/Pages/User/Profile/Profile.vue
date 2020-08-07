<template>
    <App>
        <div class="row mt-sm-4">
            <div class="col-12 col-md-12 col-lg-5">
                <div class="card profile-widget">
                    <div class="profile-widget-header">
                        <img alt="image" :src="$route('depan.index') + 'stisla/assets/img/avatar/avatar-1.png'" class="rounded-circle profile-widget-picture">
                        <div class="profile-widget-items">
                            <div class="profile-widget-item">
                                <div class="profile-widget-item-label">Posts</div>
                                <div class="profile-widget-item-value">187</div>
                            </div>
                            <div class="profile-widget-item">
                                <div class="profile-widget-item-label">Followers</div>
                                <div class="profile-widget-item-value">6,8K</div>
                            </div>
                            <div class="profile-widget-item">
                                <div class="profile-widget-item-label">Following</div>
                                <div class="profile-widget-item-value">2,1K</div>
                            </div>
                        </div>
                    </div>
                    <div class="profile-widget-description">
                        <div class="profile-widget-name">{{input.fullname}} <div class="text-muted d-inline font-weight-normal"><div class="slash"></div> User</div></div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-7">
                <div class="card">
                    <form method="post" class="needs-validation" novalidate="">
                        <div class="card-header">
                            <h4>Edit Profile</h4>
                        </div>
                        <div class="card-body">
                            <form ref="form" method="POST" :action="$route('user.auth.register')">
                                <Spinner v-if="loadingEmail"></Spinner>
                                <div v-else class="form-group">
                                    <label for="username">Confirmation Code</label>
                                    <div class="input-group mb-3">
                                        <input v-model="code" type="text" class="form-control" placeholder="" aria-label="">
                                        <div class="input-group-append">
                                            <button @click="getCode" class="btn btn-primary" type="button">Get Code</button>
                                        </div>
                                    </div>
                                </div>
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

                            </form>
                        </div>
                        <div class="card-footer text-right">
                            <button @click="submit" type="button" class="btn btn-primary">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import axios from "axios";
    import Spinner from "../../../Utils/Shared/Spinner";
    export default {
        name: "Profile",
        props: {
            input: Object
        },
        data() {
            return {
                // input: {},
                country: [],
                payment: '',
                loadingEmail: false,
                code: ''
            }
        },
        mounted() {
            this.loadCountry();
        },
        methods: {
            loadCountry()
            {
                axios.get('https://restcountries.eu/rest/v2/all').then(response => {
                    this.country = response.data;
                });
            },
            submit()
            {
                if(this.code === '')
                {
                    alert('Please input code. If you haven\' received the code, please click Get Code')
                }else{
                    this.$inertia.post(this.$route('user.profile.update'), {
                        data: this.input,
                        code: this.code
                    }, {
                        preserveScroll: true,
                        preserveState: false,
                        only: ['input']
                    })
                }
            },
            getCode()
            {
                this.loadingEmail = true;
                axios.get(this.$route('user.profile.getcode')).then(res => {
                    this.loadingEmail = false
                    if(res.data.status === true)
                    {
                        alert('Code sent. please check your email');
                    }else {
                        alert('Code was not sent. ' + res.data.errors);
                    }
                })
            }
        },
        components: {Spinner, App}
    }
</script>

<style scoped>

</style>
