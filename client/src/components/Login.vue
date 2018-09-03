<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3 column>
        <panel title="Login">
          <v-alert
            slot="warning"
            class="feedback"
            :value="error"
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
              class="form"
              type="password"
              v-model="password"
              name="password"/>
            <v-btn dark class="cyan form" @click="login">Submit</v-btn>
          </div>
        </panel>
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
      error: ''
    }
  },
  computed: {
    user: function () {
      if (this.$store.state.user) {
        return this.$store.state.user.email
      } else {
        return null
      }
    }
  },
  methods: {
    async login () {
      const formData = {email: this.email, password: this.password}
      try {
        const response = await AuthenticationService.login(formData)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$store.dispatch('setIsLoggedIn', true)
        this.error = ''
        this.$router.push({name: 'songs'})
      } catch (err) {
        this.error = err.response.data.error
      }
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
