module.exports = {
	env: { es2020: false, es6: true },

	extends: [
		"eslint:all",
		"plugin:eslint-comments/recommended",
		"plugin:regexp/recommended",
		"plugin:markdown/recommended",
		"plugin:promise/recommended",
		"plugin:unicorn/recommended",
		"prettier",
		"plugin:import/recommended",
		"hardcore",
		"hardcore/fp",
	],

	ignorePatterns: [
		"!**",
		"node_modules",
		".git",
		"plugin_packages",
		".npm",
		".upm",
		"dist",
		"build",
		".parcel-cache",
		".nvm",
		".eslintcache",
		".node_repl_history",
	],

	overrides: [
		{
			extends: ["plugin:@onedotprojects/cli"],
			files: ["bin/**.js", ".github/**.js"],
		},
		{
			extends: ["plugin:@onedotprojects/esm"],
			files: ["**.mjs"],
		},
		{
			extends: ["plugin:@onedotprojects/config"],
			files: [
				"**.config.js",
				"**rc.js",
				"**.config.mjs",
				"**rc.mjs",
				"**.config.cjs",
				"**rc.cjs",
			],
		},
		{
			extends: ["plugin:@onedotprojects/sample"],
			files: ["**.md"],
			processor: "markdown/markdown",
		},
		{ extends: ["plugin:@onedotprojects/sample"], files: ["**.md/*.js","**.md/*.javascript"] },
		{
			extends: ["plugin:@onedotprojects/browser"],
			files: ["**.html", "**.htm", "**.md/*.html"],
			rules: { "putout/putout": 0 },
		},
		{ files: ["**.json*"], rules: { "jsdoc/require-file-overview": 0 } },
		{
			files: [".github/**.js"],
			rules: {
				"import/no-extraneous-dependencies": [
					2,
					{
						bundledDependencies: false,
						peerDependencies: false,
						optionalDependencies: false,
						devDependencies: true,
					},
				],
			},
		},
	],

	parserOptions: {
		ecmaVersion: 6,
		sourceType: "script",
	},

	plugins: ["html", "jsdoc", "regexp", "switch-case", "@onedotprojects"],

	reportUnusedDisableDirectives: true,

	root: true,

	rules: {
		"@html-eslint/require-doctype": 0,
		"arrow-body-style": 2,
		"capitalized-comments": 2,
		"class-methods-use-this": 2,
		"comma-dangle": [2, "always-multiline"],
		"complexity": [1, 15],
		"consistent-return": 2,
		"curly": [2, "multi-or-nest", "consistent"],
		"dot-location": [2, "property"],
		"eslint-comments/require-description": 2,
		"fp/no-let": 0,
		"fp/no-loops": 0,
		"fp/no-mutating-methods": 0,
		"fp/no-mutation": 0,
		"fp/no-this": 0,
		"fp/no-throw":2,
		"func-style": [2, "declaration", { allowArrowFunctions: true }],
		"function-call-argument-newline": [1, "consistent"],
		"function-paren-newline": 0,
		"id-length": [2, { exceptions: ["_"], max: 20, min: 3 }],

		"id-match": [
			2,
			/^(?:_?[A-Za-z]+(?:[A-Z][a-z]{1,10}){0,2}|(?:_?[A-Z]+){1,2}|_(?:_(?:filename|dirname))?)$/
				.source,
			{ ignoreDestructuring: false, onlyDeclarations: false, properties: true },
		],

		"import/extensions": [
			2,
			"always",
			{
				js: "never",
				json: "ignorePackages",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],

		"import/first": 2,
		"import/group-exports": 0,
		"import/max-dependencies": 0,
		"import/newline-after-import": 2,
		"import/no-absolute-path": 2,
		"import/no-amd": 2,
		"import/no-anonymous-default-export": 2,
		"import/no-commonjs": 0,
		"import/no-unresolved": 2,

		"import/no-cycle": 2,
		"import/no-dynamic-require": 0,
		"import/no-extraneous-dependencies": [
			2,
			{
				bundledDependencies: false,
				peerDependencies: false,
				optionalDependencies: false,
				devDependencies: false,
			},
		],
		"import/no-import-module-exports": 2,
		"import/no-mutable-exports": 2,
		"import/no-named-default": 2,
		"import/no-namespace": 2,
		"import/no-relative-parent-imports": 0,
		"import/no-self-import": 2,
		"import/no-unassigned-import": 2,
		"import/no-unused-modules": 0,
		"import/no-useless-path-segments": 2,
		"import/no-webpack-loader-syntax": 2,
		"import/order": 0,
		"import/prefer-default-export": 2,
		"import/unambiguous": 2,
		"indent": 0,
		"indent-legacy": 0,
		"init-declarations": 0,
		"jsdoc/check-access": 2,
		"jsdoc/check-alignment": 2,
		"jsdoc/check-examples": [
			2,
			{
				noDefaultExampleRules: false,
				captionRequired: true,
				paddedIndent: 1,
				rejectExampleCodeRegex: /^[\s*]*?```.*?```[*\s]*?$/gimsu.toString(),
				matchingFileName: "dummy.md/*.js",
			},
		],
		"jsdoc/check-line-alignment": 2,
		"jsdoc/check-param-names": 2,
		"jsdoc/check-property-names": 2,
		"jsdoc/check-syntax": 2,
		"jsdoc/check-tag-names": 2,
		"jsdoc/check-types": 2,
		"jsdoc/check-values": 2,
		"jsdoc/empty-tags": 2,
		"jsdoc/implements-on-classes": 2,
		"jsdoc/match-description": 2,
		"jsdoc/newline-after-description": 2,
		"jsdoc/no-bad-blocks": 2,
		"jsdoc/no-defaults": 2,
		"jsdoc/no-undefined-types": 0,
		"jsdoc/require-asterisk-prefix": 2,
		"jsdoc/require-description": 2,
		"jsdoc/require-description-complete-sentence": 2,
		"jsdoc/require-file-overview": 2,
		"jsdoc/require-hyphen-before-param-description": 2,
		"jsdoc/require-jsdoc": 2,
		"jsdoc/require-param": 2,
		"jsdoc/require-param-description": 2,
		"jsdoc/require-param-name": 2,
		"jsdoc/require-param-type": 2,
		"jsdoc/require-property": 2,
		"jsdoc/require-property-description": 2,
		"jsdoc/require-property-name": 2,
		"jsdoc/require-property-type": 2,
		"jsdoc/require-returns": 2,
		"jsdoc/require-returns-check": 2,
		"jsdoc/require-returns-description": 2,
		"jsdoc/require-returns-type": 2,
		"jsdoc/require-throws": 2,
		"jsdoc/require-yields": 2,
		"jsdoc/require-yields-check": 2,
		"json/*": 0,
		"linebreak-style": 0,
		"lines-around-comment": 0,
		"max-depth": [1, { max: 5 }],

		"max-len": [
			1,
			{
				code: 100,
				comments: 120,
				ignoreRegExpLiterals: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreUrls: true,
				tabWidth: 0,
			},
		],

		"max-lines": [1, { max: 500, skipBlankLines: true, skipComments: true }],

		"max-lines-per-function": [
			1,
			{ IIFEs: true, max: 100, skipBlankLines: true, skipComments: true },
		],

		"max-params": [1, { max: 5 }],
		"max-statements": 0,
		"multiline-comment-style": [1, "separate-lines"],
		"multiline-ternary": [1, "always-multiline"],
		"new-cap": [1, { capIsNew: true, newIsCap: true, properties: true }],
		"no-confusing-arrow": 0,
		"no-console": 1,
		"no-continue": 0,
		"no-extra-parens": 0,
		"no-implicit-coercion": 0,
		"no-inline-comments": 0,
		"no-invalid-this": 0,
		"no-magic-numbers": 0,
		"no-mixed-operators": 0,
		"no-nested-ternary": 0,
		"no-plusplus": 0,
		"no-process-exit": 2,
		"no-tabs": 0,
		"no-ternary": 0,
		"no-undefined": 0,
		"no-unused-vars": [2, { args: "all", argsIgnorePattern: "_", caughtErrors: "all" }],
		"no-useless-escape": 0,
		"no-warning-comments": [1, { location: "anywhere" }],
		"object-curly-spacing": [2, "always"],
		"one-var": [1, "consecutive"],
		"padded-blocks": [2, "never"],
		"prefer-arrow-callback": 2,
		"prefer-destructuring": [2, {
			"VariableDeclarator": {
			  "array": false,
			  "object": true
			},
			"AssignmentExpression": {
			  "array": true,
			  "object": false
			}
		  }, {
			"enforceForRenamedProperties": false
		  }],
		"prettier/prettier": 0,
		"promise/no-callback-in-promise": 0,
		"promise/no-nesting": 0,
		"promise/prefer-await-to-then": 0,

		"putout/putout": [
			"error",
			{
				rules: {
					"apply-numeric-separators": "off",
					"convert-template-to-string": "off",
					"remove-console": "off",
					"split-variable-declarations": "off",
				},
			},
		],

		"quote-props": [2, "consistent-as-needed"],
		"camelcase": 0,
		"quotes": [2, "double", { avoidEscape: true }],
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
		"regexp/no-super-linear-backtracking": 0,
		"regexp/no-super-linear-move": 0,
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
		"regexp/optimal-lookaround-quantifier": 0,
		"regexp/prefer-character-class": 2,
		"regexp/prefer-escape-replacement-dollar-char": 2,
		"regexp/prefer-named-backreference": 2,
		"regexp/prefer-predefined-assertion": 2,
		"regexp/prefer-quantifier": 2,
		"regexp/prefer-range": 2,
		"regexp/prefer-regexp-exec": 2,
		"regexp/prefer-regexp-test": 2,
		"regexp/prefer-unicode-codepoint-escapes": 2,
		"regexp/sort-character-class-elements": 0,
		"regexp/sort-flags": 2,
		"regexp/strict": 0,
		"regexp/unicode-escape": 2,
		"require-unicode-regexp": 0,
		"security/detect-non-literal-regexp": 0,
		"security/detect-non-literal-require": 0,
		"security/detect-object-injection": 2,
		"security/detect-unsafe-regex": 0,
		"sonarjs/cognitive-complexity": 0,
		"sonarjs/elseif-without-else": 0,
		"sonarjs/no-duplicate-string": [2, 3],
		"sort-keys": 2,
		"sort-vars": 2,

		"space-before-function-paren": [
			2,
			{ anonymous: "always", asyncArrow: "always", named: "never" },
		],

		"strict": [2, "global"],
		"switch-case/newline-between-switch-case": 2,
		"unicorn/better-regex": 0,
		"unicorn/consistent-function-scoping": 0,
		"unicorn/custom-error-definition": 2,
		"unicorn/escape-case": 0,
		"unicorn/expiring-todo-comments": 2,
		"unicorn/filename-case": 0,
		"unicorn/import-index": [2, { ignoreImports: true }],
		"unicorn/no-array-callback-reference": 0,
		"unicorn/no-array-for-each": 1,
		"unicorn/no-array-reduce": 0,
		"unicorn/no-keyword-prefix": 2,
		"unicorn/no-unsafe-regex": 0,
		"unicorn/no-unused-properties": 2,
		"unicorn/no-useless-undefined": 1,
		"unicorn/numeric-separators-style": [2, { onlyIfContainsSeparator: true }],
		"unicorn/prefer-module": 0,
		"unicorn/prefer-node-protocol": 0,
		"unicorn/prefer-object-has-own": 0,
		"unicorn/prefer-prototype-methods": 2,
		"unicorn/prefer-spread": 0,
		"unicorn/prefer-string-replace-all": 0,

		"unicorn/prevent-abbreviations": [
			2,
			{
				allowList: { jQuery: true },
				checkDefaultAndNamespaceImports: true,
				checkProperties: true,
				checkShorthandImports: true,
				checkShorthandProperties: true,
				replacements: {
					cmd: {
						command: true,
					},
					lang: { language: true },
					msg: { message: true },
					langs: { languages: true },
					msgs: {messages: true},
					i18n : { internationalization: true },
					l10n : { localization: true },
				},
			},
		],

		"vars-on-top": 2,
		"wrap-iife": [2, "inside"],
	},

	settings: {
		html: { "xml-extensions": [".svg"] },
		jsdoc: {
			maxLines: 5,
			mode: "typescript",
			augmentsExtendsReplacesDocs: true,
			implementsReplacesDocs: true,
		},
	},
};
