module.exports = {
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        },
        react: {
            version: "detect"
        }
    },
    rules: {
        // General
        "indent": "off",
        "linebreak-style": ["error", "unix"],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["warn", "always"],
        "no-unused-vars": "off",
        "arrow-body-style": ["warn", "as-needed"],
        "import/no-unresolved": "error",
        "comma-dangle": ["error", "never"],

        // TypeScript
        "@typescript-eslint/indent": ["warn", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",

        // React


        // Imports
        "import/no-useless-path-segments": ["warn", { noUselessIndex: true }],
        "import/newline-after-import": ["warn", { count: 2 }],
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ]
    }
};