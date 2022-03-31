<template>
	<div>
		<section class="grid">
			<article v-for="item of items" :key="item.id">
				<h2 class="text-h2">{{ item.name }}</h2>
				<p class="text-caption">$ {{ item.price }}</p>
				<v-btn
					@click="
						addToCart({
							item: item,
						})
					"
				>
					Add To Cart
				</v-btn>
			</article>
		</section>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			items: [
				{
					id: 123,
					name: 'Apples',
					price: 134,
				},
				{
					id: 243,
					name: 'Banana',
					price: 50,
				},
				{
					id: 8979,
					name: 'Mango',
					price: 200,
				},
				{
					id: 43244,
					name: 'Strawberry',
					price: 130,
				},
			],
		};
	},
	methods: {
		...mapMutations(['addToCart']),
	},
};
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 40px;
}

.grid article {
	background-color: pink;
	padding: 50px;
}
</style>
