const commonRules = {
  'ban': [
    true,
    'eval',
    '$',
    ['describe', 'only'],
    ['it', 'only']
  ],
  'ban-comma-operator': true,
  'encoding': true,
  'newline-before-return': true,
  'no-duplicate-imports': true,
  'no-duplicate-switch-case': true,
  'no-duplicate-variable': true,
  'no-dynamic-delete': true,
  'no-empty': false,
  'no-implicit-dependencies': [true, 'dev'],
  'no-import-side-effect': true,
  'no-invalid-template-strings': true,
  'no-invalid-this': true,
  'no-magic-numbers': true,
  'no-parameter-reassignment': true,
  'no-require-imports': true,
  'no-return-await': true,
  'no-sparse-arrays': true,
  'no-switch-case-fall-through': true,
  'no-this-assignment': [true, {'allow-destructuring': true}],
  'no-unnecessary-callback-wrapper': true,
  'no-unnecessary-class': true,
  'object-literal-sort-keys': [true, 'ignore-case'],
  'prefer-conditional-expression': [true, 'check-else-if'],
  'prefer-function-over-method': true,
  'prefer-object-spread': true,
  'prefer-switch': true,
  'prefer-template': [true, 'allow-single-concat'],
  'triple-equals': true
};

module.exports = {
  extends: ['tslint:recommended', 'tslint-config-prettier'],
  jsRules: commonRules,
  lintOptions: {
    typeCheck: true
  },
  rules: {
    ...commonRules,
    'await-promise': true,
    'interface-name': [true, 'never-prefix'],
    'no-any': true,
    'no-floating-promises': true,
    'no-inferrable-types': false,
    'no-non-null-assertion': true,
    'no-unused-variable': true,
    'promise-function-async': true,
    'restrict-plus-operands': true
  }
};
