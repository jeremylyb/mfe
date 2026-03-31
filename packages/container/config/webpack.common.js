module.exports = {
    module: {
        /* 
            Define loader: loader is to tell webpack to process some different files as we start to import them into our project
                Babel -> in charge of processing all of our code from ES2015 and so on and turn it into regular ES 5 code that can
                        be easily executed inside of a typical browser
        */
        rules: [
            /*
                Whenever we import a file that ends with an extension of either mjs or js, we want it to be processed by bable
            */
            {
                test: /\.m?js$/,
                // Do not run bable on node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        /*
                            @babel/preset-react -> babel is going to process all the different jsx tags
                            @babel/preset-env -> take all kind of syntax and convert it to ES five
                            @babel/plugin-transform-runtime -> enable some different features for our project such as async await syntax
                        */
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    }
}