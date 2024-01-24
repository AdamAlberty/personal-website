import GithubIcon from '~icons/lucide/github';
import MailIcon from '~icons/lucide/mail';
import LinkedinIcon from '~icons/lucide/linkedin';
import TwitterIcon from '~icons/lucide/twitter';

type Contact = {
	icon?: any;
	name: string;
	link: string;
	copy?: boolean;
};

export const contacts: Contact[] = [
	{
		icon: MailIcon,
		name: 'alberty.adam@proton.me',
		link: 'mailto:alberty.adam@proton.me',
		copy: true
	},
	{
		icon: LinkedinIcon,
		name: 'LinkedIn',
		link: 'https://linkedin.com/in/adamalberty'
	},
	{
		icon: TwitterIcon,
		name: 'Twitter',
		link: 'https://twitter.com/adamalberty'
	},
	{
		icon: GithubIcon,
		name: 'GitHub',
		link: 'https://github.com/AdamAlberty'
	}
];
