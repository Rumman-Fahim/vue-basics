<template>
	<div class="child">
		<p>I am child element</p>
		<button @click="emitDataToParent">Send Data to Parent</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			childData: 'I am child data value',
		};
	},
	methods: {
		emitDataToParent() {
			// this.$emit('customEventName', value)
			this.$emit('dataFromChild', this.childData);
		},
	},
};
</script>

<style scoped>
.child {
	padding: 10px;
	background-color: red;
}
</style>
