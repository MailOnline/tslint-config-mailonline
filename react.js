const commonRules = {
  'jsx-alignment': false,
  'jsx-equals-spacing': false,
  'jsx-key': true,
  'jsx-no-multiline-js': false,
  'jsx-no-string-ref': true,
  'jsx-self-close': true,
  'jsx-wrap-multiline': false
};

module.exports = {
  extends: ['tslint-react'],
  jsRules: commonRules,
  rules: {
    ...commonRules,
    'jsx-curly-spacing': false
  }
};
