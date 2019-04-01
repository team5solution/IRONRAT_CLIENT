//require("ignore-styles");
require("css-modules-require-hook")({
  generateScopedName: "[name]__[local]___[hash:base64:5]"
});
require("@babel/polyfill");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
require("asset-require-hook")({
  extensions: ["jpg", "svg", "png", "gif", "jpeg"],
  limit: 8000
});
require("./server/index");
