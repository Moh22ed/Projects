import Vue from 'vue'
import App from './App.vue'
import Vr from 'vue-router'
import Vre from 'vue-resource'
import Add from './components/add.vue'
import About from './components/about.vue'
import Alert from './components/alert.vue'
import Edit from './components/edit.vue'
import Inag from './components/inag.vue'
import View from './components/view.vue'
import Routee from './routers'

//VueComponents
Vue.component('app-inag', Inag);
Vue.component('app-add', Add);
Vue.component('app-view', View);
Vue.component('app-edit', Edit);
Vue.component('app-about', About);



// VueUse
Vue.use(Vr);
Vue.use(Vre);


//Routes
const router = new  Vr({
  routes: Routee,
  mode: 'history'
});



//

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
