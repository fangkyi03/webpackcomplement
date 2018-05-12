import {webpack} from './index'

webpack({
    output:{
        path:'1',
        filename:'1'
    },
    plugins:['1','1'],
    devServer:{
        proxy:{
            '/api':{
                target:'1',
                changeOrigin:'1',
                ssl:'1',
                hostRewrite:'1',
                pathRewrite:'1'
            }
        }
    }
})