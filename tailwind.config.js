import plugin from "tailwindcss/plugin";


/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            textShadow: {
                none: "0 0 0 transparent",
                inherit: "inherit",
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
                p: "2px 2px 4px rgba(0, 0, 0, 1)"
            }
        }
    },
    plugins: [
        // Adding text shadow utilities
        plugin(function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value
                    })
                },
                { values: theme("textShadow") }
            );
        }),
        // Adding child & child-hover variants
        plugin(function({ addVariant, e }) {
            addVariant("child", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => `.${ e(`child${ separator }${ className }`) } > *`);
            });
        })
    ]
};