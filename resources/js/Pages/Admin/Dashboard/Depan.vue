<template>
    <App>
        <div class="row">
            <Card Text="Jumlah User" :Jumlah="parseInt(userCount)" Icon="users"></Card>
            <Card Text="Jumlah Item" :Jumlah="parseInt(itemCount)" Icon="box"></Card>
            <Card Text="Jumlah Game" :Jumlah="parseInt(categoryCount)" Icon="newspaper"></Card>
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
            itemCount: Number,
            userCount: Number,
            categoryCount: Number
        }
    }
</script>

<style scoped>

</style>
