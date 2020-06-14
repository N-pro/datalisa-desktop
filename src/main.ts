import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import vuetify from './plugins/vuetify';
import './style/index.scss'



Vue.config.productionTip = false

Vue.use(Antd);


new Vue({
  store,
  vuetify,
  render: h => h(App)
} as any).$mount('#app')
