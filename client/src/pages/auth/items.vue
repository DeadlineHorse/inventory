<template>
    <div class="container">
        <div class="d-flex justify-content-between my-3 filters">
            <div class="d-flex align-items-center gap-3">
                <router-link :to="{ query: { ...this.$route.query, ...{ style: 'grid' } } }"
                    class="d-flex align-items-center gap-1"
                    :class="{ 'router-link-exact-query-active': this.filters.style === 'grid' }">
                    <i class="bi bi-grid"></i> Grid view
                </router-link>
                <router-link :to="{ query: { ...this.$route.query, ...{ style: 'table' } } }"
                    class="d-flex align-items-center gap-1"
                    :class="{ 'router-link-exact-query-active': this.filters.style === 'table' }">
                    <i class="bi bi-list-nested"></i> Table view
                </router-link>
            </div>
            <div class="d-flex align-items-center gap-3">
                <router-link :to="{ query: { ...this.$route.query, ...{ order: 'new' } } }"
                    class="d-flex align-items-center gap-1"
                    :class="{ 'router-link-exact-query-active': this.filters.order === 'new' }">
                    <i class="bi bi-arrow-down fs-5"></i> Show new items first
                </router-link>
                <router-link :to="{ query: { ...this.$route.query, ...{ order: 'old' } } }
                    " class="d-flex align-items-center gap-1"
                    :class="{ 'router-link-exact-query-active': this.filters.order === 'old' }">
                    <i class="bi bi-arrow-up fs-5"></i> Show old items first
                </router-link>
            </div>
        </div>

        <div class="table-responsive rounded" v-if="filters.style === 'table'">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="checkbox" class="form-check-input" @input="checkAll">
                            </div>
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Barcode
                        </th>
                        <th>
                            Owner
                        </th>
                        <th>
                            Comment
                        </th>
                        <th class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex justify-content-center align-items-center">
                                <input type="checkbox" class="form-check-input" v-model="checked" value="1">
                            </div>
                        </td>
                        <td>There is no one who loves pain itself, who seeks after it and wants to have it, simply because
                            it is pain.
                        </td>
                        <td>
                            BARCODE
                        </td>
                        <td>OWNER</td>
                        <td>This is shit comment about an item.</td>
                        <td>
                            <div class="d-flex justify-content-end gap-2">
                                <button class="btn btn-sm btn-secondary">
                                    <i class="bi bi-view-list"></i>
                                </button>
                                <router-link class="btn btn-sm btn-primary" :to="{ query: { id: 1 } }">
                                    <i class="bi bi-link"></i>
                                </router-link>
                                <button class="btn btn-sm btn-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="items row g-3 row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4"
            v-if="filters.style === 'grid'">
            <Item
                title="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain." />
        </div>
    </div>
</template>

<script>
import api from '../../services/api'
import Item from '../../components/item.vue'

export default {

    data: () => ({

        items: [],

        defaults: {

            filters: {

                style: 'table',
                order: 'new'

            }

        },

        checked: []

    }),

    components: { Item },

    methods: {

        getItems() {

            api.get("items").then(response => {

                console.log(response.data)

            }).catch(error => {

                console.log(error)

            })

        },

        checkAll() {



        }

    },

    computed: {

        filters() {

            const query = this.$route.query

            return { style: query.style ? query.style : this.defaults.filters.style, order: query.order ? query.order : this.defaults.filters.order }

        }

    },

    created() {


    },

    mounted() {



    }

}
</script>