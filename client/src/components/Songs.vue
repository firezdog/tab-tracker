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
    <div v-for="song in songs" class="Song" :key="song.id">
      <v-layout>
        <v-btn
        color="cyan"
        :to="{name: 'song', params: {songId: song.id}}"
        outline
        fab small
        top left relative>
          <v-icon>remove_red_eye</v-icon>
        </v-btn>
        <v-flex xs6 text-xs-left class="ml-4">
          <div class="SongTitle">{{song.title}}</div>
          <div class="SongArtist">{{song.artist}}</div>
          <div class="SongGenre">{{song.genre}}</div>
        </v-flex>
        <v-flex xs6 text-xs-centre>
          <img class="AlbumImage" :src="song.albumImageUrl"/>
          <p>{{song.album}}</p>
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
.Song {
  padding: 20px;
  height: 70%;
  overflow: hidden;
}
.AlbumImage {
  box-shadow: 6px 3px 10px darkgrey;
  width: 300px;
  margin: 0 auto;
}
.SongTitle {
  font-size: 200%;
  font-weight: 500;
}
.SongGenre {
  font-size: 100%;

}
.SongArtist {
  font-style: italic;
  font-size: 150%;
}
</style>
