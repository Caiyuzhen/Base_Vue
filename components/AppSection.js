import AppSectionList from "/components/AppSectionList.js"

export default {
	components: { AppSectionList },
	// 🔥ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/
	`
		<!-- 👛 未购零食
				在子组件内定义  headline 的 prop 属性, 然后就可以在这个【父组件内】传值（使用父组件的数据）了
					⚡️分别访问两组数据:	filtersFn -> afterBuy
		-->
		<app-section-list
			headline="👛 Did not purchase"
			v-bind:BuyChild="filtersFn.beforeBuy"
			>
		</app-section-list>

		
		<!--  💵 已购零食
					🔥 v-show 用数组返回的 length 长度来判断是否该显示
						⚡️分别访问两组数据:	filtersFn -> afterBuy
		 -->
		<app-section-list
			headline="💵 Purchased Snack List"
			v-bind:BuyChild="filtersFn.afterBuy" 
			>
		</app-section-list>
	
	`,

		data(){//在 data 函数内返回一个对象, 可以存放数据
			return {
				title: '👛 Did not purchase',
				title02: '💵 Purchased Snack List',
				foods: [
					{id:1, name: 'bread', image:'./img/bread.png', purchased: false},
					{id:2, name: 'cake', image:'./img/cake.png', purchased: false},
					{id:3, name: 'salad', image:'./img/salad.png', purchased: false},
				]
			}
		},

		// 抽离出两个表达式
		computed: {
			// 👇因为子组件的【一个模板】不能【传两个参数】, 所以把两个方法【整合成一个对象】
			// beforeBuy() { //未购买的表达式
			// 	return this.foods.filter(item => !item.purchased)
			// },
			// afterBuy() { //未购买的表达式
			// 	return this.foods.filter(item => item.purchased)
			// }
			filtersFn(){
				return{
					//未购买的表达式
					beforeBuy: this.foods.filter(item => !item.purchased),
					//已购买的表达式
					afterBuy: this.foods.filter(item => item.purchased)
				}
			}
		}
}