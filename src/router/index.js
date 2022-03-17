import Vue from 'vue';
import VueRouter from 'vue-router';
import basics from '../views/basics.vue';
import loops from '../views/loops.vue';
import conditions from '../views/conditions.vue';
import bindAttribute from '../views/bind-attribute.vue';
import bindClass from '../views/bind-class.vue';
import bindData from '../views/bind-data.vue';
import bindStyle from '../views/bind-style.vue';

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