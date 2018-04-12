const commonRules = {
  'jsx-alignment': true,
  'jsx-equals-spacing': [true, 'never'],
  'jsx-key': true,
  'jsx-no-string-ref': true,
  'jsx-self-close': true
};

module.exports = {
  extends: ['tslint-react'],
  jsRules: commonRules,
  rules: {
    ...commonRules,
    'jsx-curly-spacing': [true, 'never']
  }
};
