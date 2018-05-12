
export interface userOptionsINF {
    /**
     * 说明: 是否使用模块
     * 
     * @type {boolean}
     * @memberof userOptionsINF
     */
    models?:boolean
}

export interface useINF {
    /**
     * 说明 : 加载器
     * 
     * @type {string}
     * @memberof useINF
     */
    loader:string,
    /**
     * 说明:优化设置
     * -----------
     * options: {modules: true}
     * @type {userOptionsINF}
     * @memberof useINF
     */
    options?:userOptionsINF
}

export interface rulesINF {
    /**
     * 说明:这里输入你要判断的正则
     * ----------------------
     * test: /\.css$/
     * @type {string}
     * @memberof rulesINF
     */
    test?:string,
    /**
     * 说明: 这里输入你要载入的loader
     * --------------------------
     * use: 'css-loader'
     * @type {string}
     * @memberof rulesINF
     */
    use?:string,
    /**
     * 说明:
     * -----
     * 可能的值有："pre" | "post"
     * 指定 loader 种类。没有值表示是普通 loader。
     * 还有一个额外的种类"行内 loader"，loader 被应用在 import/require 行内。
     * 所有 loader 通过 前置, 行内, 普通, 后置 排序，并按此顺序使用。
     * 所有普通 loader 可以通过在请求中加上 ! 前缀来忽略（覆盖）。
     * 所有普通和前置 loader 可以通过在请求中加上 -! 前缀来忽略（覆盖）。
     * 所有普通，后置和前置 loader 可以通过在请求中加上 !! 前缀来忽略（覆盖）。
     * 不应该使用行内 loader 和 ! 前缀，因为它们是非标准的。它们可在由 loader 生成的代码中使用
     * 
     * @memberof rulesINF
     */
    enforce?:any,
    /**
     * 说明:
     * -----
     * Rule.exclude 是 Rule.resource.exclude 的简写。
     * 如果你提供了 Rule.exclude 选项，就不能再提供 Rule.resource。
     * 详细请查看 Rule.resource 和 Condition.exclude。
     * 
     * @memberof rulesINF
     */
    exclude?:any,
    /**
     * 说明:
     * -----
     * Rule.include 是 Rule.resource.include 的简写。
     * 如果你提供了 Rule.include 选项，就不能再提供 Rule.resource。
     * 详细请查看 Rule.resource 和 Condition.include。
     * 
     * @memberof rulesINF
     */
    include?:any,
    /**
     * 说明:
     * 一个条件，用来与被发布的 request 对应的模块项匹配。
     * 在以下示例中，a.js request 的发布者(issuer)是 index.js 文件的路径。
     * 这个选项可以用来将 loader 应用到一个特定模块或一组模块的依赖中。
     * @memberof rulesINF
     */
    issuer?:any,
    /**
     * 说明:
     * -----
     * Rule.loader 是 Rule.use: [ { loader } ] 的简写。
     * 详细请查看 Rule.use 和 UseEntry.loader。
     * 
     * @memberof rulesINF
     */
    loader?:any,
    /**
     * 说明:
     * ----
     * 规则数组，当规则匹配时，只使用第一个匹配规则。
     * 
     * @memberof rulesINF
     */
    oneOf?:any,
    /**
     * 说明:
     * ----
     * Rule.options 和 Rule.query 是 Rule.use: [ { options } ] 的简写。
     * 详细请查看 Rule.use 和 UseEntry.options。
     * 
     * @memberof rulesINF
     */
    options?:any,
    /**
     * 说明:
     * -----
     * 解析选项对象。所有应用的解析选项都将合并。
     * 解析器(parser)可以查阅这些选项，并相应地禁用或重新配置。大多数默认插件，会如下解释值：
     * 将选项设置为 false，将禁用解析器。
     * 将选项设置为 true，或不修改将其保留为 undefined，可以启用解析器。
     * 然而，一些解析器(parser)插件可能不光只接收一个布尔值。
     * 例如，内部的 NodeStuffPlugin 差距，可以接收一个对象，而不是 true，来为特定的规则添加额外的选项。
     * 
     * @memberof rulesINF
     */
    parser?:any,
    /**
     * 说明:
     * -----
     * 条件会匹配 resource。既可以提供 Rule.resource 选项，
     * 也可以使用快捷选项 Rule.test，Rule.exclude 和 Rule.include。在 Rule 条件 中查看详细。
     * 
     * @memberof rulesINF
     */
    resource?:any,
    /**
     * 说明:
     * ----
     * A Condition matched with the resource query. 
     * This option is used to test against 
     * the  query section of a request string (i.e. from the question mark onwards). 
     * If you were to import Foo from './foo.css?inline', 
     * the following condition would match:
     * 
     * @memberof rulesINF
     */
    resourceQuery?:any,
    /**
     * 说明:
     * -----
     * 规则数组，当规则匹配时使用。
     * 
     * @memberof rulesINF
     */
    rules?:any,
    /**
     * 说明:
     * -----
     * 
     * 
     * @memberof rulesINF
     */
    UseEntry?:any
}

export interface moduleINF {
    /**
     * 说明: 规则设置
     * 
     * @type {Array<rulesINF>}
     * @memberof moduleINF
     */
    rules: Array<rulesINF>,
    /**
     * 说明:
     * ----
     * 防止 webpack 解析那些任何与给定正则表达式相匹配的文件。
     * 忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制。
     * 忽略大型的 library 可以提高构建性能。
     * 
     * @memberof moduleINF
     */
    noParse?:any,
}

export default interface loader {
    /**
     * 说明: 配置模块 如loader
     * 
     * @type {moduleINF}
     * @memberof loader
     */
    module?: moduleINF
}