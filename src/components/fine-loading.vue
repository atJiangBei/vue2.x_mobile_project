
<script>
import { Loading } from 'vant'
export default{
	components:{
		[Loading.name]:Loading
	},
	props:{
		value:{
			type:Boolean,
			default:false
		},
		type:{
			type:String,
			default:'local',
			validator(val){
				return ['local','global'].includes(val)
			}
		},
		color:{
			type:String,
			default:"#c9c9c9"
		}
	},
	computed:{
		fineLoadingBoxClassNames(){
			return{
				'fine-loading-box-local':this.type === 'local',
				'fine-loading-box-global':this.type === 'global'
			}
		}
	},
	render(){
		const { value,type,color } = this;
		const renderDom = ()=>{
			if(type === 'local'){
				return (
					<div class="fine-loading-container">
						{this.$slots.default}
						<transition mode="out-in">
							{
								value && 
								(<div class="fine-loading-box fine-loading-box-local">
									<van-loading color={color}></van-loading>
								</div>)
							}
						</transition>
					</div>
				)
			}
			if(type === 'global'){
				return (
					<transition name="fade" mode="out-in">
						{
							value &&
							<div class="fine-loading-container">
								<div class="fine-loading-box fine-loading-box-global">
									<van-loading color={color}></van-loading>
								</div>
							</div>
						}
					</transition>
				)
			}
		}
		return renderDom()
		
	}
}
</script>

<style lang="less">
.fine-loading-container{
	position: relative;
	z-index: 1000;
	.fine-loading-box{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(255,255,255,0.5);
	}
	.fine-loading-box-local{
		position: absolute;
	}
	.fine-loading-box-global{
		position: fixed;
	}
}
</style>
