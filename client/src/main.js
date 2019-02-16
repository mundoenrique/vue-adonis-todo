import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
