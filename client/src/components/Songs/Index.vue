<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <song-search-panel/>
        <songs-panel class="mt-2" :songs='songs'/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongSearchPanel from './SongSearchPanel'
import SongService from '@/services/SongService'
export default {
  name: 'Songs',
  components: {SongsPanel, SongSearchPanel},
  data () {
    return {
      songs: null,
      favorites: false
    }
  },
  watch: {
    '$route.query.favorites': {
      immediate: true,
      async handler (favorites) {
        this.favorites = !!favorites
      }
    },
    '$route.query.search': {
      immediate: true,
      async handler (search) {
        this.songs = (await SongService.searchSongs(search, this.favorites)).data
      }
    }
  },
  async mounted () {
    this.songs = (await SongService.getAllSongs(this.favorites)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
