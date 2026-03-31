// To merge webpack config files together
const { merge } = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
/* 
    - rather than individually define the packages we want to share in "shared" attribute, we can adopt another approach
    - define an object -> const = package.json
    - then pass it into "shared" attribute
*/
const packageJson = require('../package.json')



const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            // using const packageJson we defined. we can also do packageJson.devDependencies
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies

        })
    ]

}
// assign module.export with merge function, merging commonConfig and devConfig. Listing devConfig second = devConfig is going to override
module.exports=merge(commonConfig, devConfig)