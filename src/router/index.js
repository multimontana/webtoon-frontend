import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import Profile from '../pages/profile/Profile'
import ProfileSection from '../components/organizms/profileSection/ProfileSection'
import Subscribes from '../pages/profile/subscribes/Subscribes'
import Balance from '../pages/profile/balance/Balance'
import AddPost from '../pages/publishCard/banner/AddPost'
import Preview from '../pages/publishCard/banner/episodePreview/Preview'
import Publications from '../pages/publishCard/banner/tabs/publications/Publications'
import NewItems from '../pages/new_items/NewItems'
import Popular from '../pages/popular/Popular'
import Genres from '../pages/genres/Genres'
import Cart from '../pages/cart/Cart'
import Reader from '../pages/reader/Reader'
import Author from '../pages/author/Author'
import Translator from '../pages/translator/Translator'
import AuthorTranslator from '../pages/authorTranslator/AuthorTranslator'
import Translators from '../pages/translators/Translators'
// import Login from '../pages/login/Login'
// import Registration from '../pages/registration/Registration'
// import SignIn from '../pages/sign_in/Sign_in'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path: '/profile',
        component: ProfileSection
      },
      {
        path: '/profile/subscribes',
        component: Subscribes
      },
      {
        path: '/profile/balance',
        component: Balance
      }
    ]
  },
  {
    path: '/publish',
    name: 'Banner',
    component: AddPost
  },
  {
    path: '/preview',
    name: 'EpisodePreview',
    component: Preview
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/items',
    name: 'items',
    component: NewItems
  },
  {
    path: '/popular',
    name: 'popular',
    component: Popular
  },
  {
    path: '/genres',
    name: 'genres',
    component: Genres
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/reader',
    name: 'reader',
    component: Reader
  },
  {
    path: '/author',
    name: 'author',
    component: Author
  },
  {
    path: '/translator',
    name: 'translator',
    component: Translator
  },
  {
    path: '/authorTranslator',
    name: 'authorTranslator',
    component: AuthorTranslator
  },
  {
    path: '/translators',
    name: 'translators',
    component: Translators
  }
  // {
  //   path: '*',
  //   name: '404',
  //   component: NotFound
  // }
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },
  // {
  //   path: '/registration',
  //   name: 'registration',
  //   component: Registration
  // },
  // {
  //   path: '/signIn',
  //   name: 'signIn',
  //   component: SignIn
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
