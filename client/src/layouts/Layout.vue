<template>
    <StaticHeader v-if="AuthGranted" />
    <main class="d-flex align-items-center bg-body-tertiary py-4">
        <slot />
    </main>
    <StaticFooter />
</template>

<script>
import { AuthStore } from '../store/AuthStore.js'

import StaticHeader from '../components/static/StaticHeader.vue'
import StaticFooter from '../components/static/StaticFooter.vue'

export default {

    name: 'Layout',

    components: { StaticHeader, StaticFooter },

    computed: {

        AuthGranted: () => AuthStore.granted

    }

}
</script>