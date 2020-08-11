<template>
    <App topnav="List Order">
        <div class="row">
            <Messages></Messages>
            <div class="col-12">
                <div class="card card-primary">
                    <div class="card-header bg-primary">
                        <div id="dataTableExample_filter" class="dataTables_filter">
                            <label>
                                <input @input="resetPagination()" type="search" class="form-control"
                                       v-model="search" placeholder="Search">
                            </label>
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div id="dataTableExample_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <Datatable hide-header="false" :columns="columns" :sortKey="sortKey"
                                                   :sortOrders="sortOrders" @sort="sortBy">
                                            <tbody>
                                            <tr v-for="p in paginated" role="row" class="odd">
                                                <td>#{{ p.id_order }}</td>
                                                <td>{{ p.kategori }}</td>
                                                <td>{{ p.server }}</td>
                                                <td>{{ p.pengiriman }}</td>
                                                <td>{{ p.quantity }}</td>
                                                <td>{{ p.n_karakter }}</td>
                                                <td>{{ p.telp }} ({{p.contacttype}})</td>
                                                <td>
                                                    <div v-if="p.status_o === 'aktif'" class="badge badge-primary">Active</div>
                                                    <div v-if="p.status_o === 'pending'" class="badge badge-warning">Pending</div>
                                                    <div v-if="p.status_o === 'done'" class="badge badge-success">Done</div>
                                                </td>
                                                <td>
                                                    <button v-if="p.status_o !== 'done'" @click="download(p)"
                                                            class="btn btn-sm btn-primary">
                                                        <i class="fa fa-download"></i>
                                                    </button>
                                                    <button v-if="p.status_o !== 'done'" v-on:click="update(p)"
                                                            class="btn btn-sm btn-primary">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button @click="hapus(p.id_order)" v-if="p.status_o !== 'done'"
                                                            class="btn btn-sm btn-danger">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Datatable>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-5">

                                    </div>
                                    <Pagination :pagination="pagination" :client="true" :filtered="filteredProjects"
                                                @prev="--pagination.currentPage"
                                                @next="++pagination.currentPage">
                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <OrderEdit v-if="edit" :data="dataedit"></OrderEdit>
            </div>
        </div>
        <b-modal hide-footer ref="downloadFile" title="Download File">
            <div class="invoice">
                <div class="invoice-print">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="invoice-title">
                                <div class="invoice-number">Order #{{order_num}}</div>
                            </div>
                            <hr>
                            <p v-for="p in photo"><a download="" :href="$route('depan.index') + p">{{p}}</a></p>
<!--                            <input @change="selectFile" class="form-control-file" type="file">-->
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
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
    import OrderEdit from "./OrderEdit";

    export default {
        components: {OrderEdit, Messages, App, Pagination, Datatable},
        props: {
            order: Array
        },
        mounted() {
            this.load();
        },
        data() {
            let sortOrders = {};
            let columns = [
                {width: '10%', label: '#'},
                {width: '33%', label: 'Game'},
                {width: '10%', label: 'Server'},
                {width: '10%', label: 'Trade Mode'},
                {width: '10%', label: 'Quantity'},
                {width: '10%', label: 'Character Name'},
                {width: '10%', label: 'Contact'},
                {width: '10%', label: 'Status'},
                {width: '33%', label: 'Action'},
            ];
            columns.forEach((column) => {
                sortOrders[column.name] = -1;
            });
            return {
                edit: false,
                dataedit: {},
                photo: [],
                order_num: '',
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
            download(data)
            {
                this.photo = JSON.parse(data.file)
                this.order_num = data.id_order;
                this.$refs.downloadFile.show();
            },
            hapus(id)
            {
                this.$inertia.post(this.$route('admin.order.delete', {id: id})).then(() => {
                    this.$inertia.reload({
                        preserveScroll: true,
                        preserveState: false,
                        only: ['order']
                    })
                })
            },
            update(data)
            {
                this.edit = true;
                this.dataedit = data;
            },
            load() {
                this.pagination.total = this.data.length;
                let i = 0;
                let vm = this;
                this.order.forEach(function (value, index) {
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
