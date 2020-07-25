<template>
    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
            <div :class="'card-icon bg-' + Tipe">
                <i :class="'text-white fa fa-2x fa-' + Icon"></i>
            </div>
            <div class="card-wrap">
                <div class="card-header">
                    <h4>{{Text}}</h4>
                </div>
                <div class="card-body">
                    {{Jumlah}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            Text: String,
            Jumlah: String,
            Icon: String,
            Type: String
        },
        data()
        {
            return{
                Tipe: 'primary'
            }
        },
        mounted() {
            if(typeof this.Type !== 'undefined')
            {
                this.Tipe = this.Type;
            }
        }
    }
</script>

<style scoped>

</style>
