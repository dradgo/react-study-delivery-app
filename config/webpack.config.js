const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      hot: true,
      historyApiFallback: true,
      port: 3000,
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            hot: true,
            historyApiFallback: true,
            port: 9000,
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
                    test: /\.scss$/i,
                    use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', {
                        loader: 'sass-loader',
                        options: {
                            api: "modern-compiler"
                        }
                    }]
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader'
                }
            ]
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      ...(isProduction
        ? [new MiniCssExtractPlugin({ filename: "styles.css" })]
        : []),
    ],
  };
};
