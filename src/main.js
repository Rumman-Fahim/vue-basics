import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.config.productionTip = false;

import '@/assets/style.css';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);

new Vue({
	router,
	store,
	vuetify,

	render: function (h) {
		return h(App);
	},
}).$mount('#app');
