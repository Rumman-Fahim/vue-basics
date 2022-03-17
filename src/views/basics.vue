<template>
	<div>
		<h1>Basics</h1>
		<br />

		<h3>Hello My name is {{ name }}</h3>

		<!-- <button @eventName="functionName">Show Alert</button> -->
		<button @click="onclickShowAlert($event, 'My Name is')">Show Alert</button>
		<button @mouseover="onmouseoverShowAlert">Show Alert</button>
	</div>
</template>

<script>
export default {
	name: 'Basics',
	data() {
		return {
			name: 'Usman',
		};
	},
	methods: {
		onclickShowAlert(event, text) {
			console.log(event);
			alert(text + ' ' + this.name);
		},
		onmouseoverShowAlert(event) {
			console.log(event);
		},
	},
};
</script>

<style scoped></style>
