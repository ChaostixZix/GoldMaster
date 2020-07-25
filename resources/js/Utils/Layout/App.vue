<template>
    <div class="main-content">
        <section class="section">
            <div v-if="typeof topnav !== 'undefined' || typeof breadcumb !== 'undefined'" class="section-header">
                <h1>{{topnav}}</h1>
                <div class="section-header-breadcrumb">
                    <div v-for="bc in breadcumb" class="breadcrumb-item">{{ bc}}</div>
                </div>
            </div>

            <div class="section-body">
                <slot/>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "App",
        props: {
            topnav: String,
            breadcumb: Array
        }
    }
</script>

<style scoped>

</style>
