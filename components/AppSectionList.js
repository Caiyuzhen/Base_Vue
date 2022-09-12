export default {

	template: /*html*/
	`
		<!-- <section v-show="foods.filter(item => !item.purchased).length"> -->
		<!-- 简化的写法, 抽离出 beforeBuy 表达式 -->
		<!-- 连接到父组件的数据后, 🔥用 {{}} 差值表达式来引用父组件传入的数据！！-->
		<section v-show="buyChild.length">
			<h2> {{headline}} </h2>
			<ul>
				<!-- 🔥需要 v-bind:key="food.id" 才不会同时勾选多个-->
				<!-- v-for="food in foods.filter(item => !item.purchased)"  -->
				<li v-for="food in buyChild" 
					v-bind:key="food.id">
						<img v-bind:src="food.image">
						<input v-model="food.purchased" type="checkbox">
						<span>{{ food.name }}</span>
						<!-- 因为 v-bind 直接可以读取 Vue 里的数据了，所以不用 {{}} 差值表达式-->
						<span>{{food.purchased}}</span>
				</li>
			</ul>
		</section>
	`,

	
	//props 是用于在【子组件】内关联【父组件】数据的方法
	//在【子组件内】接收一个字符类型的 headline 属性, 然后就可以在【父组件】内设置 【headline 的属性】了, 用来定义标题文字！！
	//🔥相当于在子组件的 data 内声明了一个 headline、buyChild 数据！！
	props: {
		headline: String, 
		buyChild: Object
	}
}