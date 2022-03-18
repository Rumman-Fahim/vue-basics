<template>
	<div>
		<input type="text" placeholder="enter first name" v-model="firstName" />
		<input type="text" placeholder="enter last name" v-model="lastName" />

		<!-- <h1>Fullname = {{ firstName }} {{ lastName }}</h1> -->
		<h1>Fullname = {{ fullname }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
		};
	},
	computed: {
		fullname() {
			return this.firstName + ' ' + this.lastName;
		},
	},
};
</script>

<style scoped></style>
