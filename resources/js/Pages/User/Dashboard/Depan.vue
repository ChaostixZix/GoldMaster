<template>
    <App>
        <div class="row">
            <div class="col-12">
                <div class="card profile-widget">
                    <div class="profile-widget-header">
                        <img alt="image" :src="$route('depan.index') + 'stisla/assets/img/avatar/avatar-1.png'" class="rounded-circle profile-widget-picture">
                        <div class="profile-widget-items">
                            <div class="profile-widget-item">
                                <div class="profile-widget-item-label">Balance</div>
                                <div class="profile-widget-item-value">${{$page.flash.saldo}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="profile-widget-description">
                        <div class="profile-widget-name">{{$page.flash.user}} <div class="text-muted d-inline font-weight-normal"><div class="slash"></div> User</div></div>
                    </div>
                    <div class="card-footer text-center">
                        <div class="font-weight-bold mb-2">Menu</div>
                        <div class="mt-4 text-center">
                            <inertia-link :href="$route('user.sell')" class="btn btn-primary btn-lg btn-icon icon-left"><i class="fa fa-cart-plus"></i> Sell</inertia-link>
                            <inertia-link :href="$route('user.history')" class="btn btn-primary btn-lg btn-icon icon-left"><i class="fa fa-file-invoice"></i> My Order</inertia-link>
                            <inertia-link :href="$route('user.memberstock')" class="btn btn-primary btn-lg btn-icon icon-left"><i class="fa fa-box-open"></i> My Stock</inertia-link>
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
