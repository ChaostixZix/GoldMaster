<template>
    <div class="col-12">
        <div v-if="$page.flash.success" class="alert alert-success">
            This is a primary alert.
        </div>
        <div v-if="$page.flash.error" class="alert alert-danger">
            This is a primary alert.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Messages"
    }
</script>

<style scoped>

</style>
