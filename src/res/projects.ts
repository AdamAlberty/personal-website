type Project = {
	name: string;
	description: string;
	tags: string[];
	repository?: string;
	website?: string;
};

export const projects: Project[] = [
	{
		name: 'Discord Engagement Tweeter',
		description:
			'Discord bot that watches for reactions to messages and tweets the message if it gets popular. Written with Discordgo package for Go.',
		repository: 'https://github.com/AdamAlberty/discord-engagement-tweeter',
		tags: ['Go', 'Discordgo', 'X API']
	},
	{
		name: 'Nocta',
		description:
			'Website for software development company built with Next.js 13, Tailwind and Framer Motion.',
		website: 'https://nocta.sk',
		tags: ['Next.js 13', 'Tailwind', 'Framer Motion']
	},
	{
		name: 'Memorycu.be',
		description:
			'API for uploading and retrieving created photos. Implemented creating ZIP folders on demand when users want to download all photos. Also created frontend with Wordpress.',
		website: 'https://memorycu.be',
		tags: ['Go', 'Wordpress']
	},
	{
		name: 'This website :)',
		description: `Probably a 5th makeover of my personal website. This time I've bet on simplicity and readability. I have used Sveltekit for "frontend" and Go with Postgres for blog content.`,
		repository: 'https://github.com/AdamAlberty/personal-website',
		website: 'https://adamalberty.com',
		tags: ['Sveltekit', 'Tailwind']
	}
];
