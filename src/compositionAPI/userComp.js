import router from '@/router'
import {ref} from 'vue'
import { useRouter } from 'vue-router';
export default function userComp(){

    const router = useRouter()

    const user = {
        username : ref(''),
        email : ref(''),
        password : ref(''),
        realm_id : ref(''),
    }

    const userRules = {
        password: [
            v => !!v || 'Password is mandatory',
            v => (v && v.length >= 6) || 'Password must have at least 6 characters'
        ], 
        email:[
            v => !!v || 'Email is mandatory',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ]
    
    } 

    function login(){
        console.log(user.value)
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
        user,
        userRules,
        login
    }

}   