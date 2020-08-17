<template>
    <App topnav="Your Orders">
        <div class="row">
            <Messages></Messages>
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <p>
                            • The order will be cancelled automatically if it isn’t delivered in 1 hour from the moment it’s
                            made. Please don’t deliver when the order is status of cancelled. And it is absolutely necessary
                            to contact us if there is any problem.
                        </p>
                        <p>
                            • Cancel: Press the button if you are not able to fulfill the order.
                        </p>
                        <p>
                            • <span class="text-primary">Active</span>: You can start uploading the delivery screenshots after completed delivery by
                            clicking the button. And we will process the payment for you once the images are confirmed.
                        </p>
                        <p>
                            • <span class="text-info">Delivery Details</span>: You will know everything needed for delivery here, especially the in game character
                            of the client or the auction details for buyout, World of Warcraft Classic - US for instance.
                        </p>
                        <p class="text-danger">
                            • Notice: Please deliver the order and upload the delivery screenshots within 1 hour, or the
                            order will be cancelled automatically. You might have to reset the order or it might be taken by
                            someone else. So please do make it as fast as you could. Feel free to contact the Live Chat for
                            help if you get any problems.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="alert alert-warning">
                    You need to wait for admin approval before you can continue
                </div>
            </div>
            <div>
                <b-modal ok-only ref="details" title="Delivery Details">
                    <div class="invoice">
                        <div class="invoice-print">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="invoice-title">
                                        <div class="invoice-number">Order #{{datadetails.id_order}}</div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <address>
                                                <strong>Send To:</strong><br>
                                                {{datadetails.n_karakter}}<br>
                                            </address>
                                        </div>
                                        <div class="col-md-6 text-md-right">
                                            <address>
                                                <strong>From:</strong><br>
                                                {{datadetails.nama}}<br>
                                            </address>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <address>
                                                <strong>Trade Method:</strong><br>
                                                {{datadetails.pengiriman}}<br>
                                                <!--                                                ujang@maman.com-->
                                            </address>
                                        </div>
                                        <div class="col-md-6 text-md-right">
                                            <address>
                                                <strong>Order Date:</strong><br>
                                                {{datadetails.tgl_pesan}}<br><br>
                                            </address>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <address>
                                                <strong>Quantity:</strong><br>
                                                {{datadetails.quantity}}G<br>
                                            </address>
                                        </div>
                                        <div class="col-md-6 text-md-right">
                                            <address>
                                                <strong>Price:</strong><br>
                                                ${{datadetails.price}}<br><br>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="text-md-right">
                            <div class="float-lg-left mb-lg-0 mb-3">
                                <button @click="$refs.fileUpload.show()" class="btn btn-primary btn-icon icon-left"><i
                                    class="fa fa-cloud"></i> Upload File
                                </button>
                                <button v-if="datadetails.file === null" @click="cancel(datadetails.id_order)"
                                        class="btn btn-danger btn-icon icon-left"><i class="fas fa-times"></i> Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </b-modal>
                <b-modal hide-footer ref="fileUpload" title="Upload File">
                    <div v-if="uploading">
                        Uploading... Dont close!!
                    </div>
                    <div v-else class="invoice">
                        <div class="invoice-print">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="invoice-title">
                                        <div class="invoice-number">Order #{{datadetails.id_order}}</div>
                                    </div>
                                    <hr>
                                    <p v-for="p in photo">{{p.name}}</p>
                                    <input @change="selectFile" class="form-control-file" type="file">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="text-md-right">
                            <div class="float-lg-left mb-lg-0 mb-3">
                                <button @click="submitFile" class="btn btn-primary btn-icon icon-left"><i
                                    class="fa fa-cloud"></i> Upload File
                                </button>
                            </div>
                        </div>
                    </div>
                </b-modal>
            </div>
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>History</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled list-unstyled-border list-unstyled-noborder">
                            <li v-for="p in paginated" class="media">
                                <div class="media-body">
                                    <div v-if="p.diff > 60" class="media-right">
                                        <div class="text-danger">Canceled</div>
                                    </div>
                                    <div v-else-if="p.file !== null && p.status_o !== 'done'" class="media-right">
                                        <div class="text-info">Pending Approval</div>
                                    </div>
                                    <div v-else-if="p.file !== null && p.status_o == 'done'" class="media-right">
                                        <div class="text-success">Done</div>
                                    </div>
                                    <div v-else-if="p.status_o === 'pending'" class="media-right">
                                        <div class="text-warning">Pending</div>
                                    </div>
                                    <div v-else-if="p.status_o === 'aktif'" class="media-right">
                                        <div class="text-primary">Active</div>
                                    </div>
                                    <div class="media-title mb-1">Order #{{p.id_order}} (${{p.price}}) <div class="badge badge-secondary">{{p.kategori}} {{p.server}}</div></div>
                                    <div class="text-time">{{p.tgl_pesan}} <span v-if="p.file === null && p.diff < 61">({{60 - p.diff}} Minutes Left)</span></div>
                                    <div class="media-description text-muted">Sell {{p.quantity}}G for (${{p.price}})
                                    </div>
                                    <div v-if="p.diff < 60 || p.file !== null">
                                        <div v-if="p.status_o !== 'done'" class="media-links">
                                            <a v-if="p.status_o === 'aktif'" @click="details(p)"
                                               class="btn btn-sm btn-info text-white" href="#">Delivery Details</a>
                                            <div v-if="p.status_o === 'aktif'" class="bullet"></div>
                                            <a v-if="p.file === null" @click="cancel(p.id_order)"
                                               class="btn btn-sm btn-danger text-white" href="#">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </App>
