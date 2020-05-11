module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "linebreak-style": ["error", "windows"],
        "indent": "off",
        "func-names": "off",
        "no-unused-expressions": "off",
        "quotes": "off",
        "no-unused-vars": "off",
    }
};