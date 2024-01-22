<template>
    <header>
        <div class="container-fluid">
            <div class="container">
                <div class="d-flex justify-content-between align-items-center py-3">
                    <div>
                        <h4>Inventory base</h4>
                    </div>
                    <div>
                        <nav>
                            <ul class="d-flex flex-col gap-3">
                                <li>
                                    <router-link to="dashboard">Dashboard</router-link>
                                </li>
                                <li>
                                    <router-link to="items">Inventory</router-link>
                                </li>
                                <li>
                                    <router-link to="import">Import from Excel</router-link>
                                </li>
                                <li>
                                    <router-link to="export">Export data</router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="d-flex align-items-center">
                        <router-link to="profile" class="btn btn-default border-0">
                            <i class="bi bi-person"></i>
                        </router-link>
                        <button class="btn btn-default border-0 text-danger text-decoration-underline" @click="SignOut">
                            <i class="bi bi-box-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { AuthStore } from '../../store/AuthStore';

export default {

    name: 'StaticHeader',

    methods: {

        SignOut() {

            AuthStore.signout()

            this.$router.replace({ name: 'signin' })

        }

    }

}
</script>