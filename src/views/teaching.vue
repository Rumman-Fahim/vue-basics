<template>
	<div>
		<v-text-field v-model="input"></v-text-field>
		<ul>
			<li v-for="(item, i) of search" :key="i">
				{{ item.name }}
			</li>
		</ul>
		<br />
		<br />
		<br />

		<h2>Items</h2>
		<ul>
			<li v-for="(item, i) of items" :key="i">
				{{ item.name }}
				<v-btn @click="onclickAddItemToCart(item)">Add To Cart</v-btn>
			</li>
		</ul>

		<br />
		<br />
		<br />

		<h2>Cart</h2>
		<ul>
			<li v-for="(item, i) of cart" :key="i">
				{{ item.name }} - {{ item.price }}
			</li>
		</ul>

		<br />
		<br />
		<br />

		<!-- <h2>Total: {{ getTotal() }}</h2> -->
		<h2>Total: {{ total }}</h2>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: 'apples',
					price: 10,
				},
				{
					name: 'bananas',
					price: 5,
				},
				{
					name: 'oranges',
					price: 15,
				},
				{
					name: 'kiwis',
					price: 20,
				},
			],
			cart: [],
			input: '',
		};
	},
	computed: {
		search() {
			let filter = new RegExp(this.input, 'i');
			return this.items.filter((item) => item.name.match(filter));
		},
		total() {
			console.log('getting total');
			let total = 0;
			this.cart.forEach((item) => {
				total = total + item.price;
			});

			return total;
		},
	},
	methods: {
		onclickAddItemToCart(item) {
			this.cart.push(item);
		},
		getTotal() {
			console.log('getting total');
			let total = 0;
			this.cart.forEach((item) => {
				total = total + item.price;
			});

			return total;
		},
	},
};
</script>

<style scoped></style>
