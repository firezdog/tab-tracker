<template>
  <div>
    <v-layout>
      <!-- top left tab !-->
      <v-flex class="mr-3" xs6>
        <SongMeta class="Panel" :song="song"/>
      </v-flex>
      <!-- top right tab !-->
      <v-flex xs6>
        <tab class="Panel" :song="song"/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-3">
      <!-- bottom left tab !-->
      <v-flex class="mr-3" xs6>
        <Youtube class="Panel" :youtubeId="song.youtubeId"/>
      </v-flex>
      <!-- bottom right tab !-->
      <v-flex xs6>
        <Lyrics class="Panel" :lyrics="song.lyrics"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMeta from '@/components/Song/SongMetadata'
import Youtube from '@/components/Song/Youtube'
import Tab from '@/components/Song/Tab'
import Lyrics from '@/components/Song/Lyrics'
import SongService from '@/services/SongService'
export default {
  components: {SongMeta, Youtube, Tab, Lyrics},
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

<style>
.Panel {
  height: 100%;
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
  white-space: pre;
}
</style>
