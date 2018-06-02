export default interface entry {
    /**
     * 指定 webpack 入口文件，支持 glob 格式。
     * 如果你的项目是多页类型，会希望把 src/pages 的文件作为入口。可以这样配：
     *
     * @type {string}
     * @memberof entry
     */
    entry?: string;
}
