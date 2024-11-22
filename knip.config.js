export default {
	entry: ['configuration/*.js'],
	ignoreDependencies: [
		'commitlint-config-.*',
		'@somehow-digital/commitlint-plugin-spellcheck',
		'@commitlint/config-conventional',
	],
	project: ['configuration/**'],
};
