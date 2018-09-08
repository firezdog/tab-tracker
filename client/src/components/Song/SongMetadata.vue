<template>
  <panel title="Song Metadata">
    <div id="bookmark-div">
      <v-icon id="bookmark-icon" @click="bookmark" :class="{bookmarked: bookmarked}" right>bookmark</v-icon>
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
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmarked: false
    }
  },
  methods: {
    bookmark () {
      this.bookmarked = !this.bookmarked
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
}
#bookmark-icon.bookmarked {
  color: red;
}
#bookmark-icon.bookmarked:active {
  color: red;
}
#bookmark-icon.bookmarked:hover {
  color: green;
}
#bookmark-icon:hover {
  cursor: pointer;
  font-size: 80px;
  bottom: -5px;
  right: -30px;
  color: red;
}
#bookmark-icon:active {
  color: green;
}
</style>
