import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import About from "./views/about.vue";
import AddNew from "./views/add_new.vue";

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			name: "index",
			component: Index
		},
		{
			path: "/about",
			name: "about",
			component: About
		},
		{
			path: '/add_new',
			name: "add new",
			component: AddNew
		}
	]
});
