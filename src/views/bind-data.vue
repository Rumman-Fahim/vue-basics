<template>
	<div>
		<h1>Data</h1>
		<input type="text" placeholder="enter name" value="Usman" />
		<input type="text" placeholder="enter name" :value="name" />
	</div>
</template>

<script>
export default {
	name: 'Data',
	data() {
		return {
			name: 'Usman',
		};
	},
};
</script>

<style scoped></style>
