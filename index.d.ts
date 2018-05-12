import EntryPoints from './module/EntryPoints';
import Output from './module/Output';
import Mode from './module/Mode';
import loader from './module/loader';
import Plugins from './module/Plugins';
import Resolve from './module/Resolve';
import DevServer from './module/DevServer';
import Watch from './module/Watch';
import externals from './module/externals';
import Performance from './module/Performance';
export interface roadhogParam extends webpackParam {
}
export interface webpackParam extends EntryPoints, Output, Mode, loader, Plugins, Resolve, DevServer, Watch, externals, Performance {
    /**
     * 说明:
     * ---
     * 此选项控制是否生成，以及如何生成 source map。
     *
     * @type {(string | boolean)}
     * @memberof webpackParam
     */
    devtool?: string | boolean;
    /**
     * 说明:
     * ---
     * 告知 webpack 为目标(target)指定一个环境。
     *
     * @type {(string | Function)}
     * @memberof webpackParam
     */
    target?: string | Function;
}
export declare const roadhog: (param: roadhogParam) => roadhogParam;
export declare const webpack: (param: webpackParam) => webpackParam;
