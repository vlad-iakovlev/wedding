module.exports = {
  'env': {
    'browser': true,
    'jest'   : true,
    'node'   : false,
  },

  'globals': {
    'document' : 'readonly',
    'navigator': 'readonly',
    'window'   : 'readonly',
  },

  'parser': '@typescript-eslint/parser',

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },

    'ecmaVersion': 2020,
    'sourceType' : 'module',
  },

  'plugins': [
    '@typescript-eslint',
    'fp',
    'ramda',
    'react',
    'react-hooks',
  ],

  'rules': {
    '@typescript-eslint/member-delimiter-style': [1, {
      'multiline': {
        'delimiter'  : 'none',
        'requireLast': true,
      },
      'singleline': {
        'delimiter'  : 'comma',
        'requireLast': false,
      },
    }],

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars' : [2, {'argsIgnorePattern': '^_'}],
    'arrow-parens'                      : [2, 'as-needed'],

    'comma-dangle': ['error', {
      'arrays'   : 'always-multiline',
      'exports'  : 'always-multiline',
      'functions': 'always-multiline',
      'imports'  : 'always-multiline',
      'objects'  : 'always-multiline',
    }],

    'consistent-return': 0,
    'curly'            : [2, 'all'],
    'eol-last'         : [1],
    'eqeqeq'           : 2,
    'fp/no-loops'      : 'error',
    'id-length'        : ['error', {'exceptions': ['_', 'R', 'x', 'y']}],

    'indent': [2, 2, {
      'ArrayExpression'   : 1,
      'CallExpression'    : {'arguments': 1},
      'FunctionExpression': {'parameters': 1},
      'MemberExpression'  : 1,
      'ObjectExpression'  : 1,
      'VariableDeclarator': 0,
    }],

    'key-spacing': ['error', {'afterColon': true, 'align': 'colon'}],

    'keyword-spacing': [2, {
      'after' : false,
      'before': false,

      'overrides': {
        'as'     : {'after': true, 'before': true},
        'catch'  : {'after': false, 'before': true},
        'const'  : {'after': true, 'before': false},
        'default': {'after': true, 'before': true},
        'export' : {'after': true, 'before': false},
        'finally': {'after': true, 'before': true},
        'from'   : {'after': true, 'before': true},
        'import' : {'after': true, 'before': false},
        'let'    : {'after': true, 'before': false},
        'return' : {'after': true, 'before': false},
        'try'    : {'after': true, 'before': false},
        'var'    : {'after': true, 'before': false},
      },
    }],

    'lines-around-comment': [2, {
      'allowBlockStart'   : true,
      'beforeBlockComment': true,
      'beforeLineComment' : true,
    }],

    'max-len'                     : [2, {'code': 120, 'ignoreComments': true, 'ignoreUrls': true, 'tabWidth': 2}],
    'no-debugger'                 : 1,
    'no-duplicate-imports'        : 'error',
    'no-extra-parens'             : 'error',
    'no-extra-semi'               : 1,
    'no-mixed-spaces-and-tabs'    : [1],
    'no-multi-spaces'             : [2, {'exceptions': {'AssignmentExpression': true, 'Property': true}}],
    'no-process-env'              : 'error',
    'no-shadow'                   : [2],
    'no-spaced-func'              : [1],
    'no-unused-expressions'       : [1],
    'no-unused-vars'              : [1],
    'object-curly-spacing'        : [1, 'never'],
    'one-var'                     : [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'padded-blocks'               : [2, 'never'],

    'padding-line-between-statements': [
      'error',

      {
        'blankLine': 'always',

        'next': [
          'if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var',
        ],

        'prev': '*',
      },

      {
        'blankLine': 'always',
        'next'     : '*',

        'prev': [
          'if', 'multiline-block-like', 'multiline-const', 'multiline-expression', 'multiline-let', 'multiline-var',
        ],
      },
    ],

    'quotes'                         : [1, 'single'],
    'ramda/compose-simplification'   : 'error',
    'ramda/cond-simplification'      : 'error',
    'ramda/eq-by-simplification'     : 'error',
    'ramda/filter-simplification'    : 'error',
    'ramda/map-simplification'       : 'error',
    'ramda/merge-simplification'     : 'error',
    'ramda/no-redundant-and'         : 'error',
    'ramda/no-redundant-not'         : 'error',
    'ramda/no-redundant-or'          : 'error',
    'ramda/pipe-simplification'      : 'error',
    'ramda/reduce-simplification'    : 'error',
    'ramda/set-simplification'       : 'error',
    'ramda/when-simplification'      : 'error',
    'react-hooks/exhaustive-deps'    : 'warn',
    'react-hooks/rules-of-hooks'     : 'error',
    'react/destructuring-assignment' : [1, 'never', {'ignoreClassFields': true}],
    'react/jsx-curly-spacing'        : [1, 'never'],
    'react/jsx-handler-names'        : 0,
    'react/jsx-no-bind'              : 2,
    'react/jsx-uses-react'           : 2,
    'react/jsx-uses-vars'            : 1,
    'react/prefer-stateless-function': 2,
    'react/self-closing-comp'        : 2,
    'semi'                           : [2, 'never'],

    'sort-imports': ['error', {
      'ignoreCase'           : true,
      'ignoreMemberSort'     : false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
    }],

    'sort-keys': ['error', 'asc', {'caseSensitive': false}],

    'space-before-function-paren': [1, {
      'anonymous' : 'always',
      'asyncArrow': 'always',
      'named'     : 'never',
    }],

    'strict': [1, 'never'],
  },

  'settings': {
    'react': {
      'pragma' : 'React',
      'version': '16.10',
    },
  },
}
