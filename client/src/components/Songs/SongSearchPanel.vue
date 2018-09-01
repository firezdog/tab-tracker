<template>
  <panel title="Search">
    <v-text-field class="pt-2"
      label="Search by song title, artist, album, and genre"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: value
        }
      }
      this.$router.push(route)
    },
    // I also thought of doing this using mounted() -- not sure which is better?
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value;
      }
    }
  }
}
</script>
<style scoped>
</style>
