export default interface extraBabelPlugins {
    /**
     *配置额外的 babel plugin。babel plugin 只能添加，不允许覆盖和删除。
     * 比如，同时使用 antd, dva 时，通常需要这么配：
        "extraBabelPlugins": [
        "transform-runtime",
        "dva-hmr",
        ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": "css" }]
        ]
        同时安装相关依赖：

        $ npm i babel-plugin-transform-runtime babel-plugin-import babel-plugin-dva-hmr --save-dev
        $ npm i babel-runtime --save
        注意：这么配还有个问题，dva-hmr 是开发环境的插件，如果 build 时也用上就会打出冗余代码。解决方案详见 #env。
     *
     * @type {*}
     * @memberof extraBabelPlugins
     */
    extraBabelPlugins?: any;
}
