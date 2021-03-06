module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true
	},
	extends: "eslint:recommended",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaVersion: 2018
	},
	rules: {
		indent: ["error", "space"],
		"linebreak-style": ["error", "windows"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": "off",
		"no-restricted-syntax": [
			"error",
			{
				selector:
					"CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
				message: "Unexpected property on console object was called"
			}
		]
	}
};
