export default {
	entry: ['configuration/*.js'],
	ignoreDependencies: [
		'commitlint-config-.*',
		'@commitlint/config-conventional',
		'@somehow-digital/commitlint-plugin-spellcheck',
		'@somehow-digital/semantic-release-config',
	],
	project: ['configuration/**'],
};
