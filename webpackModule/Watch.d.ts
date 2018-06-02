export interface watchOptionsINF {
    /**
     * 说明:
     * ---
     *
     * 当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
     * @type {number}
     * @memberof watchOptionsINF
     */
    aggregateTimeout?: number;
    /**
     * 说明:
     * ---
     * 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules：
     *
     * @memberof watchOptionsINF
     */
    ignored?: any;
    /**
     * 说明:
     * ---
     * 通过传递 true 开启 polling，或者指定毫秒为单位进行轮询。
     *
     * @memberof watchOptionsINF
     */
    poll?: boolean | number;
}
export default interface Watch {
    /**
     * 说明:
     * ---
     * 启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。Watch 模式默认关闭。
     * @type {boolean}
     * @memberof Watch
     */
    watch?: boolean;
    watchOptions?: watchOptionsINF;
}
