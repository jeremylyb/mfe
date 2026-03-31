const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        // to include the name of file that was created and the hash of the contents of the file -> for caching issues
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                /* 
                    - For production, cause currently we do not know where exactly our app will be hosted, we do not have the domain
                    - We can use an environment variable as a dummy variable, which we have defined above const domain = process.env.PRODUCTION_DOMAIN
                    - This environment variable is going to be defined when we build our application through our CI/CD pipeline
                    - The environment variable is going to contain a string that says exactly where our production application is hosted, so that we can
                        ensure we get the correct remote entry URL in the defined domain
                    - So that whenever we run our webpack production build, that value for the domain will be automatically put into this string
                */
               /*
                    - Another key note: Our container app need to host remote marketing, dashboard, authentication mfe remotes
                    - All these different sub-projects are gonna have a remote entry file that we have to load up
                    - All these remote entry files are going to be hosted at the same domain.
                    - WE need to make sure that we can figure out which remote entry file is which
                    - We need to make sure that we can all identify these different remote entry files and not have them override each other
                    - We will do so by assuming that the remote entry file for each project is nested inside each folder of each domain
                    - For example Marketing: we will need to ensure that javascript file is located in this url => {domain}/marketing/remoteEntry.js
               */
                marketing: `marketing@${domain}/marketing/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig)