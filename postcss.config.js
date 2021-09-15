const isProduction = process.env.NODE_ENV === "production";

const plugins = [
	require("tailwindcss"),
	require("autoprefixer")
];

if(isProduction) {
	plugins.push(
		require("cssnano")({ preset: [ "default" ]})
	);
	plugins.push(
		require("@fullhuman/postcss-purgecss")
	)
}

module.exports = {
  plugins: plugins
};
