<template>
	<div class="parent">
		I am parent
		<BasicChild />
	</div>
</template>

<script>
// local
import BasicChild from '../components/BasicChild.vue';

export default {
	components: { BasicChild },
	name: 'Basic',
};
</script>

<style scoped>
.parent {
	padding: 50px;
	background-color: pink;
}
</style>
