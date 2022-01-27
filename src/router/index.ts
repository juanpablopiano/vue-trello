import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/pages/Index.vue'),
	},
];

export default createRouter({
	history: createWebHashHistory(),
	routes,
});
