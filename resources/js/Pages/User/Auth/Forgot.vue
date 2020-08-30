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
                                <p class="text-muted">We will send a link to reset your password</p>
                                <form method="POST">
                                    <div class="form-group">
                                        <label>Email or Username</label>
                                        <input v-model="email" type="email" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <button @click="submit" type="button" class="btn btn-primary btn-lg btn-block" tabindex="4">
                                            Forgot Password
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
        name: "Forgot",
        components: {Spinner, App},
        data: () => {
            return {
                email: '',
                loading: false
            }
        },
        methods: {
            submit()
            {
                if(this.email.length > 0)
                {
                    this.loading = true;
                    axios.get(this.$route('user.auth.forgotNow', {email: this.email})).then(res => {
                        // console.log(res.data.status);
                        if(res.data.status === true)
                        {
                            // console.log('test')
                            alert('Code sent. Please check your email')
                        }
                        this.loading = false
                    })
                }else{
                    alert('Please type your email or username')
                }
            }
        }
    }
</script>

<style scoped>

</style>
