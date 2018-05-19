import Add from './components/add.vue'
import About from './components/about.vue'
import Edit from './components/edit.vue'
import Inag from './components/inag.vue'
import View from './components/view.vue'

export default[
  {path:'/', component:Inag},
  {path:'/add', component:Add},
  {path:'/view/:id', component:View},
  {path:'/edit/:id', component:Edit},
  {path:'/about', component:About}
]
