const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, "./src/css"),
      img: path.resolve(__dirname, "./src/images"),
      ico: path.resolve(__dirname, "./src/favicons"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              { tag: "img", attribute: "src", type: "src" },
              { tag: "img", attribute: "data-src", type: "src" },
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][contenthash][ext]",
        },
      },
      {
        test: /\ico$/i,
        type: "asset/resource",
        generator: {
          filename: "[name][contenthash][ext]",
        },
      },
      {
        test: /\.webmanifest$/,
        use:{
          loader:'file-loader',
          options:{
            filename:'[name][contenthash][ext]'
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new HtmlWebpackPlugin({
      title: "Nzi-Nti Enterprise | Home",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Nzi-Nti Enterprise | About",
      template: "./src/about.html",
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      title: "Nzi-Nti Enterprise | About",
      template: "./src/services.html",
      filename: "services.html",
    }),
    new HtmlWebpackPlugin({
      title: "Nzi-Nti Enterprise | About",
      template: "./src/pest-library.html",
      filename: "pest-library.html",
    }),
    new HtmlWebpackPlugin({
      title: "Nzi-Nti Enterprise | About",
      template: "./src/contact-us.html",
      filename: "contact-us.html",
    }),
  ],
};
