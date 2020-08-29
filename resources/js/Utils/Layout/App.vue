<template>
    <div class="main-content">
        <notifications style="margin-top: 5rem" group="foo" />

        <b-toast class="card card-primary" id="toast" variant="warning" solid>
            <template v-slot:toast-title class="card-header">
                <div class="d-flex flex-grow-1 align-items-baseline">
                    <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
                    <strong class="mr-auto">Notice!</strong>
                </div>
            </template>
            {{message}}
        </b-toast>
        <section class="section">
            <div v-if="typeof topnav !== 'undefined' || typeof breadcumb !== 'undefined'" class="section-header">
                <h1>{{topnav}}</h1>
                <div class="section-header-breadcrumb">
                    <div v-for="bc in breadcumb" class="breadcrumb-item">{{ bc}}</div>
                </div>
            </div>
            <Messages></Messages>
            <div class="section-body">

                <slot/>
            </div>
        </section>
    </div>
</template>

<script>
    import Messages from "../Shared/Messages";
    export default {
        name: "App",
        components: {Messages},
        data(){
            return{
                message:''
            }
        },
        created() {
            if(this.$page.flash.id_user !== null)
            {
                Echo.channel('Web.'+this.$page.flash.id_user)
                    .listen('Message', (e) => {
                        this.message = e.message;
                        this.$bvToast.show('toast')
                    });
            }
        },
        props: {
            topnav: String,
            breadcumb: Array
        }
    }
</script>

<style scoped>

</style>
