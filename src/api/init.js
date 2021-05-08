import request from '@/util/request.js'


export function getToken(data={}){
	return request({
		url: "/api/getToken",
		method:"POST",
		data,
	})
}
