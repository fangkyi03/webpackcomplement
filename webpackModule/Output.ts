export interface outputINF {
    /**
     * 输出文件名
     * 
     * @type {string}
     * @memberof outputINF
     */
    filename?: string,
    /**
     * 输出路径
     * 
     * @type {string}
     * @memberof outputINF
     */
    path?: string,
    /**
     * 说明:
     * ----
     * output.library 的值的作用，
     * 取决于output.libraryTarget 选项的值
     * 
     * 
     * 如果生成的输出文件，
     * 是在 HTML 页面中作为一个 script 标签引入，
     * 则变量 MyLibrary 将与入口文件的返回值绑定。
     * 
     * @type {(string | object)}
     * @memberof outputINF
     */
    library?:string | object,
    /**
     * 说明:
     * 配置如何暴露 library
     * 
     * @type {string}
     * @memberof outputINF
     */
    libraryTarget?:string,
    /**
     * 说明:
     * -----
     * 在和 output.library 和 output.libraryTarget 
     * 一起使用时，此选项允许用户向导出容器(export wrapper)中插入注释
     * 
     * @type {(string | object)}
     * @memberof outputINF
     */
    auxiliaryComment?:string | object,
    /**
     * 说明:
     * ----
     * 
     * 此选项决定了非入口(non-entry) chunk 文件的名称。
     * 有关可取的值的详细信息，请查看 output.filename 选项。
     * @type {(string | Function)}
     * @memberof outputINF
     */
    chunkFilename?:string | Function,
    /**
     * 说明:
     * ---
     * chunk 请求到期之前的毫秒数，默认为 120 000。从 webpack 2.6.0 开始支持此选项。
     *
     * @type {number}
     * @memberof outputINF
     */
    chunkLoadTimeout?:number,
    /**
     * 说明:
     * ----
     * 只用于 target 是 web，使用了通过 script 标签的 JSONP 来按需加载 chunk。
     *   启用 cross-origin 属性 加载 chunk。以下是可接收的值……
     *   crossOriginLoading: false - 禁用跨域加载（默认）
     *   crossOriginLoading: "anonymous" - 不带凭据(credential)启用跨域加载
     *   crossOriginLoading: "use-credentials" - 带凭据(credential)启用跨域加载 with credentials
     * @type {(boolean | string)}
     * @memberof outputINF
     */
    crossOriginLoading?:boolean | string,
    /**
     * 说明:
     * ----
     *  允许自定义 script 的类型，webpack 会将 script 标签注入到 DOM 中以下载异步 chunk。可以使用以下选项：
     *  "text/javascript"（默认）
     *  "module"：与 ES6 就绪代码一起使用。
     * @type {string}
     * @memberof outputINF
     */
    jsonpScriptType?:string,
    /**
     * 说明:
     * ----
     * 当上面的模板字符串或函数产生重复时使用的备用内容。
     * 
     * @memberof outputINF
     */
    devtoolFallbackModuleFilenameTemplate?: string | Function,
    /**
     * 说明:
     * ----
     *   避免使用此选项，因为它们已废弃，并将很快删除。 it is deprecated and will soon be removed.
     *   对所有或某些模块启用「行到行映射(line to line mapping)」。这将生成基本的源映射(source map)，即生成资源(generated source)的每一行，映射到原始资源(original source)的同一行。这是一个性能优化点，并且应该只需要输入行(input line)和生成行(generated line)相匹配时才使用。
     *   传入 boolean 值，对所有模块启用或禁用此功能（默认 false）。对象可有 test, include, exclude 三种属性。例如，对某个特定目录中所有 javascript 文件启用此功能：
     * 
     * @memberof outputINF
     */
    devtoolLineToLine?: boolean | object,
    /**
     * 说明:
     * ----
     * 此选项仅在 「devtool 使用了需要模块名称的选项」时使用。
     * 自定义每个 source map 的 sources 数组中使用的名称。可以通过传递模板字符串(template string)或者函数来完成。例如，当使用 devtool: 'eval'，默认值是：
     * 
     * @memberof outputINF
     */
    devtoolModuleFilenameTemplate?: string | Function,
    /**
     * 说明:
     * ----
     * 此选项确定 output.devtoolModuleFilenameTemplate 使用的模块名称空间。未指定时的默认值为：output.library。在加载多个通过 webpack 构建的 library 时，用于防止 sourcemap 中源文件路径冲突。
     *  例如，如果你有两个 library，分别使用命名空间 library1 和 library2，并且都有一个文件 ./src/index.js（可能具有不同内容），它们会将这些文件暴露为 webpack://library1/./src/index.js 和 webpack://library2/./src/index.js。
     * 
     * @memberof outputINF
     */
    devtoolNamespace?:string,
    /**
     * 说明:
     * ----
     * 在生成 hash 时使用的编码方式，默认为 'hex'。支持 Node.js hash.digest 的所有编码。
     * 
     * @type {*}
     * @memberof outputINF
     */
    hashDigest?:any,
    /**
     * 说明:
     * ----
     * 散列摘要的前缀长度，默认为 20。
     * 
     * @type {number}
     * @memberof outputINF
     */
    hashDigestLength?:number,
    /**
     * 说明:
     * ----
     * 散列算法，默认为 'md5'。
     * 支持 Node.JS crypto.createHash 的所有功能。
     * 从 4.0.0-alpha2 开始，hashFunction 现在可以是一个返回自定义 hash 的构造函数。
     * 出于性能原因，你可以提供一个不加密的哈希函数(non-crypto hash function)。
     * 
     * @memberof outputINF
     */
    hashFunction?:string | Function,
    /**
     * 说明：
     * ----
     * 一个可选的加盐值，通过 Node.JS hash.update 来更新哈希。
     * 
     * @memberof outputINF
     */
    hashSalt?:any,
    /**
     * 说明:
     * ----
     * 自定义热更新 chunk 的文件名。可选的值的详细信息，请查看 output.filename 选项。
     *  占位符只能是 [id] 和 [hash]，默认值是：
     * 
     * @memberof outputINF
     */
    hotUpdateChunkFilename?:string | Function,
    /**
     * 说明:
     * -----
     * 只在 target 是 web 时使用，用于加载热更新(hot update)的 JSONP 函数。
     *   JSONP 函数用于异步加载(async load)热更新(hot-update) chunk。
     *  详细请查看 output.jsonpFunction。
     * 
     * @memberof outputINF
     */
    hotUpdateFunction?:Function,
    /**
     * 说明:
     * ----
     * 自定义热更新的主文件名(main filename)。可选的值的详细信息，请查看 output.filename 选项
     * 占位符只能是 [hash]，默认值是：
     * 
     * @memberof outputINF
     */
    hotUpdateMainFilename?:string | Function,
    /**
     * 说明:
     * -----
     * 只在 target 是 web 时使用，用于按需加载(load on-demand) chunk 的 JSONP 函数。
     * JSONP 函数用于异步加载(async load) chunk，或者拼接多个初始 chunk(CommonsChunkPlugin, AggressiveSplittingPlugin)。
     * 如果在同一网页中使用了多个（来自不同编译过程(compilation)的）webpack runtime，则需要修改此选项。
     * 如果使用了 output.library 选项，library 名称时自动追加的。
     * 
     * @type {string}
     * @memberof outputINF
     */
    jsonpFunction?:string,
    /**
     * 说明:
     * -----
     * Configure which module or modules will be exposed via the libraryTarget. The default _entry_return_ value is the namespace or default module returned by your entry file. The examples below demonstrate the effect of this config when using libraryTarget: "var", but any target may be used.
     * The following configurations are supported:
     * libraryExport: "default" - The default export of your entry point will be assigned to the library target:
     * 
     * @memberof outputINF
     */
    libraryExport?: string | Array<string>,
    /**
     * 说明:
     * -----
     * 告诉 webpack 在 bundle 中引入「所包含模块信息」的相关注释。此选项默认值是 false，并且不应该用于生产环境(production)，但是对阅读开发环境(development)中的生成代码(generated code)极其有用。
     * 
     * @memberof outputINF
     */
    pathinfo?:string,
    /**
     * 说明:
     * -----
     * 
     * 对于按需加载(on-demand-load)或加载外部资源(external resources)（如图片、文件等）来说，output.publicPath 是很重要的选项。如果指定了一个错误的值，则在加载这些资源时会收到 404 错误。
     * 此选项指定在浏览器中所引用的「此输出目录对应的公开 URL」。相对 URL(relative URL) 会被相对于 HTML 页面（或 <base> 标签）解析。相对于服务的 URL(Server-relative URL)，相对于协议的 URL(protocol-relative URL) 或绝对 URL(absolute URL) 也可是可能用到的，或者有时必须用到，例如：当将资源托管到 CDN 时。
     * 该选项的值是以 runtime(运行时) 或 loader(载入时) 所创建的每个 URL 为前缀。因此，在多数情况下，此选项的值都会以/结束。
     * 默认值是一个空字符串 ""。
     * 简单规则如下：output.path 中的 URL 以 HTML 页面为基准。
     * @type {string}
     * @memberof outputINF
     */
    publicPath?:string | Function,
    /**
     * 说明:
     * -----
     * 此选项会向硬盘写入一个输出文件，只在 devtool 启用了 SourceMap 选项时才使用。
     * 配置 source map 的命名方式。默认使用 "[file].map"。
     * 可以使用 #output-filename 中的 [name], [id], [hash] 和 [chunkhash] 替换符号。除此之外，还可以使用以下替换符号。[file] 占位符会被替换为原始文件的文件名。我们建议只使用 [file] 占位符，因为其他占位符在非 chunk 文件(non-chunk files)生成的 SourceMap 时不起作用。
     * 
     * @memberof outputINF
     */
    sourceMapFilename?:string,
    /**
     * 说明:
     * ----
     * 修改输出 bundle 中每行的前缀。
     * 
     * @memberof outputINF
     */
    sourcePrefix?:string,
    /**
     * 说明:
     * ----
     * 如果一个模块是在 require 时抛出异常，告诉 webpack 从模块实例缓存(require.cache)中删除这个模块。
     * 如果一个模块是在 require 时抛出异常，告诉 webpack 从模块实例缓存(require.cache)中删除这个模块。
     * 出于性能原因，默认为 false。
     * 当设置为 false 时，该模块不会从缓存中删除，这将造成仅在第一次 require 调用时抛出异常（会导致与 node.js 不兼容）。
     * 
     * @memberof outputINF
     */
    strictModuleExceptionHandling?:boolean,
    /**
     * 说明:
     * -----
     * 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
     * 
     * @memberof outputINF
     */
    umdNamedDefine?:boolean


}

export default interface Output {
    /**
     * 说明:输出文件配置
     * 
     * @type {outputINF}
     * @memberof webpackParam
     */
     output?: outputINF,
}