export interface resolveINF {
    /**
     * 说明:
     * -----
     * 创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：
     *
     * @type null
     * @memberof resolveINF
     */
    alias?: object;
    /**
     * 说明:
     * ----
     * 指定一个字段，例如 browser，根据此规范进行解析。默认：
     *
     * @memberof resolveINF
     */
    aliasFields?: any;
    /**
     * 说明:
     * ----
     * 如果启用了不安全缓存，请在缓存键(cache key)中引入 request.context。
     * 这个选项被 enhanced-resolve 模块考虑在内。
     * 从 webpack 3.1.0 开始，在配置了 resolve 或 resolveLoader 插件时，解析缓存(resolve caching)中的上下文(context)会被忽略。
     * 这解决了性能衰退的问题。
     * @memberof resolveINF
     */
    cacheWithContext?: boolean;
    /**
     * 说明:
     * ----
     * 用于描述的 JSON 文件。默认：
     *
     * @memberof resolveINF
     */
    descriptionFiles?: Array<any>;
    /**
     * 说明:
     * ----
     * 如果是 true，将不允许无扩展名(extension-less)文件。
     * 默认如果 ./foo 有 .js 扩展，require('./foo') 可以正常运行。
     * 但如果启用此选项，只有 require('./foo.js') 能够正常工作。默认：
     *
     * @memberof resolveINF
     */
    enforceExtension?: boolean;
    /**
     * 说明:
     * -----
     * 对模块是否需要使用的扩展（例如 loader）
     * @memberof resolveINF
     */
    enforceModuleExtension?: boolean;
    /**
     * 说明:
     * ----
     * 自动解析确定的扩展。默认值为：
     * @memberof resolveINF
     */
    extensions?: Array<any>;
    /**
     * 说明:
     * ----
     * 当从 npm 包中导入模块时（例如，import * as D3 from "d3"），此选项将决定在 package.json 中使用哪个字段导入模块。根据 webpack 配置中指定的 target 不同，默认值也会有所不同。
     *
     * @type null
     * @memberof resolveINF
     */
    mainFields?: any;
    /**
     * 说明:
     * ----
     * 解析目录时要使用的文件名。默认：
     *
     * @memberof resolveINF
     */
    mainFiles?: any;
    /**
     * 说明:
     * ----
     * 告诉 webpack 解析模块时应该搜索的目录。
     * 绝对路径和相对路径都能使用，但是要知道它们之间有一点差异。
     * 通过查看当前目录以及祖先路径（即 ./node_modules, ../node_modules 等等），相对路径将类似于 Node 查找 'node_modules' 的方式进行查找。
     * 使用绝对路径，将只在给定目录中搜索。
     *
     * @memberof resolveINF
     */
    modules?: Array<any>;
    /**
     * 说明:
     * -----
     * 启用，会主动缓存模块，但并不安全。传递 true 将缓存一切。
     *
     * @memberof resolveINF
     */
    unsafeCache?: any;
    /**
     * 说明:
     * ----
     * 应该使用的额外的解析插件列表。它允许插件，如 DirectoryNamedWebpackPlugin。
     *
     * @memberof resolveINF
     */
    plugins?: any;
    /**
     * 说明:
     * ----
     * 是否将符号链接(symlink)解析到它们的符号链接位置(symlink location)。默认：
     * 启用时，符号链接(symlink)的资源，将解析为其_真实_路径，而不是其符号链接(symlink)位置。
     * 注意，当使用符号链接 package 包工具时（如 npm link），可能会导致模块解析失败。
     *
     * @memberof resolveINF
     */
    symlinks?: any;
    /**
     * 说明:
     * ----
     * 决定请求是否应该被缓存的函数。函数传入一个带有 path 和 request 属性的对象
     *
     * @memberof resolveINF
     */
    cachePredicate?: any;
}
export interface resolveLoaderINF {
    /**
     * 说明:
     * 解析 loader 时，用到扩展名(extensions)/后缀(suffixes)。
     * 从 webpack 2 开始，我们强烈建议使用全名，例如 example-loader，以尽可能清晰。
     * 然而，如果你确实想省略 -loader，也就是说只使用 example，则可以使用此选项来实现：
     *
     * @type {*}
     * @memberof resolveLoaderINF
     */
    moduleExtensions?: any;
}
export default interface Resolve {
    /**
     * 说明:
     * ----
     * 配置模块如何解析。
     * 例如，当在 ES2015 中调用 import "lodash"，resolve
     * 选项能够对 webpack 查找 "lodash" 的方式去做修改（查看模块）。
     *
     * @type null
     * @memberof Resolve
     */
    resolve?: resolveINF;
    /**
     * 说明:
     * ----
     * 这组选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包
     *
     * @memberof Resolve
     */
    resolveLoader?: resolveLoaderINF;
}
