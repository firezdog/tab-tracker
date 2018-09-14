import api from '@/services/api'

export default {
  getAllBookmarks (userId) {
    return api().get(`user/${userId}/bookmarks`)
  },
  isBookmarked (userId, songId) {
    return api().get('bookmarks', {
      params:
        {userId, songId}
    })
  },
  addBookmark (userId, songId) {
    return api().post('bookmarks', {userId, songId})
  },
  deleteBookmark (userId, songId) {
    return api().delete('bookmarks', {data: {userId, songId}})
  }
}
