import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import NewSong from '@/components/NewSong'
import Song from '@/components/Song/Index'
import EditSong from '@/components/EditSong'
import Favorites from '@/components/Songs/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'songs'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/new',
      name: 'NewSong',
      component: NewSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: Song
    },
    {
      path: '/songs/:songId/edit',
      name: 'EditSong',
      component: EditSong
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
