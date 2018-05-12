export interface performanceINF {
    /**
     * 说明:
     * ---
     * 打开/关闭提示。此外，当找到提示时，告诉 webpack 抛出一个错误或警告。此属性默认设置为 "warning"。
     * 
     * @type {(boolean | string)}
     * @memberof performanceINF
     */
    hints?: boolean | string,
    /**
     * 说明:
     * ---
     * 入口起点表示针对指定的入口，对于所有资源，要充分利用初始加载时(initial load time)期间。此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
     * 
     * @memberof performanceINF
     */
    maxEntrypointSize?:number,
    /**
     * 说明:
     * ---
     * 资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
     * 
     * @memberof performanceINF
     */
    maxAssetSize?:number
}

export default interface Performance {
    performance?: performanceINF
}