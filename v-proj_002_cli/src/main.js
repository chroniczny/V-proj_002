import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

Vue.component('app-servers', Home); // app's servers GLOBAL COMPONENT

new Vue({
  el: '#app',
  render: h => h(App)
})
