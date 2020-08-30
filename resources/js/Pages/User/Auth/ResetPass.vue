<template>
    <App>
        <section class="section">
            <div class="container mt-5">
                <div class="row">
                    <div
                        class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div class="login-brand">
                            <img :src="this.$route('depan.index') + 'logo.png'" alt="logo"
                                 width="100">
                        </div>
                        <div class="card card-primary">
                            <div class="card-header"><h4>Forgot Password</h4></div>
                            <div v-if="loading" class="card-body">
                                <Spinner></Spinner>
                            </div>
                            <div v-else class="card-body">
                                <p class="text-muted">{{user.email}}</p>
                                <form method="POST">
                                    <div class="form-group">
                                        <label>New Password</label>
                                        <input v-model="password" type="password" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input v-model="confirm" type="password" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <button @click="submit" type="button" class="btn btn-primary btn-lg btn-block"
                                                tabindex="4">
                                            Reset Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import Spinner from "../../../Utils/Shared/Spinner";

    export default {
        name: "ResetPass",
        components: {Spinner, App},
        props: {
            user: Object
        },
        data: () => {
            return {
                password: '',
                confirm: '',
                loading: false
            }
        },
        methods: {
            submit() {
                if (this.password === this.confirm) {
                    this.loading = true;
                    this.$inertia.post(this.$route('user.auth.resetNow', {id_user: this.user.id_user, password: this.password})).then(() => {
                        this.$inertia.visit(this.$route('user.auth.loginPage'))
                    })
                } else {
                    alert('Password doesnt match')
                }
            }
        }
    }
</script>

<style scoped>

</style>
