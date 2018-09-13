<template>
  <panel title="Search">
    <v-text-field class="pt-2"
      label="Search by song title, artist, album, and genre"
      v-model="search">
    </v-text-field>
  </panel>
</template>

<script>
// for _.debounce, which allows a lag between user input and updated route, preventing excessive requests
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs',
        query: {favorites: false, search: ''}
      }
      if (this.search !== '') {
        route.query.search = value
      } else {
        delete route.query.search
      }
      if (this.$route.query.favorites === true) {
        route.query.favorites = true
      } else {
        delete route.query.favorites
      }
      this.$router.push(route)
    }, 200),
    // I also thought of doing this using mounted() -- not sure which is better?
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>
<style scoped>
</style>
