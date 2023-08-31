import router from '@/router'
import {ref} from 'vue'
import { useRouter } from 'vue-router';
export default function userComp(){

    const router = useRouter()


    const userRules = {
        password: [
            v => !!v || 'Password is mandatory',
            v => (v && v.length >= 6) || 'Password must have at least 6 characters'
        ], 
        username:[
            v => !!v || 'Username is mandatory',
        ]
    
    } 

    function login(payload){
        console.log(payload)
        localStorage.setItem("user", payload.username)
        router.push({path : '/'})
        clearUser()
    }

    function clearUser(){
        user.email.value = ''
        user.username.value = ''
        user.password.value = ''
        user.realm_id.value = ''
    }

 

    

    return {
        userRules,
        login
    }

}   