module.exports = {
    "parser": "babel-eslint",
    "extends": [
        '@react-native-community',  
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",  
    ],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "no-console": 0,
        "react/display-name":0,
        "react/prop-types":0,
        "quotes":0,
        "no-unused-vars":0,
        "no-alert": 0,
        "comma-dangle": ["error", "never"],
    }
};