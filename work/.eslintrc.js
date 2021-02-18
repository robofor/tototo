module.exports = {
    "env": {
        "es2015": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "indent": [
            2,
            4
        ],
        
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    }

};
