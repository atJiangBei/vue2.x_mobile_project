import { mount } from '@/util/vue.common.js'

import FineGlobalLoading from './fine-global-loading.js'

const loading = mount(FineGlobalLoading);
export default{
	openLoading(){
		loading.open()
	},
	closeLoading(){
		loading.close()
	}
}