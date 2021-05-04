import Vue from 'vue'
export function mount(Component) {
	const FineGlobalLoading = Vue.extend(Component);
	const instance = new FineGlobalLoading().$mount(document.createElement('div'))
	document.body.appendChild(instance.$el)
	return instance
}
