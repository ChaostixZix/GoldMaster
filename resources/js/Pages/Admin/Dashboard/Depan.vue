<template>
    <App>
        <div class="row">
            <Card Text="Test" Jumlah="10" Icon="users"></Card>
            <Card Text="Test" Jumlah="10" Icon="box"></Card>
            <Card Text="Test" Jumlah="10" Icon="newspaper"></Card>
        </div>
    </App>
</template>

<script>
    import App from "../../../Utils/Layout/App";
    import Card from "../../../Utils/Shared/Card";
    export default {
        name: "Depan",
        components: {Card, App}
    }
</script>

<style scoped>

</style>
