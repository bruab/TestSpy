module.exports = {
    "env": {
        "browser": true,
        "es6": false
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "no-use-before-define": "off",
      "func-names": "off",
      "prefer-arrow-callback": "off",
      "no-var": "off",
      "space-before-function-paren": "off",
      "operator-linebreak": "off",
      "no-console": "off",
      "vars-on-top": "off",
      "comma-dangle": "off",
      "wrap-iife": "off",
      "prefer-template": "off",
      "prefer-rest-params": "off",
      "prefer-destructuring": "off",
      "no-underscore-dangle": "off",
      "no-plusplus": "off",
      "object-shorthand": "off"
    }
};
