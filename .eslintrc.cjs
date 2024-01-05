module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','simple-import-sort'],
  rules: {
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "simple-import-sort/imports": "error",
    //if we want to group imports can use below.
    "simple-import-sort/imports": ["error", {
      groups: [
        ["^react"],
        ["^antd"],
        ["^@?\\w"],
        ["@/(.*)"],
        ["^[./]"]
      ]
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
