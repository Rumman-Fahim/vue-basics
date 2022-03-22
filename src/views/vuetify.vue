<template>
	<div>
		<div class="mt-16 red mt-lg-10">Hello World</div>
		<v-form v-model="form" ref="form">
			<v-text-field
				v-model="username"
				label="Username"
				placeholder="enter name"
				:rules="usernameRules"
			></v-text-field>
			<v-text-field
				v-model="age"
				label="Age"
				type="number"
				placeholder="enter age"
				:rules="ageRules"
			></v-text-field>
		</v-form>
		{{ form }}
		<v-btn max-width="" @click="validate">validate</v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: '',
			username: '',
			age: '',
			usernameRules: [
				(v) => !!v || 'Please enter username',
				(v) => v.length >= 5 || 'username must be at least 5 characters',
			],
			ageRules: [(v) => !!v || 'Please enter age'],
		};
	},
	methods: {
		validate() {
			this.$refs.form.validate();
		},
	},
};
</script>

<style scoped></style>
