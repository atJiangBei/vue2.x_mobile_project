import FineLoading from '@/components/fine-loading.vue'
let count = 0;
export default{
	components:{
		FineLoading
	},
	data(){
		return{
			show:false
		}
	},
	methods:{
		open(){
			this.show = true;
			count++
		},
		close(){
			count--
			if(count<1){
				this.show = false;
			}
		}
	},
	render(){
		return <fine-loading type="global" color="#1989fa" value={this.show}></fine-loading>
	}
}