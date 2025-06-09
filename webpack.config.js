import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default  (env, argv) => {
    const isProduction = argv.mode === 'production';
    const isGithubPages = process.env.GITHUB_PAGES === 'true';

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: isGithubPages ? '/react-study-delivery-app/' : '/',
            filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
            clean: true,
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            hot: true,
            historyApiFallback: true,
            port: 9000,
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: isProduction,
                        },
                    },
                }),
                new CssMinimizerPlugin(),
            ],
            splitChunks: {
                chunks: 'all',
                name: false,
            },
            runtimeChunk: {
                name: 'runtime',
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.scss$/i,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                api: 'modern-compiler',
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                        },
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[contenthash][ext]',
                    },
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024, // 10kb
                        },
                    },
                    generator: {
                        filename: 'images/[name].[contenthash][ext]',
                    },
                },
            ],
        },
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src/'),
            },
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: isProduction ? {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                } : false,
            }),
            ...(isProduction ? [new MiniCssExtractPlugin({ 
                filename: 'styles.[contenthash].css' 
            })] : []),
        ],
    };
};
