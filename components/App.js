import AppSection from '/components/AppSection.js'


export default {
	components: { AppSection },//🔥注册所引入的组件
	/*🔥因为 html 是区分不了大小写, 所以引入组件的时候改为用 - 连接符也可以被 Vue 识别(比如 AppSection -> app-section)*/
	// 🔥ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/
		`
			<app-section></app-section>
		`
}




/* ⚡️Vue 常见 api 
		data(){}		//组件身上的数据
		computed(){}	//计算属性: 抽离表达式
		methods(){}		//组件身上的方法
		components:{}	//注册组件(用于引入子组件)
		props:{}		//用于在【子组件】内关联【父组件】数据的方法
		template:		//组件的模板(渲染 html 用)
		v-bind:			//绑定属性
		v-model:		//双向绑定数据(比如获取 input 的值)
		v-on:			//绑定事件
		v-for:			//循环获取数据
		v-show:			//控制元素的显示与隐藏
		v-if:			//用来判断条件
		$emit('fnName', data)	//🔥向全局暴露一个 add 事件, 以及 newFood 这个数据, 用来添加数据


	⚡️Vue 常见 api 的缩写
		v-bind: -> :	 //绑定属性
		v-on: -> @       //绑定事件

*/