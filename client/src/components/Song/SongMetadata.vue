<template>
  <panel class="Panel" title="Song Metadata">
    <v-layout>
      <v-flex xs3 text-xs-left>
        <div class="SongTitle">{{song.title}}</div>
        <div class="SongArtist">{{song.artist}}</div>
        <div class="SongGenre">{{song.genre}}</div>
      </v-flex>
      <v-flex xs9>
        <img class="AlbumImage" :src="song.albumImageUrl"/>
        <p>{{song.album}}</p>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel.vue'
export default {
  components: {Panel},
  props: [
    'song'
  ]
}
</script>

<style scoped>
.Panel {
  overflow: hidden;
  height: 650px;
}
.SongTitle {
  font-size: 125%;
  font-weight: 500;
}
.SongGenre {
  font-size: 80%;

}
.SongArtist {
  font-size: 100%;
  font-style: italic;
}
.AlbumImage {
  margin: 20px auto 0 auto;
  box-shadow: 6px 3px 10px darkgrey;
  height: 70%;
  width: 70%;
}
</style>