</template>
<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1040;
        background-color: #000;
        opacity: 0.3;
    }
</style>
<script>
    import Datatable from "../../../Utils/Shared/Datatable";
    import Pagination from "../../../Utils/Shared/Pagination";
    import App from "../../../Utils/Layout/App";
    import Messages from "../../../Utils/Shared/Messages";

    export default {
        components: {Messages, App, Pagination, Datatable},
        props: {
            orders: Array
        },
        mounted() {
            this.load();
        },
        created() {
            Echo.channel('Item')
                .listen('ItemEvents', (e) => {
                    this.$inertia.reload({
                        preserveState: false,
                        preserveScroll: true
                    })
                });
        },
        data() {
            //
            let sortOrders = {};
            let columns = [
                {width: '33%', label: '#'},
                {width: '33%', label: 'Character Name'},
                {width: '33%', label: 'Game'},
                {width: '33%', label: 'Server'},
                {width: '33%', label: 'Action'},
            ];
            columns.forEach((column) => {
                sortOrders[column.name] = -1;
            });
            return {
                uploading: false,
                photo: [],
                tambah: false,
                datadetails: {},
                columns: columns,
                sortKey: 'deadline',
                sortOrders: sortOrders,
                length: 10,
                search: '',
                data: [],
                tableData: {
                    client: true,
                },
                pagination: {
                    currentPage: 1,
                    total: '',
                    nextPage: '',
                    prevPage: '',
                    from: '',
                    to: ''
                },
            }
        },
        methods: {
            selectFile(event) {
                this.photo.push(event.target.files[0]);
            },
            // selectFile(e) {
            //     let files = e.target.files || e.dataTransfer.files;
            //     if (!files.length)
            //         return;
            //     this.createImage(files[0]);
            // },
            // createImage(file){
            //     let reader = new FileReader();
            //     let vm = this;
            //     reader.onload = (e) => {
            //         vm.photo = e.target.result;
            //     }
            //     reader.readAsDataURL(file);
            // },
            submitFile() {
                const data = new FormData();
                this.photo.forEach(function (value, index) {
                    data.append('photo[]', value);
                })
                data.append('id_order', this.datadetails.id_order);
                this.uploading = true;
                this.$inertia.post(this.$route('user.history.uploadFoto'), data, {
                    preserveState: false,
                    preserveScroll: true,
                    only: ['orders']
                }).then(() => {
                    this.uploading = false;
                });
            },
            cancel(id) {
                this.$inertia.post(this.$route('user.history.cancel', {id: id}), {}, {
                    preserveState: false,
                    preserveScroll: true,
                    only: ['orders']
                })
            },
            details(data) {
                this.datadetails = data;
                this.$refs['details'].show();
            },
            load() {
                this.pagination.total = this.data.length;
                let i = 0;
                let vm = this;
                this.orders.forEach(function (value, index) {
                    i++;
                    value.nomer = i;
                    vm.data.push(value);
                })
            },
            paginate(array, length, pageNumber) {
                this.pagination.from = array.length ? ((pageNumber - 1) * length) + 1 : ' ';
                this.pagination.to = pageNumber * length > array.length ? array.length : pageNumber * length;
                this.pagination.prevPage = pageNumber > 1 ? pageNumber : '';
                this.pagination.nextPage = array.length > this.pagination.to ? pageNumber + 1 : '';
                return array.slice((pageNumber - 1) * length, pageNumber * length);
            },
            resetPagination() {
                this.pagination.currentPage = 1;
                this.pagination.prevPage = '';
                this.pagination.nextPage = '';
            },
            sortBy(key) {
                this.resetPagination();
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
            },
            getIndex(array, key, value) {
                return array.findIndex(i => i[key] === value)
            },
        },
        computed: {
            filteredProjects() {
                let data = this.data;
                if (this.search) {
                    data = data.filter((row) => {
                        return Object.keys(row).some((key) => {
                            return String(row[key]).toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                        })
                    });
                }
                let sortKey = this.sortKey;
                let order = this.sortOrders[sortKey] || 1;
                if (sortKey) {
                    data = data.slice().sort((a, b) => {
                        let index = this.getIndex(this.columns, 'name', sortKey) + 1;
                        a = String(a[sortKey]).toLowerCase();
                        b = String(b[sortKey]).toLowerCase();
                        if (this.columns[index].type && this.columns[index].type === 'date') {
                            return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
                        } else if (this.columns[index].type && this.columns[index].type === 'number') {
                            return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
                        } else {
                            return (a === b ? 0 : a > b ? 1 : -1) * order;
                        }
                    });
                }
                return data;
            },
            paginated() {
                return this.paginate(this.filteredProjects, this.length, this.pagination.currentPage);
            }
        }
    };
</script>
