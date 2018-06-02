// webpack部分
// ----------
// 入口起点
import EntryPoints from './webpackModule/EntryPoints'
// 输出
import Output from './webpackModule/Output'
// 模式
import Mode from './webpackModule/Mode'
// 加载器
import loader from './webpackModule/loader'
// 插件
import Plugins from './webpackModule/Plugins'
// 解析
import Resolve from './webpackModule/Resolve'
// 载入开发中
import DevServer from './webpackModule/DevServer'
// 监控
import Watch from './webpackModule/Watch'
// 外部扩展
import externals from './webpackModule/externals'
// 性能
import Performance from './webpackModule/Performance'


// roadhog部分
// ----------
import defaultConfig from './roadhogModule/defaultConfig';
import entry from './roadhogModule/entry';
import disableCSSModules from './roadhogModule/disableCSSModules';
import cssModulesExclude from './roadhogModule/cssModulesExclude';
import hash from './roadhogModule/hash';
import publicPath from './roadhogModule/publicPath';
import outputPath from './roadhogModule/outputPath';
import extraBabelPlugins from './roadhogModule/extraBabelPlugins';
import extraPostCSSPlugins from './roadhogModule/extraPostCSSPlugins';
import autoprefixer from './roadhogModule/autoprefixer';
import sass from './roadhogModule/sass';
import proxy from './roadhogModule/proxy';

export interface roadhogParam1 
extends 
    defaultConfig, entry, 
    disableCSSModules, cssModulesExclude,
    hash, publicPath, outputPath,
    extraPostCSSPlugins, autoprefixer,
    sass, proxy, externals
{
    library?:any,
    libraryTarget?:any,
    multipage?:any,
    define?:any,
    env?:any,
    theme?:any,
    svgSpriteLoaderDirs?:any,
}

export interface roadhogParam2 extends roadhogParam1 {
    alias?:any,
    extraResolveExtensions?:any,
    browserslist?:any,
    devtool?:any,
    commons?:any,
    html?:any,
    extraBabelIncludes?:any,
    copy?:any,
    manifest?:any,
    ignoreMomentLocale?:any,
    disableDynamicImport?:any,
}
export interface webpackParam 
extends 
    EntryPoints,Output,
    Mode, loader, Plugins,
    Resolve, DevServer, Watch,
    externals, Performance
{   
    /**
     * 说明:
     * ---
     * 此选项控制是否生成，以及如何生成 source map。
     * 
     * @type {(string | boolean)}
     * @memberof webpackParam
     */
    devtool?:string | boolean,
    /**
     * 说明:
     * ---
     * 告知 webpack 为目标(target)指定一个环境。
     * 
     * @type {(string | Function)}
     * @memberof webpackParam
     */
    target?:string | Function
}

export const roadhog1 = (param:roadhogParam1) =>{
    return param
}

export const roadhog2 = (param:roadhogParam2) => {
    return param
}

export const webpack = (param:webpackParam) =>{
    return param
}
