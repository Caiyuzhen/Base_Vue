import AppSection from '/components/AppSection.js'


export default {
	components: { AppSection },//🔥注册所引入的组件
	/*🔥因为 html 是区分不了大小写, 所以引入组件的时候改为用 - 连接符也可以被 Vue 识别(比如 AppSection -> app-section)*/
	// 🔥ES6-html 插件, 可以更好的显示 html 代码
	template: /*html*/
		`
			<AppSection></AppSection>
		`
}