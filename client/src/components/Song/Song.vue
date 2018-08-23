<template>
  <div>
    <!-- top tabs !-->
    <SongMeta :song="song"/>
    <v-layout class="mt-3">
      <!-- bottom left tab !-->
      <v-flex class="mr-3" xs6>
        <panel title="YouTube Video">
        </panel>
      </v-flex>
      <!-- bottom right tab !-->
      <v-flex xs6>
        <panel title="Lyrics">
          <textarea
          multi-line
          readonly
          v-model="song.lyrics">
          </textarea>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import SongMeta from '@/components/Song/SongMetadata'
import Panel from '@/components/Panel.vue'
export default {
  components: {Panel, SongMeta},
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    this.song = (await SongService.getOneSong(this.$store.state.route.params.songId)).data
  }
}
</script>

<style scoped>
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
