export default interface cssModulesExclude {
  /**
     * 支持 CSSModules 混用，通过 cssModulesExclude 可指定不需要走 CSSModules 的文件列表。
     *  "cssModulesExclude": [
     * './src/a.css',
     * './src/b.less',]
     * @type null
     * @memberof cssModulesExclude
     */
  cssModulesExclude?: any;
}