<template>
	<div>
		<article>
			<input type="text" placeholder="enter name" v-model="username" />
			{{ username }}
		</article>

		<article>
			<input type="number" placeholder="enter phone" v-model="phone" />
			{{ phone }}
		</article>

		<article>
			<input type="radio" name="gender" value="female" v-model="gender" />
			Female
			<br />
			<input type="radio" name="gender" value="male" v-model="gender" />
			Male

			<p>{{ gender }}</p>
		</article>

		<article>
			<input type="checkbox" name="hobbies" value="games" v-model="hobbies" />
			Games
			<input
				type="checkbox"
				name="hobbies"
				value="painting"
				v-model="hobbies"
			/>
			Painting
			<input type="checkbox" name="hobbies" value="running" v-model="hobbies" />
			Running
			<input type="checkbox" name="hobbies" value="reading" v-model="hobbies" />
			Reading

			<p>{{ hobbies }}</p>
		</article>

		<article>
			<select name="role" v-model="role">
				<option value="admin">admin</option>
				<option value="customer">customer</option>
				<option value="business">business</option>
			</select>
			{{ role }}
		</article>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: 'From variable',
			phone: 0,
			gender: 'male',
			hobbies: ['games', 'painting'],
			role: 'business',
		};
	},
};
</script>

<style scoped></style>
