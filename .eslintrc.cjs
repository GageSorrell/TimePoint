module.exports = {
    "extends":
    [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:typescript-sort-keys/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures":
        {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins":
    [
        "react",
        "typescript-sort-keys"
    ],
    "rules": {
        "@typescript-eslint/naming-convention":
        [
            "error",
            {
                "custom":
                {
                    "match": true,
                    "regex": "^(F|I|P|T|S)[A-Z][a-zA-Z]+$"
                },
                "format": [ "PascalCase" ],
                "selector": "typeLike"
            }
        ],
        "@typescript-eslint/no-unused-vars":
        [
            "error",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "brace-style":
        [
            "error",
            "allman",
            { "allowSingleLine": true }
        ],
        // Enforce naming convention for variables to be in PascalCase
        "camelcase": ["error", { "properties": "always" }],
        "react/jsx-sort-props":
        [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "sort-imports":
        [
            "error",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder":
                [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "sort-keys":
        [
            "error",
            "asc",
            {
                "caseSensitive": true,
                "minKeys": 2,
                "natural": false
            }
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
