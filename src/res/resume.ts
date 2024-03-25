type Experience = {
	name: string;
	description: string;
	date: string;
};

type Education = {
	name: string;
	description: string;
	date: string;
};

type Certification = {
	name: string;
	link: string;
};

type Language = {
	name: string;
	level: string;
};

type Resume = {
	tech: string[];
	experience: Experience[];
	education: Education[];
	certifications: Certification[];
	languages: Language[];
};

export const resume: Resume = {
	tech: [
		'HTML, CSS, JS',
		'TypeScript',
		'Node.js',
		'React & Nextjs',
		'Svelte & Sveltekit',
		'Go',
		'Postgres',
		'Git & GitHub',
		'Docker',
		'Linux basics',
		'Unit testing'
	],
	experience: [
		{
			name: 'Freelance',
			description:
				'Created custom software solutions and websites for clients from many different industries.',
			date: '2022-present'
		}
	],
	education: [
		{
			name: 'Faculty of Informatics and Information Technologies STU in Bratislava',
			description: 'Computer Science, Bachelor',
			date: '2023-present'
		},
		{
			name: '1SG Bratislava',
			description: 'General education, Higher Math & CS',
			date: 'grad. 2022'
		}
	],
	certifications: [
		{ name: 'EFSET English C2', link: '/certs/efset-english.png' },
		{
			name: 'FCC Responsive web design',
			link: 'https://www.freecodecamp.org/certification/adam-alberty/responsive-web-design'
		},
		{
			name: 'FCC Javascript Algorithms and data structures',
			link: 'https://www.freecodecamp.org/certification/adam-alberty/javascript-algorithms-and-data-structures'
		}
	],
	languages: [
		{ name: 'Slovak', level: 'C2 - native' },
		{ name: 'English', level: 'C2' },
		{ name: 'Spanish', level: 'A1' }
	]
};
