module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-unused-vars":["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};
