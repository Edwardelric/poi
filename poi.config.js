// options options.mode 是当前的运行环境: develop, production, watch, test
// req 是 node-module 里面的依赖包
// babel-preset-poi 是babel转义包
// jsx 默认是 vue， 并可以通过 jsx: react 转换为 react, 目前只支持 react,vue
// import  默认是代码风格模式
// ployfills 默认是不填充的，需要手动填充
// vendor: false 貌似无用
// html 设置为false 就表示不需要生成html页面
// extractCSS 设置为 false 为不用提取公共的css
// env: keyName value 形式设置全局变量,  或者通过 --env.keyName value 形式设置
module.exports = {
	entry: "./src/index.js",
	vendor: false,
	extractCSS: false,
	filename: {
		js: '[name].js',
		css: 'style.css',
		images: 'assets/images/[name].[ext]',
		fonts: 'assets/fonts/[name].[ext]'
	},
	devServer: {
		https: false
	}
}
