<template>
    <div>Login
    <form @submit.prevent = "pressed">
    <div class="login">
        <input type="email" placeholder="email" v-model="email">
    </div>
    <div class="password">
        <input type="password" placeholder="password" v-model="password">
    </div>
    <button>Login</button>
    </form>
    <div class="error" v-if = "error">{{error.message}}</div>
    <span>Need an acount? Click here to <router-link to = "/register">register</router-link></span>
    </div>

</template>

<script>
import  firebase from "firebase/app";
import 'firebase/auth';
export default {
    data() {
        return{
            email: '',
            password: '',
            error: '',
        }
    },methods: {
        async pressed() {
           try{
              const val = await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
              console.log(val);
              this.$router.replace({name: "secret"})
           }catch(err){
               console.log(err)
           } 
        }
    }
}
</script>