import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = require('../pages/Home.vue').default
const About = require('../pages/About.vue').default
import NotFound from '../pages/NotFound.vue'
import User from '../pages/User.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import EditUser from '../pages/EditUser.vue'
import UploadPhoto from '../pages/UploadPhoto.vue'

const routes = [
	{
		name: 'Home',
		path: '/home',
		component: Home
	},
	{
		name: 'About',
		path: '/contact',
		component: About
	},
	{
		name: 'User',
		path: '/user',
		component: User
	},
	{
		name: 'Register',
		path: '/user/create',
		component: Register
	},
	{
		name: 'Profile',
		path: '/user/:id',
		component: Profile,
		props: true
	},
	{
		name: 'Upload',
		path: '/user/:id/photo',
		component: UploadPhoto,
		props: true
	},
	{
		name: 'Edit',
		path: '/user/:id/edit',
		component: EditUser,
		props: true
	},
	{
		path: '*',
		component: NotFound
	}
]

const router = new VueRouter({
	linkActiveClass: 'active',
	mode: 'history',
	routes
})

export default router