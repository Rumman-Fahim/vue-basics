<template>
	<div>
		<h1>Loops</h1>
		<!-- <ul v-for="item of array"></ul>
			key must be unqique for all items 
		-->
		<ul>
			<li v-for="color of colors" :key="color">{{ color }}</li>

			<br />

			<li v-for="(color, index) of duplicateColors" :key="index">
				{{ color }} - {{ index }}
			</li>

			<br />

			<li v-for="color of objColors" :key="color.id">
				{{ color.text }} - key = {{ color.id }}
			</li>

			<br />

			<li v-for="number in 5" :key="number">{{ number }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Loops',
	data() {
		return {
			colors: ['red', 'blue', 'green'],
			duplicateColors: ['red', 'red', 'blue', 'green'],
			objColors: [
				{
					id: 934,
					text: 'red',
				},
				{
					id: 72445,
					text: 'red',
				},
				{
					id: 4245,
					text: 'blue',
				},
			],
		};
	},
};
</script>

<style scoped></style>
