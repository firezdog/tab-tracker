<template>
  <div>
    <h1>Register</h1>
    <input type="email" placeholder="email" v-model="email" name="email"/>
    <br/>
    <input type="password" placeholder="password" v-model="password" name="password"/>
    <br/>
    <button @click="register">Submit</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const formData = {email: this.email, password: this.password}
      const response = await AuthenticationService.register(formData)
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
