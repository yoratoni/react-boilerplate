const path = require("node:path")

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
		configure: (config, { paths }) => {
			// Build
			paths.appBuild = path.join(paths.appPath, "build")
			config.output.path = paths.appBuild

			// Entry
			paths.appIndexJs = path.join(paths.appSrc, "_document.tsx")
			config.entry = paths.appIndexJs

			return config
		},
	},
}
