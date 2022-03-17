<template>
	<div>
		<h1>Class</h1>
		<!-- :class="{ 'css-class-name': condition }" -->
		<p
			class="bold"
			:class="{
				'red-text': isRedText,
				'green-text': isGreenText,
				'large-text': isTextLarge,
			}"
		>
			Hello World
		</p>

		<p>Condition isGreenText: {{ isGreenText }}</p>
		<p>Condition isTextLarge: {{ isTextLarge }}</p>
		<p>Condition isRedText: {{ isRedText }}</p>

		<button @click="onclickMakeTextLarge">Large Text</button>
		<button @click="onclickMakeTextGreen">Green Text</button>
		<button @click="onclickMakeTextRed">Red Text</button>
	</div>
</template>

<script>
export default {
	name: 'Class',
	data() {
		return {
			isTextLarge: false,
			isGreenText: false,
			isRedText: false,
		};
	},
	methods: {
		onclickMakeTextLarge() {
			this.isTextLarge = !this.isTextLarge;
		},
		onclickMakeTextGreen() {
			this.isGreenText = !this.isGreenText;
		},
		onclickMakeTextRed() {
			this.isRedText = !this.isRedText;
		},
	},
};
</script>

<style scoped>
/* least importance */
.bold {
	font-weight: 600;
}
.large-text {
	font-size: 50px;
}
.green-text {
	color: green;
}
.red-text {
	color: red;
}
/* most importance */
</style>
