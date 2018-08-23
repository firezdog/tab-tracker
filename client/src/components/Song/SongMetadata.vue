<template>
  <div>
    <v-layout>
      <!-- top left tab !-->
      <v-flex class="mr-3" xs6>
        <panel class="Metadata" title="Song Metadata">
          <v-layout>
            <v-flex xs3 text-xs-left>
              <div class="SongTitle">{{song.title}}</div>
              <div class="SongArtist">{{song.artist}}</div>
              <div class="SongGenre">{{song.genre}}</div>
            </v-flex>
            <v-flex xs9>
              <img class="AlbumImage" :src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>
      <!-- top right tab !-->
      <v-flex xs6>
        <panel title="Tab">
          <textarea
          multi-line
          readonly
          v-model="song.tab">
          </textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
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
.Metadata {
  height: 670px;
  overflow: auto;
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
  height: 100%;
  width: 100%;
  margin: 20px auto;
}
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  height: 600px;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
