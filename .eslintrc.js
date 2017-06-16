module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "linebreak-style": [
      "error",
      "windows"
    ],
    "react/jsx-filename-extension": [
      1, {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  }
};
