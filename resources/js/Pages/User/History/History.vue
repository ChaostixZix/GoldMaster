<template>
    <App topnav="Your Orders">
        <div class="row">
            <Messages></Messages>
            <div class="col-12">
                    <div class="alert alert-warning">
                        You need to wait for admin approval before you can continue
                    </div>
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
                                    <div v-if="p.status_o === 'pending'" class="media-right"><div class="text-warning">Pending</div></div>
                                    <div v-if="p.status_o === 'aktif'" class="media-right"><div class="text-primary">Active</div></div>
                                    <div class="media-title mb-1">#{{p.id_order}}</div>
                                    <div class="text-time">{{p.tgl_pesan}}</div>
                                    <div class="media-description text-muted">Order .</div>
                                    <div class="media-links">
                                        <a class="btn btn-sm btn-info text-white" href="#">Delivery Details</a>
                                        <div class="bullet"></div>
                                        <a class="btn btn-sm btn-info text-white" href="#">File Upload</a>
                                        <div class="bullet"></div>
                                        <a class="btn btn-sm btn-danger text-white" href="#">Cancel</a>
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
            console.log(this.orders)
        },
        data() {
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
                tambah: false,
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
            hapus(id) {
                // this.$inertia.post(this.$route('admin.server.delete', {id: id}), {}, {
                //     replace: true,
                //     preserveState: false,
                //     preserveScroll: false,
                //     only: ['server'],
                // })
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
