import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// let count = 5
	state: {
		count: 5,
		colors: ['red', 'green', 'red', 'blue'],
		cart: [
			{
				
			}
		]
	},
	// function getCount() {
	// 	return count
	// }
	getters: {
		getCount(state) {
			return state.count;
		},
		getRedColors(state) {
			return state.colors.filte((color) => color == 'red');
		},
		getArrayOfThisColor(state, payload) {
			return state.colors.filte((color) => color == payload);
		},
	},
	// function increaseCount() {
	// 	 count++
	// }
	mutations: {
		increaseCount(state) {
			state.count++;
		},
		decreaseCount(state) {
			state.count--;
		},
		resetCount(state, payload) {
			state.count = payload;
		},
	},
	actions: {},
	modules: {},
});
