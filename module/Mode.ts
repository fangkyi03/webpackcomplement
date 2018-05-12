export default interface Mode {
    /**
     * 说明:模式 用于切换开发与线上场景
     * 
     * 支持 development 与 production
     * 
     * development 说明
     * ---------------
     * 会将 process.env.NODE_ENV 的值设为 development。
     * 启用 NamedChunksPlugin 和 NamedModulesPlugin。
     * 
     * production 说明
     * --------------
     * 会将 process.env.NODE_ENV 的值设为 production。
     * 启用 
     * FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, 
     * ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, 
     * OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
     * 
     * @type {string}
     * @memberof webpackParam
     */
    mode?:string,
}