module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/trello/" : "/",

  outputDir: "dist",

  assetsDir: "assets",

  productionSourceMap: false,

  filenameHashing: false,

  lintOnSave: true
};
