// 入口起点
import EntryPoints from './module/EntryPoints'
// 输出
import Output from './module/Output'
// 模式
import Mode from './module/Mode'
// 加载器
import loader from './module/loader'
// 插件
import Plugins from './module/Plugins'
// 解析
import Resolve from './module/Resolve'
// 载入开发中
import DevServer from './module/DevServer'
// 监控
import Watch from './module/Watch'
// 外部扩展
import externals from './module/externals'
// 性能
import Performance from './module/Performance'

export interface roadhogParam extends webpackParam{
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

export const roadhog = (param:roadhogParam) =>{
    return param
}

export const webpack = (param:webpackParam) =>{
    return param
}