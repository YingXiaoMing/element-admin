import exec from 'script.exec.js';
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.exec\.js$/,
                    use: [ 'script-loader' ]
                }
            ]
        }
    }
}