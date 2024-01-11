const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

let plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src", "index.html"),
  }),
];

if (process.env.production) {
  plugins.push(
    new CompressionPlugin({
      filename: "[path][base].gz",
      deleteOriginalAssets: true,
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  );
}

if (process.env.analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist/"),
    clean: true,
  },
  devtool: process.env.development && "inline-source-map",
  devServer: {
    static: "./dist",
    liveReload: true,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
