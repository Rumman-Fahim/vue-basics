import Vue from 'vue';
import VueRouter from 'vue-router';
import basics from '../views/basics.vue';
import loops from '../views/loops.vue';
import conditions from '../views/conditions.vue';
import bindAttribute from '../views/bind-attribute.vue';
import bindClass from '../views/bind-class.vue';
import bindData from '../views/bind-data.vue';
import bindStyle from '../views/bind-style.vue';
import form from '../views/form.vue';
import computed from '../views/computed.vue';
import watch from '../views/watch.vue';
import arrays from '../views/arrays.vue';
import objects from '../views/objects.vue';
import componentBasic from '../views/component-basic.vue';
import componentProps from '../views/component-props.vue';
import componentEmit from '../views/component-emit.vue';
import slotBasic from '../views/slot-basic.vue';
import slotNamed from '../views/slot-named.vue';
import slotProps from '../views/slot-props.vue';
import refs from '../views/refs.vue';
import vuetify from '../views/vuetify.vue';
import stores from '../views/stores.vue';
import products from '../views/products.vue';
import cart from '../views/cart.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Basics',
		component: basics,
	},
	{
		path: '/loops',
		name: 'Loops',
		component: loops,
	},
	{
		path: '/conditions',
		name: 'Conditions',
		component: conditions,
	},
	{
		path: '/binding/attribute',
		name: 'Attribute',
		component: bindAttribute,
	},
	{
		path: '/binding/class',
		name: 'Class',
		component: bindClass,
	},
	{
		path: '/binding/data',
		name: 'Data',
		component: bindData,
	},
	{
		path: '/binding/style',
		name: 'Style',
		component: bindStyle,
	},
	{
		path: '/form',
		name: 'Form',
		component: form,
	},
	{
		path: '/computed',
		name: 'Computed',
		component: computed,
	},
	{
		path: '/watch',
		name: 'Watch',
		component: watch,
	},
	{
		path: '/arrays',
		name: 'Arrays',
		component: arrays,
	},
	{
		path: '/objects',
		name: 'Objects',
		component: objects,
	},
	{
		path: '/component/basic',
		name: 'Basic',
		component: componentBasic,
	},
	{
		path: '/component/props',
		name: 'Props',
		component: componentProps,
	},
	{
		path: '/component/emit',
		name: 'Emit',
		component: componentEmit,
	},
	{
		path: '/vuetify',
		name: 'Vuetify',
		component: vuetify,
	},
	{
		path: '/stores',
		name: 'Stores',
		component: stores,
	},
	{
		path: '/products',
		name: 'Products',
		component: products,
	},
	{
		path: '/cart',
		name: 'Cart',
		component: cart,
	},
	{
		path: '/slot/basic',
		name: 'Basic',
		component: slotBasic,
	},
	{
		path: '/slot/named',
		name: 'Named',
		component: slotNamed,
	},
	{
		path: '/slot/props',
		name: 'Props',
		component: slotProps,
	},
	{
		path: '/refs',
		name: 'Refs',
		component: refs,
	},

	// {
	// 	path: '/user/:id',
	// 	component: User,
	// 	children: [
	// 		{ path: '', component: UserHome },
	// 		{
	// 			// UserProfile will be rendered inside User's <router-view>
	// 			// when /user/:id/profile is matched
	// 			path: 'profile',
	// 			component: UserProfile,
	// 		},
	// 		{
	// 			// UserPosts will be rendered inside User's <router-view>
	// 			// when /user/:id/posts is matched
	// 			path: 'posts',
	// 			component: UserPosts,
	// 		},
	// 	],
	// },
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: function () {
	// 		return import('../views/About.vue');
	// 	},
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
