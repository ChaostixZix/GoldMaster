<template>
    <App>
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div
                        class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div class="login-brand">
                            <img src="assets/img/stisla-fill.svg" alt="logo" class="shadow-light rounded-circle"
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
                                            <label for="contacttype">Contact Type</label>
                                            <select id="contacttype" class="form-control" v-model="input.contacttype">
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
                                                    <option>Indonesia</option>
                                                    <option>Palestine</option>
                                                    <option>Syria</option>
                                                    <option>Malaysia</option>
                                                    <option>Thailand</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="agree">
                                            <label class="custom-control-label" for="agree">I agree with the terms and
                                                conditions</label>
                                        </div>
                                    </div>

                                    <div class="form-group">
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
    import App from "../../../Utils/Layout/App";

    export default {
        name: "Register",
        components: {App},
        data() {
            return {
                passwordconfirm: '',
                input: {}
            }
        },
        methods: {
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
