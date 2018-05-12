export interface entryINF {
    [entryChunkName: string]: string | Array<string>;
}
export interface entryFunINF {
    [funname: string]: string | Array<string> | entryINF;
}
export default interface EntryPoints {
    /**
 * 说明:入口文件地址
 *
 * 支持字符串跟对象
 *
 * @type {string}
 * @memberof webpackParam
 */
    entry?: string | Array<string> | entryINF | entryFunINF;
    /**
     * 说明：上下文 用于从配置中解析入口起点(entry point)和 loader
     *
     * @memberof EntryPoints
     */
    context?: string;
}
