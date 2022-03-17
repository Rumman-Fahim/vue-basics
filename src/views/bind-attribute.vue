<template>
	<div>
		<a :href="link">Go to google</a>

		<br />

		<input :type="inputType" placeholder="enter something" />

		<br />

		<img :src="image" alt="" />
	</div>
</template>

<script>
export default {
	name: 'Attribute',
	data() {
		return {
			link: 'https://github.com/',
			inputType: 'number',
			image: require('@/assets/logo.png'),
		};
	},
};
</script>

<style scoped></style>
