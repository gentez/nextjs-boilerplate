module.exports = {
  extends: ['@commitlint/config-conventional'],
  "rules": {
    'body-empty': [2, 'never'],
    'body-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case']
  },
};
