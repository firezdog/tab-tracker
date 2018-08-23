<template>
  <div>
  <panel :title="song.title">
  </panel>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '@/components/Panel.vue'
export default {
  components: {Panel},
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
</style>
