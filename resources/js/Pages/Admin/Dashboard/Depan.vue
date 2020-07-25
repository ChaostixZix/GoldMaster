<template>
    <App>
        <div class="row">
            <Card Text="Jumlah User" :Jumlah="userCount" Icon="users"></Card>
            <Card Text="Jumlah Item" :Jumlah="itemCount" Icon="box"></Card>
            <Card Text="Jumlah Kategori" :Jumlah="categoryCount" Icon="newspaper"></Card>
        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import Card from "../../../Utils/Shared/Card";
    export default {
        name: "Depan",
        components: {Card, App},
        props: {
            itemCount: BigInt,
            userCount: BigInt,
            categoryCount: BigInt
        }
    }
</script>

<style scoped>

</style>
