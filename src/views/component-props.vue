<template>
	<div class="parent">
		I am parent
		<PropsChild :propsColors="colorsFromParent" :propsData="dataFromParent" />

		<button @click="addColor">Add Color</button>
	</div>
</template>

<script>
// local
import PropsChild from '../components/PropsChild.vue';

export default {
	components: { PropsChild },
	name: 'Props',
	data() {
		return {
			dataFromParent: 'Hello World',
			colorsFromParent: ['red', 'green', 'blue'],
		};
	},
	methods: {
		addColor() {
			this.colorsFromParent.push('black');
		},
	},
};
</script>

<style scoped>
.parent {
	padding: 50px;
	background-color: pink;
}
</style>
