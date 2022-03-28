<template>
	<div>
		<v-btn @click="decreaseCount">Decrease</v-btn>
		<h1>{{ getCount }}</h1>
		<v-btn @click="increaseCount">Increase</v-btn>
		<v-btn @click="resetCount(100)">Reset</v-btn>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	computed: {
		...mapGetters(['getCount']),
	},
	methods: {
		...mapMutations(['increaseCount', 'decreaseCount', 'resetCount']),
	},
};
</script>

<style scoped></style>
