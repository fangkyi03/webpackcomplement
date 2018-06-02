export interface proxyConfig {
    /**
     * 说明:
     * ---
     * 目标
     * 
     * @type {string}
     * @memberof proxyConfig
     */
    target?:string,
    /**
     * 说明:
     * ---
     * url重定向
     * 
     * @type {object}
     * @memberof proxyConfig
     */
    pathRewrite?:object,
    /**
     * 说明:
     * ----
     * 用于https访问
     * 
     * @type {boolean}
     * @memberof proxyConfig
     */
    secure?:boolean,
    /**
     * 说明:
     * ---
     * 对于浏览器请求，你想要提供一个 HTML 页面，但是对于 API 请求则保持代理。你可以这样做：
     * 
     * @memberof proxyConfig
     */
    bypass?:Function,
    /**
     * 说明:
     * ----
     * 上下文
     * 
     * @memberof proxyConfig
     */
    context?:Array<any>,
    /**
     * 说明:
     * ---
     * url string to be parsed with the url module
     * 
     * @memberof proxyConfig
     */
    forward?:any,
    /**
     * 说明:
     * ---
     * object to be passed to http(s).request (see Node's https agent and http agent objects)
     * @memberof proxyConfig
     */
    agent?:any,
    /**
     * 说明:
     * ---
     * object to be passed to https.createServer()
     * 
     * @memberof proxyConfig
     */
    ssl?:any,
    /**
     * 说明:
     * ---
     * true/false: if you want to proxy websockets
     * 
     * @memberof proxyConfig
     */
    ws?:boolean,
    /**
     * 说明:
     * ---
     * true/false, adds x-forward headers
     * 
     * @memberof proxyConfig
     */
    xfwd?:boolean,
    /**
     * 说明:
     * ---
     * true/false, passes the absolute URL as the path (useful for proxying to proxies)
     * @memberof proxyConfig
     */
    toProxy?:boolean,
    /**
     * 说明:
     * ---
     * true/false, Default: true - specify whether you want to prepend the target's path to the proxy path
     * 
     * @memberof proxyConfig
     */
    prependPath?:boolean,
    /**
     * 说明:
     * ---
     * true/false, Default: false - specify whether you want to ignore the proxy path of the incoming request (note: you will have to append / manually if required).
     * 
     * @memberof proxyConfig
     */
    ignorePath?:boolean,
    /**
     * 说明:
     * ---
     * Local interface string to bind for outgoing connections
     * 
     * @memberof proxyConfig
     */
    localAddress?:any,
    /**
     * 说明:
     * ---
     * true/false, Default: false - changes the origin of the host header to the target URL
     * 
     * @memberof proxyConfig
     */
    changeOrigin?:boolean,
    /**
     * 说明:
     * ---
     * 
     * 
     * @type null
     * @memberof proxyConfig
     */
    auth?:any,
    /**
     * 说明:
     * ---
     * rewrites the location hostname on (301/302/307/308) redirects.
     * 
     * @type null
     * @memberof proxyConfig
     */
    hostRewrite?:any,
    /**
     * 说明:
     * ---
     * rewrites the location host/port on (301/302/307/308) redirects based on requested host/port. Default: false.
     * 
     * @memberof proxyConfig
     */
    autoRewrite?:any,
    /**
     * 说明:
     * ---
     * rewrites the location protocol on (301/302/307/308) redirects to 'http' or 'https'. Default: null.
     * 
     * @type {*}
     * @memberof proxyConfig
     */
    protocolRewrite?:any,
    /**
     * 说明:
     * ---
     *  rewrites domain of set-cookie headers. Possible values:
     * false (default): disable cookie rewriting
     * String: new domain, for example cookieDomainRewrite: "new.domain". To remove the domain, use cookieDomainRewrite: "".
     * Object: mapping of domains to new domains, use "*" to match all domains.
     * For example keep one domain unchanged, rewrite one domain and remove other domains:
     * cookieDomainRewrite: {
     * "unchanged.domain": "unchanged.domain",
     * "old.domain": "new.domain","*": ""
     * }
     * 
     * @memberof proxyConfig
     */
    cookieDomainRewrite?:any,
    /**
     * 说明:
     * ---
     * timeout (in millis) when proxy receives no response from target
     * 
     * @type {*}
     * @memberof proxyConfig
     */
    proxyTimeout?:any
}

