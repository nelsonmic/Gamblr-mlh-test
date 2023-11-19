module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {},
        },
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
    ],
    overrides: [{
        files: ['**/*.ts', '**/*.tsx'],
        parserOptions: {
            project: './tsconfig.json',
        },
    }, ],
    parserOptions: {
        ecmafeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-native'],
    rules: {
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: true,
                classes: true,
                variables: true
            },
        ],
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-color-literals': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error',
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
		    "no-console": "error",
		    "no-nested-ternary": "error",
		    "object-shorthand": ["error", "always"],
		    "react/display-name": "off",
		    "prefer-template": "error",
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
    },
};