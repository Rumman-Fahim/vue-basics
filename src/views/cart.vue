<template>
	<div>
		<article v-for="item of getCart" :key="item.id">
			<h2 class="text-h2">{{ item.name }}</h2>
			<p class="text-caption">$ {{ item.price }}</p>
			<v-btn
				@click="
					removeFromCart({
						id: item.id,
					})
				"
			>
				Remove From Cart
			</v-btn>
		</article>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	computed: {
		...mapGetters(['getCart']),
	},
	methods: {
		...mapMutations(['removeFromCart']),
	},
};
</script>

<style scoped>
article {
	background-color: pink;
	padding: 50px;
	margin: 10px;
}
</style>
