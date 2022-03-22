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
				{
					path: '/form',
					name: 'Form',
				},
				{
					path: '/computed',
					name: 'Computed',
				},
				{
					path: '/watch',
					name: 'Watch',
				},
				{
					path: '/arrays',
					name: 'Arrays',
				},
				{
					path: '/objects',
					name: 'Objects',
				},
				{
					path: '/component/basic',
					name: 'Basic',
				},
				{
					path: '/component/props',
					name: 'Props',
				},
				{
					path: '/component/emit',
					name: 'Emit',
				},
				{
					path: '/slot/basic',
					name: 'Basic',
				},
				{
					path: '/slot/named',
					name: 'Named',
				},
				{
					path: '/slot/props',
					name: 'Props',
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
	color: red;
	background-color: black;
}
</style>
