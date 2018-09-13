import api from '@/services/api'

export default {
  getAllSongs (favorites) {
    return api().get('songs', {
      params: {favorites}
    })
  },
  createSong (song) {
    return api().post('songs', song)
  },
  getOneSong (id) {
    return api().get(`songs/${id}`)
  },
  updateSong (song) {
    return api().put(`songs/${song.id}`, song)
  },
  searchSongs (search, favorites) {
    return api().get('songs', {
      params: {
        search: search,
        favorites
      }
    })
  }
}
