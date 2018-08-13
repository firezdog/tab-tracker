<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3 column>
        <div class="white elevation-5">
          <v-toolbar id="toolbar" flat dense dark class="cyan">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-alert
            class="feedback"
            :value="success"
            dismissible
            type="success">
            Login succeeded!
          </v-alert>
          <v-alert
            class="feedback"
            :value="error"
            dismissible
            type="error">
            {{error}}
          </v-alert>
          <div @keyup.enter="login"
            class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Enter email address"
              class="form"
              type="email"
              v-model="email"
              name="email"/>
            <v-text-field
              label="Enter password"
              class="form" type="password"
              v-model="password" name="password"/>
            <v-btn dark class="cyan form" @click="login">Submit</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: '',
      success: false
    }
  },
  methods: {
    async login () {
      const formData = {email: this.email, password: this.password}
      try {
        const response = await AuthenticationService.login(formData)
        this.error = ''
      } catch (err) {
        this.error = err.response.data.error
      }
      this.success = this.error.length === 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feedback {
  margin-top: 0;
  font-weight: bold;
}
</style>
