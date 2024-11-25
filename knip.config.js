export default {
	entry: ['configuration/*.js'],
	ignoreDependencies: [
		'commitlint-config-.*',
		'@somehow-digital/commitlint-plugin-spellcheck',
		'@commitlint/config-conventional',
		'@semantic-release/commit-analyzer',
		'@semantic-release/github',
		'@semantic-release/npm',
		'@semantic-release/release-notes-generator',
	],
	project: ['configuration/**'],
};
