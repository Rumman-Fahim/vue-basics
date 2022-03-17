<template>
	<nav>
		<router-link v-for="(link, i) of links" :key="i" :to="link.path">
			{{ link.name }}
		</router-link>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					path: '/',
					name: 'Basics (Data & Methods)',
				},
				{
					path: '/loops',
					name: 'Loops',
				},
				{
					path: '/conditions',
					name: 'Conditions',
				},
				{
					path: '/binding/attribute',
					name: 'Binding Attribute',
				},
				{
					path: '/binding/class',
					name: 'Binding Class',
				},
				{
					path: '/binding/data',
					name: 'Binding Data',
				},
				{
					path: '/binding/style',
					name: 'Binding Style',
				},
			],
		};
	},
};
</script>

<style scoped>
nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
	border-radius: 5px;
	padding: 10px;
}

nav a.router-link-exact-active {
	color: #42b983;
	background-color: black;
}
</style>
