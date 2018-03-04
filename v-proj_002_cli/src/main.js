import Vue from 'vue'
import App from './App.vue'

import App1 from './App1.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});


new Vue({
el: '#app',
render: h => h(App)
});


new Vue({
  el: '#app1',
  render: h => h(App1)
});
