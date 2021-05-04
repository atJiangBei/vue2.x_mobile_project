import Vue from 'vue'
import VueRouter from 'vue-router'
import globalLoading from '@/components/global-loading'
Vue.use(VueRouter)


const routes = [
	{
		path:"/",
		redirect:"/index"
	},
	{
		path:"/index",
		meta:{
			title:"首页"
		},
		component:()=>import("@/views/index.vue")
	},
	{
		path:"/other",
		meta:{
			title:"其它"
		},
		component:()=>import("@/views/other.vue")
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to,from,next)=>{
	globalLoading.openLoading()
	next()
})

router.afterEach((to)=>{
	if(to.meta&&to.meta.title){
		document.title = to.meta.title
	}
	setTimeout(()=>{
		globalLoading.closeLoading()
	},300)
})

export default router