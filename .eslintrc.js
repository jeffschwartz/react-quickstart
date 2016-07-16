module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "classes": true
        }
    },
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0" // React version, default to the latest React stable release
        }
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "react/jsx-uses-vars": "error"
    }
};