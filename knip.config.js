export default {
	entry: ['configuration/*.js'],
	project: ['configuration/**'],
	ignoreDependencies: [
		'commitlint-config-.*',
		'@somehow-digital/commitlint-plugin-spellcheck',
	],
};
