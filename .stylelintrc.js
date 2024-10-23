export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
  ],
  ignoreFiles: ['**/vendors/**/*.scss'],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'media-query-no-invalid': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^-?[a-z][a-z0-9]*(--?[a-z0-9]+)*$',
    'scss/no-global-function-names': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
  },
}
