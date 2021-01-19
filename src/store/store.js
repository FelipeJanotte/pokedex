import Vue from 'vue';
import Vuex from 'vuex';

import pokemonModule from './modules/pokemonModule'

Vue.use(Vuex);

export default new Vuex.Store({ 
	modules:{
		pokemonModule
	}
})