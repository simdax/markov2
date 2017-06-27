import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

import markov from 'markov-vue/lib/components/store'
import weigths from './lib/storePlugin'

let store = new VueX.Store({
	modules:{
		markov,
		weigths
	}
});

new Vue({
	store, 
  el: '#app',
  render: h => h(require('./App.vue'))
})
