/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings': {
    'react': {
      'version': 'latest',
    },
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'linebreak-style': 'off',
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'only-multiline',
    ],
    'object-curly-newline': ['error', {
      'ImportDeclaration': 'never'
    }],
    'init-declarations': ['error', 'always'],
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'array': true,
        'object': true
      },
      'AssignmentExpression': {
        'array': true,
        'object': false
      }
    }, {
      'enforceForRenamedProperties': true
    }],
    'no-unused-vars':'error',
    'no-undefined': 'off',
    'no-empty-function': [
      'error',
      {
        'allow': ['arrowFunctions']
      }
    ],
    'prefer-named-capture-group': 'error',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'no-implicit-coercion': 'off',
    'no-use-before-define': 'error',
    'import/no-named-default': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'react/display-name': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/no-multi-comp': 'error',
    'react/no-unescaped-entities': 'off',
    'no-nested-ternary': 'off',
    'sort-imports': 'off',
    'space-infix-ops': 'off',
    'react-hooks/exhaustive-deps': 'error'
  },
};
