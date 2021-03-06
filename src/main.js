import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Router from 'vue-router'
import router from './router/index.js';


Vue.config.productionTip = false

Vue.use(Button);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
