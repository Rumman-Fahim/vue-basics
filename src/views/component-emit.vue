<template>
	<div class="parent">
		I am parent
		<h1>{{ text }}</h1>
		<!-- @customEventName="variable = $event"  -->
		<!-- the value emitted from child is found in $event -->
		<EmitChild @dataFromChild="text = $event" />
	</div>
</template>

<script>
// local
import EmitChild from '../components/EmitChild.vue';

export default {
	components: { EmitChild },
	name: 'Props',
	data() {
		return {
			text: '',
		};
	},
	methods: {},
};
</script>

<style scoped>
.parent {
	padding: 50px;
	background-color: pink;
}
</style>
