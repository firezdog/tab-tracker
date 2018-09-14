<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3>
        <!-- <song-search-panel/> -->
        <songs-panel class="mt-2" :songs='songs'/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongSearchPanel from './SongSearchPanel'
import BookmarkService from '@/services/BookmarkService'
export default {
  name: 'Songs',
  components: {SongsPanel, SongSearchPanel},
  data () {
    return {
      songs: null,
      userId: this.$store.state.user.id
    }
  },
  // watch: {
  //   '$route.query.search': {
  //     immediate: true,
  //     async handler (search) {
  //       this.songs = (await SongService.searchSongs(search)).data
  //     }
  //   }
  // },
  async mounted () {
    this.songs = (await BookmarkService.getAllBookmarks(this.userId)).data.map(b => b.Song)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
