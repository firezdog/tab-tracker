import api from '@/services/api'

export default {
  getAllSongs () {
    return api().get('songs')
  },
  createSong (song) {
    return api().post('songs', song)
  }
}
