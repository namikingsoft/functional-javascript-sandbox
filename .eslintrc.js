module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
  ],
  "rules": {
    "new-cap": 0,
    "no-console": 0,
    "no-return-await": 0,
    "arrow-parens": [2, "as-needed"],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "flowtype/define-flow-type": 2,
    "flowtype/use-flow-type": 2,
    "flowtype/valid-syntax": 2,
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src",
        ],
      },
    },
  },
};
