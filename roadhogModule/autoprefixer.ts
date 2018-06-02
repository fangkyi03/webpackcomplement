export default interface autoprefixer {
  /**
     *
配置 autoprefixer 参数，详见 autoprefixer 和 browserslist。

比如，如果是做移动端的开发，可以配成：

"autoprefixer": {
  "browsers": [
    "iOS >= 8", "Android >= 4"
  ]
}
     *
     * @type {*}
     * @memberof autoprefixer
     */
  autoprefixer?: any;
};