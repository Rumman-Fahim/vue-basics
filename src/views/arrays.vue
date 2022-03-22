<template>
	<div>
		{{ colors }}
		<br />
		<br />
		<input type="text" v-model="newColor" />
		<button @click="addToArray">Add New Color in end</button>
		<button @click="addElementToBeginingOfArray">
			Add New Color in begining
		</button>
		<button @click="addElementToInMiddleOfArray">
			Add New Color in middle
		</button>

		<br />
		<br />

		<button @click="removeFromArray">Remove Last Color</button>

		<br />
		<br />

		<button @click="removeFirstElementFromArray">Remove First Color</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colors: ['red', 'green', 'blue'],
			newColor: '',
		};
	},
	methods: {
		addToArray() {
			this.colors.push(this.newColor);
		},
		addElementToBeginingOfArray() {
			this.colors.unshift(this.newColor);
		},
		addElementToInMiddleOfArray() {
			this.colors.splice(0, 1, this.newColor);
		},
		removeFromArray() {
			this.colors.pop();
		},
		removeFirstElementFromArray() {
			this.colors.shift();
		},
	},
};
</script>

<style scoped></style>
