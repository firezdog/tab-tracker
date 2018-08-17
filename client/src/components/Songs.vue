<template>
  <div>
    <v-layout>
      <v-flex xs6 offset-xs3 column>
        <panel title="Songs">
          <v-icon>add_circle</v-icon>
          <div v-for="song in songs" :key="song.id">
            {{song.title}} - {{song.artist}} - {{song.album}}
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </div>
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
</style>
