<template>
  <div>
    <v-layout>
      <!-- top left tab !-->
      <v-flex class="mr-3" xs6>
        <SongMeta :song="song"/>
      </v-flex>
      <!-- top right tab !-->
      <v-flex xs6>
        <tab :song="song"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3">
      <!-- bottom left tab !-->
      <v-flex class="mr-3" xs6>
        <Youtube :youtubeId="song.youtubeId"/>
      </v-flex>
      <!-- bottom right tab !-->
      <v-flex xs6>
        <panel class="Panel" title="Lyrics">
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
import Youtube from '@/components/Song/Youtube'
import Tab from '@/components/Song/Tab'
export default {
  components: {Panel, SongMeta, Youtube, Tab},
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
.Panel {
  height: 650px;
  overflow: hidden;
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
