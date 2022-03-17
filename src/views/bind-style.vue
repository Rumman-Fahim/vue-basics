<template>
	<div>
		<h1>Style</h1>
		<!-- simple -->
		<h1 style="color: red">Basic style="color: red"</h1>

		<br />
		<br />

		<h1 v-if="isHeadingRed" style="color: red">Condtional style using v-if</h1>
		<h1 v-else style="color: black">Condtional style using v-else</h1>

		<br />
		<br />

		<h1 :style="{ color: isHeadingRed ? 'red' : 'black' }">
			Conditional style using :style="{ color: isHeadingRed ? 'red' : 'black' }"
		</h1>

		<button @click="onclickToggleStyle">toggle red text</button>
	</div>
</template>

<script>
export default {
	name: 'Style',
	data() {
		return {
			isHeadingRed: true,
		};
	},
	methods: {
		onclickToggleStyle() {
			this.isHeadingRed = !this.isHeadingRed;
		},
	},
};
</script>

<style scoped></style>
