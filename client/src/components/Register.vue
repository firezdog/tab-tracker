<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-5">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div @keyup.enter="register" class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field class="form" type="email" placeholder="email" v-model="email" name="email"/>
          <v-text-field class="form" type="password" placeholder="password" v-model="password" name="password"/>
          <v-btn class="cyan form" @click="register">Submit</v-btn>
          <p class="error" v-html="error"></p>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      const formData = {email: this.email, password: this.password}
      try {
        const response = await AuthenticationService.register(formData)
        this.error = `Registration of ${this.email} successful.`
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app > div > div > div > nav {
  margin-bottom: 20px;
}
.error {
  margin-top: 20px;
  color: red
}
.form {
  display: block;
  margin: 5px auto;
}
button.form {
  margin-top: 20px;
}
</style>
