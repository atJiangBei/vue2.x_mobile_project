<template>
  <div class="index-container">
	<img src="../assets/logo.png"/>
	<h1>首页</h1>
  </div>
</template>

<script>
//import globalLoading from '@/components/global-loading'
export default {
	data(){
		return{
			show:true
		}
	},
	mounted(){
		/* fetch("/dev-api/vue-admin-template/table/list").then(response=>{
			return response.json();
		}).then(data=>{
			console.log(data)
		}) */
		/* globalLoading.openLoading();
		setTimeout(()=>{
			globalLoading.openLoading();
		},1000)
		setTimeout(()=>{
			globalLoading.closeLoading();
		},2000)
		setTimeout(()=>{
			globalLoading.closeLoading();
		},5000) */
	}
}
</script>

<style lang="less">
.index-container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1{
		color: #1989fa;
		letter-spacing: 10px;
	}
}
</style>
