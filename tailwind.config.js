import plugin from "tailwindcss/plugin"

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("tailwindcss-animate"),
		// Adding child variants
		plugin(({ addVariant }) => {
			addVariant("child", "& > *")
			addVariant("child-hover", "& > *:hover")
			addVariant("child-focus", "& > *:focus")
			addVariant("child-active", "& > *:active")
		}),
	],
}
