<template>
  <div>
    <v-toolbar fixed class="cyan">
      <v-toolbar-title class="mr-4">
        <v-btn id="home" flat dark to="root">TabTracker</v-btn>
      </v-toolbar-title>
      <!-- TODO
      <v-toolbar-items>
        <v-btn flat dark>Browse</v-btn>
      </v-toolbar-items> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark to="register">Sign Up</v-btn>
        <v-btn flat dark to="login">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
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
