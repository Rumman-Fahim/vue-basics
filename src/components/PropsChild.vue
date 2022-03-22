<template>
	<div class="child">
		I am child element
		<p>Data From Parent: {{ propsData }}</p>
		<ul>
			<li v-for="(color, index) of propsColors" :key="index">{{ color }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['propsData', 'propsColors'],
};
</script>

<style scoped>
.child {
	padding: 10px;
	background-color: red;
}
</style>
