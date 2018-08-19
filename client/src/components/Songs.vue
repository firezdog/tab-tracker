<template>
  <panel title="Songs">
    <v-btn slot="button"
    small
    absolute
    right
    fab
    outline
    class="cyan accent-3"
    to="/songs/new">
      <v-icon>add</v-icon>
    </v-btn>
    <div v-for="song in songs" class="pb-2" :key="song.id">
      <v-layout>
        <v-flex xs6 offset-xs1>
          <div>{{song.title}}</div>
          <div>{{song.artist}}</div>
          <div>{{song.genre}}</div>
        </v-flex>
          <img class="AlbumImage" :src="song.albumImageUrl"/>
        <v-flex xs6>
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.getAllSongs()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.AlbumImage {
  width: 300px;
  height: 300px;
}
</style>
