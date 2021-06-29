<template>
  <div id="app">
	<transition name="fade-transform" mode="out-in">
		<router-view :key="key" />
	</transition>
	<footer>
		<van-button to="/index" :type="getBtnType('/index')">
			首页
		</van-button>
		<van-button to="/other" :type="getBtnType('/other')">
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
  },
  methods:{
	getBtnType(path){
		return this.key === path?'info':'default'
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
