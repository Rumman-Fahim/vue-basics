<template>
	<div>
		<input type="text" placeholder="enter name" v-model="name" />
		<p class="error" v-if="isError">Incorrect name format</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
		};
	},
	computed: {
		isError() {
			if (this.name == '') {
				return true;
			} else {
				return false;
			}
		},
	},
	watch: {
		name(newValue, oldValue) {
			this.showLogs(newValue, oldValue);
		},
	},
	methods: {
		showLogs(newValue, oldValue) {
			console.log('this.name newValue', newValue);
			console.log('this.name oldValue', oldValue);
		},
	},
};
</script>

<style scoped>
.error {
	color: red;
}
</style>
