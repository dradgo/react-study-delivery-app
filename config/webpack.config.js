const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            clean: true,
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            hot: true,
            historyApiFallback: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            ...(isProduction ? [new MiniCssExtractPlugin({ filename: 'styles.css' })] : [])
        ]
    };
};