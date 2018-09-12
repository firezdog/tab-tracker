<template>
  <panel title="Song Metadata">
    <div id="bookmark-div">
      <v-icon v-if="isLoggedIn" id="bookmark-icon" @click="bookmark" :class="{bookmarked: bookmarked}">bookmark</v-icon>
    </div>
    <div>
      <v-alert
        slot="warning"
        class="error"
        :value="error">
        There was an error bookmarking song.
      </v-alert>
    </div>
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
import _bs from '@/services/BookmarkService'
import {mapState} from 'vuex'
export default {
  props: [
    'song'
  ],
  computed: mapState(['isLoggedIn']),
  data () {
    return {
      bookmarked: false,
      userId: this.$store.state.user.id,
      error: false
    }
  },
  async mounted () {
    if (this.isLoggedIn) {
      const response = (
        await _bs
          .isBookmarked(this.userId, this.song.id))
        .data
      this.bookmarked = !!response.result
    }
  },
  methods: {
    async bookmark () {
      this.error = false
      const user = this.userId
      const song = this.song.id
      let res = null
      if (!this.bookmarked) {
        try {
          res = (await _bs.addBookmark(user, song)).data
          this.bookmarked = !!res.bookmark
        } catch (err) {
          this.error = true
        }
      } else {
        try {
          res = (await _bs.deleteBookmark(user, song)).data
          this.bookmarked = !res.message
        } catch (err) {
          this.error = true
        }
      }
    }
  }
}
</script>

<style scoped>
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
#bookmark-div {
  position: relative;
}
#bookmark-icon {
  font-size: 36px;
  position: absolute;
  bottom: 30px;
  right: -15px;
  color: green;
  z-index: 2;
}
#bookmark-icon:hover {
  cursor: pointer;
  font-size: 80px;
  bottom: -5px;
  right: -30px;
}
#bookmark-icon.bookmarked {
  color: red;
}
.error {
  margin: -20px -20px 20px -20px;
  font-weight: bold;
  background-color: darkred !important;
}
</style>
