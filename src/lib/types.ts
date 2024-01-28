export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
};

export type Project = {
	name: string;
	description: string;
	tags: string[];
	repository?: string;
	website?: string;
};
