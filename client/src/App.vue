<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<script>
import { AuthStore } from './store/AuthStore.js'

import Layout from './layouts/Layout.vue'

export default {

    components: { Layout },

    created() {

        AuthStore.check()

    }

}
</script>