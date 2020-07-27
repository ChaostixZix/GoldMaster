<template>
    <App>
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div class="login-brand">
                            <img src="assets/img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle">
                        </div>
                        <Messages></Messages>
                        <div class="card card-primary">
                            <div class="card-header"><h4>Login {{$page.flash.error}}</h4></div>

                            <div class="card-body">
                                <Spinner v-if="loading"></Spinner>

                                <form v-else method="POST" :action="$route('user.auth.login')" class="needs-validation" novalidate="">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" type="email" class="form-control" name="email" required autofocus>
                                        <div class="invalid-feedback">
                                            Please fill in your email
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="d-block">
                                            <label for="password" class="control-label">Password</label>
                                        </div>
                                        <input id="password" type="password" class="form-control" name="password" tabindex="2" required>
                                        <div class="invalid-feedback">
                                            please fill in your password
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                                            <label class="custom-control-label" for="remember-me">Remember Me</label>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                                            Login
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div class="mt-5 text-muted text-center">
                            Don't have an account? <inertia-link :href="$route('user.auth.registerPage')">Create One</inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import Messages from "../../../Utils/Shared/Messages";
    import Spinner from "../../../Utils/Shared/Spinner";
    export default {
        name: "Login",
        components: {Spinner, Messages, App},
        data()
        {
            return{
                data: {
                    email: '',
                    password: ''
                },
                loading: false
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
