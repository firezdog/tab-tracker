<template>
  <div>
    <v-toolbar fixed class="cyan">
      <v-toolbar-title class="mr-4">
        <v-btn id="home" flat dark to="/">TabTracker</v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn exact :to="{name: 'songs'}" flat dark>Browse</v-btn>
        <v-btn exact :to="{name: 'NewSong'}" flat dark>New Song</v-btn>
        <v-btn v-if="isLoggedIn" :to="{name: 'songs', query: {favorites: true}}" flat dark>My Songs</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="!isLoggedIn" flat dark :to="{name: 'register'}">Sign Up</v-btn>
        <v-btn v-if="!isLoggedIn" flat dark :to="{name: 'login'}">Login</v-btn>
        <v-btn v-if="isLoggedIn" flat dark @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Header',
  computed: {
    isLoggedIn: function () {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout () {
      // note: login / registration get a token from server, but bc app is stateless, logging out just means destroying the token (on the front-end)
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setIsLoggedIn', false)
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    font-size: 1.1em;
    font-weight: normal;
    text-transform: none
  }
</style>
