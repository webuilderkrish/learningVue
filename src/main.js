import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

new Vue({
  data() {
    return {
      msg:'hi shubham'
    }
  },
  render: h => h(App),
}).$mount('#app')
