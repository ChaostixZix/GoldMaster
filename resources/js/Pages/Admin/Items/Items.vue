<template>
    <App topnav="Managemen Items">
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
                                                <td>#{{ p.id_items }}</td>
                                                <td>{{ p.server }}</td>
                                                <td>{{ p.kategori }}</td>
                                                <td>{{ p.pengiriman }}</td>
                                                <td>{{ p.butuh }}G</td>
                                                <td>${{ p.dollar }}/G</td>
                                                <td>
                                                    <button v-on:click="update(p)"
                                                            class="btn btn-sm btn-primary">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button
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
                    <div class="card-footer">
                        <button @click="insert" class="btn btn-primary">
                            <i class="fa fa-plus"></i>
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <ItemsEdit v-if="edit" :type="type" :game="game" :trademode="trademode" :server="server" :data="dataedit"></ItemsEdit>
            </div>
        </div>
    </App>
</template>

<script>
    import Datatable from "../../../Utils/Shared/Datatable";
    import Pagination from "../../../Utils/Shared/Pagination";
    import App from "../../../Utils/Layout/App";
    import Messages from "../../../Utils/Shared/Messages";
    import ItemsEdit from "./ItemsEdit";

    export default {
        components: {ItemsEdit, Messages, App, Pagination, Datatable},
        props: {
            items: Array,
            server: Array,
            game: Array,
            trademode: Array,
        },
        mounted() {
            this.load();
        },
        data() {
            let sortOrders = {};
            let columns = [
                {width: '10%', label: '#'},
                {width: '10%', label: 'Server'},
                {width: '33%', label: 'Game'},
                {width: '10%', label: 'Trade Mode'},
                {width: '15%', label: 'Needed Stock'},
                {width: '10%', label: 'Harga'},
                {width: '33%', label: 'Action'},
            ];
            columns.forEach((column) => {
                sortOrders[column.name] = -1;
            });
            return {
                edit: false,
                type: '',
                dataedit: {},
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
            update(data)
            {
                this.edit = true;
                this.dataedit = data;
                this.type = 'edit';
            },
            insert()
            {
                this.edit = true;
                this.dataedit = {};
                this.type = 'baru';
            },
            load() {
                this.pagination.total = this.data.length;
                let i = 0;
                let vm = this;
                this.items.forEach(function (value, index) {
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
