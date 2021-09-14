const { cssnanoPlugin } = require("cssnano");
const postcssPurgecss = require("@fullhuman/postcss-purgecss");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    isProduction && postcssPurgecss({
      content: [
        "./src/main/resources/templates/**/*.html"
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    isProduction && cssnanoPlugin({
      preset: "default"
    })
  ].filter(Boolean)
};
