module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "brace-style": [
            "error",
            "1tbs",
            { allowSingleLine: true }
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            "error",
            "last"
        ],
        "curly": "error",
        "eqeqeq": "error",
        "indent": [
            "error",
            2,
            { SwitchCase: 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 2
        }],
        "no-alert": "warn",
        "no-array-constructor": "error",
        "no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        "no-var": "error",
        "no-unused-vars": "warn",
        "object-curly-spacing": ["warn", "always"],
        "padding-line-between-statements": ["error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": ["const", "let", "var"],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": ["const", "let", "var"],
                "next": ["const", "let", "var"]
            },
            {
                "blankLine": "always",
                "prev": "directive",
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": "directive",
                "next": "directive"
            },
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-function-paren": [
            "error",
            { "anonymous": "always", "named": "never" }
        ]
    }
};