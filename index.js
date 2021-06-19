/** @file ESLint Configuration file. */
// "plugin:diff/diff",
module.exports = {
	configs: {
		browser: {
			env: { browser: true, es2020: false, es6: false, node: false },
			extends: ["plugin:compat/recommended"],
			parserOptions: { ecmaVersion: 3 },
			rules: {
				"@html-eslint/id-naming-convention": [2, "kebab-case"],
				"@html-eslint/require-meta-charset": 2,
				"comma-dangle": 0,
				"jsdoc/require-file-overview": 0,
				"no-console": 2,
				"no-restricted-globals": [
					2,
					"addEventListener",
					"blur",
					"close",
					"closed",
					"confirm",
					"defaultStatus",
					"defaultstatus",
					"event",
					"external",
					"find",
					"focus",
					"frameElement",
					"frames",
					"history",
					"innerHeight",
					"innerWidth",
					"length",
					"location",
					"locationbar",
					"menubar",
					"moveBy",
					"moveTo",
					"name",
					"onblur",
					"onerror",
					"onfocus",
					"onload",
					"onresize",
					"onunload",
					"open",
					"opener",
					"opera",
					"outerHeight",
					"outerWidth",
					"pageXOffset",
					"pageYOffset",
					"parent",
					"print",
					"removeEventListener",
					"resizeBy",
					"resizeTo",
					"screen",
					"screenLeft",
					"screenTop",
					"screenX",
					"screenY",
					"scroll",
					"scrollbars",
					"scrollBy",
					"scrollTo",
					"scrollX",
					"scrollY",
					"self",
					"status",
					"statusbar",
					"stop",
					"toolbar",
					"top",
				],
				"prettier/prettier": 0,
			},
		},
		node: {
			env: { node: true },
			extends: [
				"plugin:node/recommended",
				"plugin:node/recommended-script",
				"hardcore/node",
			],
			parserOptions: { ecmaVersion: 10 },
		},
		reccomended: {
			env: { es2020: false, es6: true },
			extends: [
				"eslint:all",
				"plugin:eslint-comments/recommended",
				"plugin:regexp/recommended",
				"plugin:optimize-regex/all",
				"plugin:markdown/recommended",
				"plugin:promise/recommended",
				"plugin:unicorn/recommended",
				"prettier",
				"plugin:import/recommended",
				"plugin:jsonc/base",
				"plugin:jsonc/prettier",
				"hardcore",
				"hardcore/fp",
			],
			overrides: [
				{
					files: ["**.md"],
					processor: "markdown/markdown",
				},
				{
					env: { browser: true, es2020: true, es6: true, node: true },
					files: ["**.md/**"],
					parserOptions: {
						ecmaVersion: 12,
					},
					rules: {
						"eol-last": [2, "never"],
						"jsdoc/require-file-overview": 0,
						"no-console": 0,
					},
				},
				{
					files: ["**.config.js", "**rc.js"],
					parserOptions: {
						ecmaFeatures: {
							impliedStrict: true,
						},
						sourceType: "module",
					},
					rules: {
						"id-length": 0,
						"unicorn/no-keyword-prefix": 0,
						"unicorn/prevent-abbreviations": 0,
					},
				},
				{
					files: [".github/**.js"],
					rules: {
						"no-console": 0,
					},
				},
				{
					extends: [
						"plugin:jsonc/recommended-with-json",
						"plugin:jsonc/recommended-with-jsonc",
					],
					files: [
						"**.code-workspace",
						".code-snippets",
						"**/settings.json",
						"**/launch.json",
						"**/extensions.json",
						"**.jsonc",
						"**.eslintrc",
						"**.eslintrc.json",
						"jsconfig.json",
					],
					parser: "jsonc-eslint-parser",
				},
				{
					extends: ["plugin:jsonc/recommended-with-json"],
					files: [
						"**.json",
						"**.map",
						"**.jslintrc",
						"**.all-contributorsrc",
					],
					parser: "jsonc-eslint-parser",
				},
			],
			parserOptions: {
				ecmaVersion: 6,
				sourceType: "script",
			},
			plugins: [
				"html",
				"jsdoc",
				"regexp",
				"sort-keys-fix",
				"switch-case",
				"@onedotprojects"
			],
			reportUnusedDisableDirectives: true,
			root: true,
			rules: {
				"arrow-body-style": 2,
				"comma-dangle": [1, "always-multiline"],
				"curly": [1, "multi-or-nest", "consistent"],
				"dot-location": [1, "property"],
				"eslint-comments/require-description": 2,
				"func-style": [1, "declaration", { allowArrowFunctions: true }],
				"function-call-argument-newline": [1, "consistent"],
				"function-paren-newline": 0,
				"id-length": [1, { exceptions: ["_"], max: 20, min: 3 }],
				"id-match": [
					2,
					/^(?:[a-z]+[A-Z][a-z]+|[A-Z]+_[A-Z]+){0,2}$/u.source,
					{
						ignoreDestructuring: true,
						onlyDeclarations: true,
						properties: true,
					},
				],
				"import/first": 2,
				"import/group-exports": 2,
				"import/max-dependencies": 2,
				"import/newline-after-import": 2,
				"import/no-absolute-path": 2,
				"import/no-amd": 2,
				"import/no-anonymous-default-export": 2,
				"import/no-commonjs": 2,
				"import/no-cycle": 2,
				"import/no-dynamic-require": 2,
				"import/no-extraneous-dependencies": 2,
				"import/no-import-module-exports": 2,
				"import/no-mutable-exports": 2,
				"import/no-named-default": 2,
				"import/no-namespace": 2,
				"import/no-self-import": 2,
				"import/no-unassigned-import": 2,
				"import/no-unused-modules": 2,
				"import/no-useless-path-segments": 2,
				"import/no-webpack-loader-syntax": 2,
				"import/prefer-default-export": 2,
				"import/unambiguous": 2,
				"indent": [1, "tab"],
				"indent-legacy": 0,
				"init-declarations": 0,
				"jsdoc/check-access": 1,
				"jsdoc/check-alignment": 1,
				"prefer-arrow-callback": 2,
				"jsdoc/check-examples": 1,
				"sort-keys": 0,
				"jsdoc/check-line-alignment": 1,
				"sort-keys-fix/sort-keys-fix": 1,
				"jsdoc/check-param-names": 1,
				"jsdoc/check-property-names": 1,
				"jsdoc/check-syntax": 1,
				"jsdoc/check-tag-names": 1,
				"jsdoc/check-types": 1,
				"jsdoc/check-values": 1,
				"jsdoc/empty-tags": 1,
				"jsdoc/implements-on-classes": 1,
				"jsdoc/match-description": 1,
				"jsdoc/newline-after-description": 1,
				"jsdoc/no-bad-blocks": 1,
				"jsdoc/no-defaults": 1,
				"jsdoc/no-undefined-types": 0,
				"jsdoc/require-asterisk-prefix": 1,
				"jsdoc/require-description": 1,
				"regexp/sort-character-class-elements": 2,
				"capitalized-comments": 2,
				"unicorn/no-array-for-each": 1,
				"jsdoc/require-description-complete-sentence": 1,
				"unicorn/prefer-prototype-methods": 2,
				"jsdoc/require-file-overview": 1,
				"sonarjs/no-duplicate-string": [2, 3],
				"jsdoc/require-hyphen-before-param-description": 1,
				"jsdoc/require-jsdoc": 1,
				"jsdoc/require-param": 1,
				"jsdoc/require-param-description": 1,
				"jsdoc/require-param-name": 1,
				"jsdoc/require-param-type": 1,
				"jsdoc/require-property": 1,
				"jsdoc/require-property-description": 1,
				"jsdoc/require-property-name": 1,
				"jsdoc/require-property-type": 1,
				"jsdoc/require-returns": 1,
				"jsdoc/require-returns-check": 1,
				"jsdoc/require-returns-description": 1,
				"jsdoc/require-returns-type": 1,
				"jsdoc/require-throws": 1,
				"jsdoc/require-yields": 1,
				"jsdoc/require-yields-check": 1,
				"linebreak-style": 0,
				"max-len": [
					1,
					{
						code: 100,
						comments: 100,
						ignoreRegExpLiterals: true,
						ignoreStrings: false,
						ignoreTemplateLiterals: false,
						tabWidth: 2,
					},
				],
				"max-lines": [
					1,
					{ max: 500, skipBlankLines: true, skipComments: true },
				],
				"max-lines-per-function": [
					1,
					{
						IIFEs: true,
						max: 100,
						skipBlankLines: true,
						skipComments: true,
					},
				],
				"unicorn/no-useless-undefined": 1,
				"import/no-relative-parent-imports": 1,
				"consistent-return": 2,
				"max-params": [1, { max: 5 }],
				"max-statements": 0,
				"multiline-comment-style": 2,
				"multiline-ternary": [1, "always-multiline"],
				"new-cap": [
					1,
					{ capIsNew: true, newIsCap: true, properties: true },
				],
				"no-confusing-arrow": 0,
				"no-console": 1,
				"no-continue": 0,
				"no-extra-parens": 0,
				"no-invalid-this": 0,
				"no-magic-numbers": 0,
				"no-mixed-operators": 0,
				"no-nested-ternary": 0,
				"no-plusplus": 0,
				"no-process-exit": 2,
				"no-tabs": 0,
				"no-ternary": 0,
				"no-unused-vars": [
					2,
					{
						args: "all",
						argsIgnorePattern: "_",
						caughtErrors: "all",
					},
				],
				"no-warning-comments": [1, { location: "anywhere" }],
				"class-methods-use-this": 1,
				"node/exports-style": 2,
				"node/file-extension-in-import": 2,
				"node/handle-callback-err": 2,
				"node/no-callback-literal": 2,
				"node/no-new-require": 2,
				"node/no-path-concat": 2,
				"node/no-restricted-import": 2,
				"node/no-restricted-require": 2,
				"node/no-unpublished-require": 0,
				"node/prefer-promises/fs": 2,
				"object-curly-spacing": [1, "always"],
				"one-var": [1, "consecutive"],
				"optimize-regex/optimize-regex": 2,
				"padded-blocks": [1, "never"],
				"prettier/prettier": 0,
				"promise/prefer-await-to-callbacks": 2,
				"promise/prefer-await-to-then": 1,
				"quote-props": [1, "consistent-as-needed"],
				"quotes": [1, "double", { avoidEscape: true }],
				"regexp/confusing-quantifier": 2,
				"regexp/control-character-escape": 2,
				"regexp/hexadecimal-escape": 2,
				"regexp/letter-case": 2,
				"regexp/negation": 2,
				"regexp/no-dupe-disjunctions": 2,
				"regexp/no-empty-alternative": 2,
				"regexp/no-lazy-ends": 2,
				"regexp/no-legacy-features": 2,
				"regexp/no-non-standard-flag": 2,
				"regexp/no-obscure-range": 2,
				"regexp/no-optional-assertion": 2,
				"regexp/no-potentially-useless-backreference": 2,
				"regexp/no-standalone-backslash": 2,
				"regexp/no-trivially-nested-assertion": 2,
				"regexp/no-trivially-nested-quantifier": 2,
				"regexp/no-useless-assertions": 2,
				"regexp/no-useless-character-class": 2,
				"regexp/no-useless-dollar-replacements": 2,
				"regexp/no-useless-escape": 2,
				"regexp/no-useless-flag": 2,
				"regexp/no-useless-lazy": 2,
				"regexp/no-useless-non-capturing-group": 2,
				"regexp/no-useless-non-greedy": 2,
				"regexp/no-useless-quantifier": 2,
				"regexp/no-useless-range": 2,
				"regexp/no-zero-quantifier": 2,
				"regexp/optimal-lookaround-quantifier": 2,
				"regexp/prefer-character-class": 2,
				"regexp/prefer-escape-replacement-dollar-char": 2,
				"regexp/prefer-named-backreference": 2,
				"regexp/prefer-predefined-assertion": 2,
				"regexp/prefer-quantifier": 2,
				"security/detect-object-injection": 2,
				"regexp/prefer-range": 2,
				"regexp/prefer-regexp-exec": 2,
				"security/detect-non-literal-fs-filename": 2,
				"regexp/prefer-regexp-test": 2,
				"regexp/prefer-unicode-codepoint-escapes": 2,
				"regexp/sort-flags": 2,
				"regexp/unicode-escape": 2,
				"require-unicode-regexp": 2,
				"sort-vars": 1,
				"space-before-function-paren": [
					1,
					{
						anonymous: "always",
						asyncArrow: "always",
						named: "never",
					},
				],
				"strict": [2, "global"],
				"switch-case/newline-between-switch-case": 1,
				"unicorn/custom-error-definition": 2,
				"unicorn/expiring-todo-comments": 1,
				"unicorn/import-index": [1, { ignoreImports: true }],
				"unicorn/no-keyword-prefix": 2,
				"unicorn/no-unsafe-regex": 2,
				"unicorn/no-unused-properties": 2,
				"unicorn/numeric-separators-style": [
					1,
					{
						onlyIfContainsSeparator: true,
					},
				],
				"unicorn/prefer-module": 0,
				"unicorn/prefer-object-has-own": 0,
				"unicorn/prefer-spread": 1,
				"unicorn/prefer-string-replace-all": 0,
				"unicorn/prevent-abbreviations": [
					2,
					{
						allowList: {
							jQuery: true,
						},
						checkDefaultAndNamespaceImports: true,
						checkShorthandImports: true,
						checkShorthandProperties: true,
						replacements: {},
					},
				],
				"unicorn/string-content": [
					2,
					{
						patterns: {
							'"': "”",
							"'": "’",
							"...": "…",
							"^http:\\/\\/": "^https:\\/\\/",
						},
					},
				],
				"vars-on-top": 1,
				"wrap-iife": [2, "inside"],
			},
			settings: { html: { "xml-extensions": [".svg"] } },
		},
	},
};
