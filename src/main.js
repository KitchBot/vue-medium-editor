import Vue from 'vue'
import App from './App.vue'

import '@voxgig/medium-editor/dist/css/medium-editor.css'
import '@voxgig/medium-editor/dist/css/themes/beagle.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
