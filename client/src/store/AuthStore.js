import { reactive } from 'vue'

export const AuthStore = reactive({

    granted: false,

    defaults: {

        user: null,
        token: null

    },

    data: {
        
        user: null,
        token: null
    
    },

    signin(auth) {

        this.data = auth

        this.granted = true

        localStorage.setItem("auth", JSON.stringify(auth))

    },

    signout() {

        this.data = this.defaults

        this.granted = false

        localStorage.removeItem("auth")

    },

    check() {

        const AuthStorage = localStorage.getItem("auth") || false

        let AuthGranted = AuthStorage;

        try {
    
            AuthGranted = JSON.parse(AuthStorage)
    
        } catch(error) {

            this.signout()
    
        }

        this.data = AuthGranted
    
        this.granted = !!this.data.user

    }

})