export interface proxyParam {
    [proxyName: string]: Array<proxyConfig> | proxyConfig | string
}

export interface devServerINF {
    /**
     * 说明:
     * ----
     * Provides the ability to execute custom middleware 
     * after all other middleware internally within the server.
     * @memberof devServerINF
     */
    after?:Function,
    /**
     * 说明:
     * ---
     * This option allows you to whitelist services that are allowed to access the dev server.
     * @memberof devServerINF
     */
    allowedHosts?:Array<string>,
    /**
     * 说明:
     * ---
     * Provides the ability to execute custom 
     * middleware prior to all other middleware internally 
     * within the server. This could be used to define custom handlers, for example:
     * 
     * @memberof devServerINF
     */
    before?:Function,
    /**
     * 说明:
     * ---
     * This option broadcasts the server via ZeroConf networking on start
     * 
     * @memberof devServerINF
     */
    bonjour?:boolean,
    /**
     * 说明:
     * ---
     * 当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息，
     * 如：在重新加载之前，
     * 在一个错误之前，或者模块热替换(Hot Module Replacement)启用时。这可能显得很繁琐。
     * 
     * @memberof devServerINF
     */
    clientLogLevel?:string,
    /**
     * 说明:
     * ---
     * Enables/Disables colors on the console.
     * 
     * @memberof devServerINF
     */
    color?:boolean,
    /**
     * 说明:
     * ---
     * 一切服务都启用gzip 压缩：
     * 
     * @memberof devServerINF
     */
    compress?:boolean,
    /**
     * 说明:
     * ---
     * 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
     * devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
     * 
     * @memberof devServerINF
     */
    contentBase?:boolean | string | Array<any>,
    /**
     * 说明:
     * ---
     * When set to true this option bypasses host checking. THIS IS NOT RECOMMENDED as apps 
     * that do not check the host are vulnerable to DNS rebinding attacks.
     * 
     * @memberof devServerINF
     */
    disableHostCheck?:boolean,
    /**
     * 说明:
     * ---
     * 在惰性模式中，此选项可减少编译。 默认在惰性模式，
     * 每个请求结果都会产生全新的编译。使用 filename，可以只在某个文件被请求时编译。
     * 
     * @memberof devServerINF
     */
    filename?:string,
    /**
     * 说明:
     * ---
     * 在所有响应中添加首部内容：
     * 
     * @memberof devServerINF
     */
    headers?:object,
    /**
     * 说明:
     * ---
     * 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
     * 
     * @memberof devServerINF
     */
    historyApiFallback?:boolean | object,
    /**
     * 说明:
     * ---
     * 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
     * 
     * @memberof devServerINF
     */
    host?:string,
    /**
     * 说明:
     * ---
     * 启用 webpack 的模块热替换特性：
     * 
     * @memberof devServerINF
     */
    hot?:boolean,   
    /**
     * 说明:
     * ---
     * Enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
     * 
     * @type {boolean}
     * @memberof devServerINF
     */
    hotOnly?:boolean,
    /**
     * 说明:
     * ---
     * 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务：
     * 
     * @memberof devServerINF
     */
    https?:boolean | object,
    /**
     * 说明:
     * ---
     * The filename that is considered the index file.
     * @memberof devServerINF
     */
    index?:string,
    /**
     * 说明:
     * ---
     * Output cli information. It is enabled by default.
     * 
     * @memberof devServerINF
     */
    info?:boolean,
    /**
     * 说明:
     * ---
     * 在 dev-server 的两种不同模式之间切换。默认情况下，应用程序启用内联模式(inline mode)。
     * 这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台。
     * 
     * @memberof devServerINF
     */
    inline?:boolean,
    /**
     * 说明:
     * ---
     * 当启用 lazy 时，dev-server 只有在请求时才编译包(bundle)。
     * 这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。
     * 
     * @memberof devServerINF
     */
    lazy?:boolean,
    /**
     * 说明:
     * ---
     * 启用 noInfo 后，诸如「启动时和每次保存之后，
     * 那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
     * @memberof devServerINF
     */
    noInfo?:boolean,
    /**
     * 说明:
     * ---
     * When open is enabled, the dev server will open the browser.
     * @memberof devServerINF
     */
    open?:boolean,
    /**
     * 说明:
     * ---
     * Specify a page to navigate to when opening the browser.
     * @memberof devServerINF
     */
    openPage?:string,
    /**
     * 说明:
     * ---
     * Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors:
     * 
     * @memberof devServerINF
     */
    overlay?:boolean | object,
    /**
     * 说明:
     * ---
     * When used via the CLI, a path to an SSL .pfx file. If used in options, it should be the bytestream of the .pfx file.
     * 
     * @memberof devServerINF
     */
    pfx?:string,
    /**
     * 说明:
     * ---
     * The passphrase to a SSL PFX file.
     * 
     * @memberof devServerINF
     */
    pfxPassphrase?:string,
    /**
     * 说明:
     * ---
     * 指定要监听请求的端口号：
     * 
     * @memberof devServerINF
     */
    port?:number,
    /**
     * 说明:
     * ---
     * 如果你有单独的后端开发服务器 API，并且希望在同域名下发送 API 请求 ，那么代理某些 URL 会很有用。
     * dev-server 使用了非常强大的 http-proxy-middleware 包。更多高级用法，请查阅其文档。
     * 
     * @memberof devServerINF
     */
    proxy?:proxyParam,
    /**
     * 说明:
     * ---
     * 当使用内联模式(inline mode)并代理 dev-server 时，内联的客户端脚本并不总是知道要连接到什么地方。
     * 
     * @memberof devServerINF
     */
    public?:string,
    /**
     * 说明:
     * ---
     * 此路径下的打包文件可在浏览器中访问。
     * 
     * @type {string}
     * @memberof devServerINF
     */
    publicPath?:string,
    /**
     * 说明:
     * ---
     * 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
     * 
     * @type {boolean}
     * @memberof devServerINF
     */
    quiet?:boolean,
    /**
     * 说明:
     * ---
     * Here you can access the Express app object and add your own custom middleware to it. For example, to define custom handlers for some paths:
     * 
     * @memberof devServerINF
     */
    setup?:Function,
    /**
     * 说明:
     * ---
     * The Unix socket to listen to (instead of a host).
     * 
     * @memberof devServerINF
     */
    socket?:string,
    /**
     * 说明:
     * ---
     * It is possible to configure advanced options for serving static files from contentBase. See the Express documentation for the possible options
     * 
     * @type {*}
     * @memberof devServerINF
     */
    staticOptions?:any,
    /**
     * 说明:
     * ---
     * This option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you want some bundle information, but not all of it.
     * 
     * @type {(string | object)}
     * @memberof devServerINF
     */
    stats?:string | object,
    /**
     * 说明:
     * ---
     * This option lets the browser open with your local IP.
     * 
     * @type {boolean}
     * @memberof devServerINF
     */
    useLocalIp?:boolean,
    /**
     * 说明:
     * ---
     * Tell the server to watch the files served by the devServer.contentBase option. File changes will trigger a full page reload.
     * 
     * @type {boolean}
     * @memberof devServerINF
     */
    watchContentBase?:boolean,
    /**
     * 说明:
     * ---
     * 
     * 与监视文件相关的控制选项。
     * webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询：
     * @type {object}
     * @memberof devServerINF
     */
    watchOptions?:object
}

export default interface DevServer {
    devServer?:devServerINF
}