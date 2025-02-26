const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		isProduction &&
			require("@fullhuman/postcss-purgecss")({
				content: ["./src/main/resources/templates/**/*.html"],
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
			}),
		isProduction &&
		require('cssnano')({
				preset: "default",
			}),
	].filter(Boolean),
};
