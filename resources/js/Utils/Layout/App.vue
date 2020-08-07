<template>
    <div class="main-content">
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
        props: {
            topnav: String,
            breadcumb: Array
        }
    }
</script>

<style scoped>

</style>
