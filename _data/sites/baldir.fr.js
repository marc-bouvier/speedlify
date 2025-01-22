module.exports = {
	name: "baldir.fr", // optional, falls back to object key
	description: "Marc Bouvier - site personnel",
	// skip if localhost
	// skip: !process.env.CONTEXT
	options: {
		frequency: 60 * 23 * 7, // 23 hours * 7 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://baldir.fr/",
		"https://baldir.fr/blog/",
		"https://baldir.fr/blog/gdcdr-2024-game-of-life-uiua/",
		"https://baldir.fr/blog/tentative-de-contribution-a-fossify-sms/",
		"https://baldir.fr/a-propos/",
		"https://baldir.fr/ai/",
		"https://baldir.fr/notes/",
		"https://baldir.fr/notes/2025-01-14_podcast-reboot-slash-ai-manifesto/",
		"https://baldir.fr/notes/building-a-making-of-for-my-projects/",
		"https://baldir.fr/glossaire/",
		"https://baldir.fr/glossaire/domaine/",
		"https://baldir.fr/glossaire/communs-numeriques/",
		"https://baldir.fr/citations/",
		"https://baldir.fr/citation/richard-p-gabriel-habitability-of-code/",
		"https://baldir.fr/making-of/",
		"https://baldir.fr/making-of/001-echafaudage-avec-11ty/",
		"https://baldir.fr/making-of/024-decoupage-de-la-mise-en-page/",
		"https://baldir.fr/tags/",
		"https://baldir.fr/tags/11ty/",
	]
};