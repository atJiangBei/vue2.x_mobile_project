import axios from 'axios'
import globalLoading from '@/components/global-loading'
//const CancelToken = axios.CancelToken;


const instance = axios.create({
		baseURL: process.env.VUE_APP_BASE_API,
		timeout: 3000,
		//responseType: 'json', // default
	})


// 添加请求拦截器
instance.interceptors.request.use(function(config) {

	globalLoading.openLoading()
	// 在发送请求之前做些什么
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
	globalLoading.closeLoading()
	return response;
}, function(error) {
	globalLoading.closeLoading()
	return Promise.reject(error);
})





export default instance
