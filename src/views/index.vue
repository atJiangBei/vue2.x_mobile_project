<template>
  <div class="index-container">
	<img src="../assets/logo.png"/>
	<h1>首页</h1>
  </div>
</template>

<script>
import { getToken } from '@/api/init.js'
export default {
	data(){
		return{
			show:true
		}
	},
	mounted(){
		getToken({name:"1234"}).then(data=>{
			console.log(data)
		})
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
