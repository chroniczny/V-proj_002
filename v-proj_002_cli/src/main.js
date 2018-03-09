import Vue from 'vue'
import App from './App.vue'

import App1 from './App1.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'

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

new Vue({
  el: '#app2',
  render: h => h(App2)
});

new Vue({
  el: '#app3',
  render: h => h(App3)
});
