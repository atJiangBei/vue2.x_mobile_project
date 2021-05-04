<template>
  <div id="app">
	<transition name="fade-transform" mode="out-in">
		<router-view :key="key" />
	</transition>
	<footer>
		<van-button type="info" to="/index">
			首页
		</van-button>
		<van-button to="/other">
			其它
		</van-button>
	</footer>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'App',
  components:{
	[Button.name]:Button
  },
  computed:{
	key(){
		return this.$route.path
	}
  }
}
</script>

<style>
footer{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 10px;
	display: flex;
	justify-content: center;
}
</style>
