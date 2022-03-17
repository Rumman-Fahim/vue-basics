<template>
	<div>
		<h1 v-if="showText">Show Text</h1>
	</div>
</template>

<script>
export default {
	name: 'Conditions',
	data() {
		return {
			showText: true,
		};
	},
};
</script>

<style scoped></style>
