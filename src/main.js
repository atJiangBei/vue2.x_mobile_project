import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/util/rem.js'
import '@/styles'
import '@/components/global-loading'
import './api/init.js'
Vue.config.productionTip = false

if (process.env.VUE_APP_DIRNAME === "stg") {
	const Vconsole = require("vconsole")
	new Vconsole()
}

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')


