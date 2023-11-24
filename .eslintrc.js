module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {},
        }
    },


    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        "plugin:prefer-arrow/recommended", 
    ],
    overrides: [{
        files: ['**/*.ts', '**/*.tsx'],
        parserOptions: {
            project: './tsconfig.json',
        }
    }, ],
    parserOptions: {
        ecmafeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'react-native',
        "prefer-arrow", "prettier"
    ],
	rules: {
	    "@typescript-eslint/no-explicit-any": "error",
	    "@typescript-eslint/no-unused-vars": ["error"],
	    "arrow-body-style": ["error", "as-needed"],
	    eqeqeq: ["error", "always"],
	    "import/extensions": [
	        "error",
	        "ignorePackages",
	        {
	            js: "never",
	            jsx: "never",
	            ts: "never",
	            tsx: "never",
	            "": "never"
	        }
	    ],
	    "import/order": [
	        "error",
	        {
	            groups: [
	                "builtin",
	                "external",
	                "internal",
	                "parent",
	                "sibling",
	                "index"
	            ],
	            "newlines-between": "never"
	        }
	    ],
	    "no-nested-ternary": "error",
	    "object-shorthand": ["error", "always"],
	    "react/display-name": "off",
	    "prefer-arrow/prefer-arrow-functions": [
	        "error",
	        {
	            classPropertiesAllowed: true,
	            disallowPrototype: true,
	            singleReturnOnly: true
	        }
	    ],
	    "prefer-template": "error",
	    "prettier/prettier": "error",
	    "react/jsx-curly-brace-presence": [
	        "error",
	        {
	            children: "never",
	            propElementValues: "always",
	            props: "never"
	        }
	    ],
	    "react/jsx-no-leaked-render": ["error", {
	        validStrategies: ["ternary"]
	    }],
	    "react/jsx-sort-props": [
	        "error",
	        {
	            ignoreCase: true,
	            reservedFirst: true
	        }
	    ],
	    "react-hooks/exhaustive-deps": "error",
	    "security/detect-object-injection": "off",
	    "sort-destructure-keys/sort-destructure-keys": [
	        "error",
	        {
	            caseSensitive: false
	        }
	    ],
	    "sort-keys-fix/sort-keys-fix": [
	        "error",
	        "asc",
	        {
	            caseSensitive: false,
	            natural: true
	        }
	    ],
	    "typescript-sort-keys/interface": "error",
	    "typescript-sort-keys/string-enum": "error",
        "react/function-component-definition": "off",
        "react/no-unstable-nested-components": "off"
	}
};