<template>
    <div class="col-12">
        <div v-if="$page.flash.success" class="alert alert-success">
            {{$page.flash.success}}
        </div>
        <div v-if="$page.flash.error" class="alert alert-danger">
            {{$page.flash.error}}
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
