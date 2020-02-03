module.exports = {
  "ignorePatterns": ["node_modules/", "www/main*"],
  "extends": ["airbnb"],
  "rules": {
    "linebreak-style": ["off"],
  },
  "env": {
    "jest": true,
    "browser": true,
  }
};