import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'src/demo/legacy/**', '*.config.js', '*.config.ts'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Use recommended (syntactic) rules only. The type-aware
      // recommended-requiring-type-checking set fires hundreds of times on
      // Tweakpane's `any`-typed bindings and Three.js uniform shapes — TypeScript
      // strict mode is the real safety net; the value-add of those lint rules is
      // marginal here.
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-throw-literal': 'error',
    },
  },
  {
    files: ['src/demo/**/*.ts'],
    rules: {
      // Demo glues Tweakpane returns (`any`) into UI plumbing — accepting that
      // here keeps the lib/ rules strict without poisoning the demo with
      // `as unknown as <SpecificTweakpaneBinding>` ceremony.
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
