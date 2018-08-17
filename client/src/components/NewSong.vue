<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Metadata">
          <v-alert
            class="feedback"
            type="error"
            :value="error.length > 0">
            {{error}}
          </v-alert>
          <v-form ref="song_form" v-model="song_valid" lazy-validation>
            <v-flex pb-4 mt-4 xs10 offset-xs1>
              <v-text-field
              label="Title"
              v-model="song.title"
              outline
              required
              :rules="[rules.required]"
              >
              </v-text-field>
              <v-text-field
              label="Artist"
              v-model="song.artist"
              required
              :rules="[rules.required]"
              outline
              >
              </v-text-field>
              <v-text-field
              label="Genre"
              required
              :rules="[rules.required]"
              v-model="song.genre"
              outline
              >
              </v-text-field>
              <v-text-field
              label="Album"
              v-model="song.album"
              required
              :rules="[rules.required]"
              outline
              >
              </v-text-field>
              <v-text-field
              label="Album Image (URL)"
              v-model="song.albumImageUrl"
              required
              :rules="[rules.required]"
              outline
              >
              </v-text-field>
              <v-text-field
              label="YouTube Video (ID)"
              v-model="song.youtubeId"
              required
              :rules="[rules.required]"
              outline
              >
              </v-text-field>
              <v-btn @click="createSong()" flat dark class="cyan">Create</v-btn>
            </v-flex>
          </v-form>
       </panel>
      </v-flex>
      <v-flex ml-3 xs-6>
        <panel title="Content">
          <v-form ref="song_form_pt2" v-model="song_valid" lazy-validation>
            <v-flex xs-11 mt-4 ml-4 mr-4>
              <v-textarea
                label="Lyrics"
                v-model="song.lyrics"
                required
                :rules="[rules.required]"
                outline
              >
              </v-textarea>
              <v-textarea
                label="Tab"
                v-model="song.tab"
                required
                :rules="[rules.required]"
                outline
              >
              </v-textarea>
            </v-flex>
          </v-form>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongService from '@/services/SongService'
export default {
  name: 'NewSong',
  components: { Panel },
  data () {
    return {
      song_valid: true,
      rules: {
        required: (value) => !!value || 'Field is required.'
      },
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      error: ''
    }
  },
  methods: {
    async createSong () {
      if (this.$refs.song_form.validate() * this.$refs.song_form_pt2.validate() === 1) {
        const song = {...this.song}
        try {
          const result = await SongService.createSong(song)
          this.error = ''
          this.$refs.song_form.reset()
          this.$refs.song_form_pt2.reset()
          // this.$router.push({name: 'songs'})
        } catch (err) {
          this.error = 'An error occurred.'
        }
      }
    }
  }
}
</script>

<style scoped>
.feedback {
  margin-top: 0;
  font-weight: bold;
}
</style>
