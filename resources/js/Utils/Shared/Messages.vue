<template>
    <div v-if="alert" class="col-12">
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
        name: "Messages",
        data()
        {
            return{
                alert: true
            }
        },
        mounted() {
            setTimeout(() => this.alert = false, 1000);
        }
    }
</script>

<style scoped>

</style>
