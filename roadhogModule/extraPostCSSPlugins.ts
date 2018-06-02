export default interface extraPostCSSPlugins {
    /**
     *配置额外的 postcss 插件。

注意：由于 postcss 的插件是以函数的方式进行配置的，所以这个配置只能在 .roadhogrc.js 里使用。

比如：

extraPostCSSPlugins: [
  pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }),
],

     *
     * @type {*}
     * @memberof extraPostCSSPlugins
     */
    extraPostCSSPlugins?:any
}