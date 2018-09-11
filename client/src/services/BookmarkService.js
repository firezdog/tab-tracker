import api from '@/services/api'

export default {
  isBookmarked (userId, songId) {
    return api().get('bookmarks', {
      params:
        {userId, songId}
    })
  },
  addBookmark (userId, songId) {
    return api().post('bookmarks', {userId, songId})
  }
}
