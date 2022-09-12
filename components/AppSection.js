import AppSectionList from "/components/AppSectionList.js"
import AppForm from "/components/AppForm.js"

export default {

	// 👇注册组件
	components: { AppSectionList, AppForm },



	// 🔥组件渲染模板, 使用 ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/`
		<!-- 👇父组件传递数据给子组件步骤：
				1. 在父组件中定义数据(或者是父组件上用【表达式】去获取 data() 中的数据)
				2.在【子组件】内定义 【buyChild】 这个 【prop】 属性，并且设置 byChild 属性的【数据类型】
				3.在【父组件内】绑定 【buyChild】 这个 【prop 属性】，并且传入 【beforeBuy 、 afterBuy】两个【表达式】
				4.在子组件内使用【buyChild】 这个 【prop 属性】
		-->
		

		<!-- 🧾提交表单: v-on: -> @  绑定事件, 监听【子组件】的事件，⚡️⚡️如果发生了 add 事件就调用【父组件】的【TopAdd】事件-->
		<app-form @add="topAdd"  v-bind:foodData="filtersFn.foodList"> </app-form>

		<!-- 👛 未购零食: 🔥 在子组件内定义  headline 的 prop 属性, 然后就可以在这个【父组件内】传值（使用父组件的数据）了, 然后⚡️分别访问两组数据:	filtersFn -> afterBuy -->
		<app-section-list headline="👛 Did not purchased"  v-bind:buyChild="filtersFn.beforeBuy"> </app-section-list>
		
		<!--  💵 已购零食: 🔥 用 v-show 判断数组返回的 length 长度来判断是否该显示, 然后⚡️分别访问两组数据:	filtersFn -> afterBuy-->
		<app-section-list headline="💵 Purchased Snack List"  v-bind:buyChild="filtersFn.afterBuy" > </app-section-list>
	`,
	



	// 🔥组件身上的数据
	data(){//在 data 函数内返回一个对象, 可以存放数据
		return {
			foods: [
				{id:1, name: 'bread', image:'./img/bread.png', purchased: false},
				{id:2, name: 'cake', image:'./img/cake.png', purchased: false},
				{id:3, name: 'salad', image:'./img/salad.png', purchased: false},
			]
			// newFood: ''  //🔥用来存放输入框的临时数据
		}
	},




	// 🔥抽离出两个表达式
	computed: {
		// 👇因为子组件的【一个模板】不能【传两个参数】, 所以把两个方法【整合成一个对象】
		filtersFn(){
			return {
				//未购买的表达式
				beforeBuy: this.foods.filter(item => !item.purchased),
				//已购买的表达式
				afterBuy: this.foods.filter(item => item.purchased),

				foodList: this.foods
			}
		}
		/*  beforeBuy() { //未购买的表达式
		 		return this.foods.filter(item => !item.purchased)
		 	},
			afterBuy() { //未购买的表达式
		 		return this.foods.filter(item => item.purchased)
			}*/
	},




	// 🔥组件身上的方法
	methods: {
		topAdd(someFood) {//🍎父组件改变数据的方法
			this.foods.push({
				id: this.foods.length + 1,
				name: someFood,
				image: '/img/bread.png',
				purchased: false,
			})
			// this.newFood = ''
		}
	}

}