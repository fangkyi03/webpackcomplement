export default interface proxy {
  /**
     *配置代理，详见 webpack-dev-server#proxy。

如果要代理请求到其他服务器，可以这样配：

"proxy": {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
}
然后访问 /api/users 就能访问到 http://jsonplaceholder.typicode.com/users 的数据。


     *
     * @type {*}
     * @memberof proxy
     */
  proxy?: any;
}