<template>
	<div>
		<input type="text" placeholder="enter first name" v-model="firstName" />
		<input type="text" placeholder="enter last name" v-model="lastName" />

		<!-- <h1>Fullname = {{ firstName }} {{ lastName }}</h1> -->
		<h1>Fullname = {{ fullname }}</h1>

		<h1>time {{ currentDate }}</h1>
	</div>
</template>

<script>
export default {
	name: 'Computed',
	data() {
		return {
			firstName: '',
			lastName: '',
		};
	},
	computed: {
		// will update everytime there is a change in firstName and/or lastName
		fullname() {
			return this.firstName + ' ' + this.lastName;
		},
		// will not work because Date.now() is not a reactive dependency:
		currentDate() {
			return Date.now();
		},
	},
};
</script>

<style scoped></style>
