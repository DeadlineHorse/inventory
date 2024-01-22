<template>
    <main class="d-flex align-items-center justify-content-center">
        <form @submit.prevent="SignIn" class="col-xl-3">
            <h3 class="mb-4 fw-light">Sign in to your account</h3>
            <div class="mb-3">
                <div class="mb-3">
                    <input type="text" class="form-control w-full" placeholder="Email address ..."
                        v-model="form.inputs.email" :disabled="form.loading">
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control w-full" placeholder="Account password ..."
                        v-model="form.inputs.password" :disabled="form.loading">
                </div>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-primary w-100" :disabled="form.loading">
                    <div v-if="form.loading">
                        <span role="status">Signing ...</span>
                    </div>
                    <span v-else>Sign in</span>
                </button>
            </div>
        </form>
    </main>
</template>

<script>
import api from '../../services/api'

import { AuthStore } from '../../store/AuthStore'

export default {

    data() {

        return {

            form: {

                loading: false,

                inputs: {

                    email: "",
                    password: ""

                }

            }

        }

    },

    methods: {

        SignIn() {

            this.form.loading = true

            api.post("signin", { email: this.form.inputs.email, password: this.form.inputs.email }).then(response => {

                console.log(response)

                this.form.loading = false

            }).catch(error => {

                console.log(error)

                this.form.loading = false

            })

            AuthStore.signin({ user: {}, token: null })

            this.$router.replace({ name: 'dashboard' })

        }

    }

}
</script>