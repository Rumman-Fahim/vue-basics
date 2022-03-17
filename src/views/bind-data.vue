<template>
	<div>
		<h1>Data</h1>
		<input type="text" placeholder="enter name" value="Usman" />

		<br />

		<input
			type="text"
			placeholder="enter name"
			:value="name"
			@input="name = $event.target.value"
		/>

		<br />

		<input type="text" placeholder="enter name" v-model="name" />
		{{ name }}
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
