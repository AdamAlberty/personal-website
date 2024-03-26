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

export let monero = {
	walletAddress:
		'45U3VE13aDw7pEtMKHJJVj4J69YaYQVyL1YcwCGR4hVrPo8yC41F9ZeZJSeRxVcq18H34RkaXhqJJFZYRjFurFWrBs6pH5j',
	qrCodeImage: '/monero-qr.png'
};

export const contacts: Contact[] = [
	{
		icon: MailIcon,
		name: 'alberty.adam@proton.me',
		link: 'mailto:alberty.adam@proton.me',
		copy: true
	},
	{
		icon: GithubIcon,
		name: 'GitHub',
		link: 'https://github.com/AdamAlberty'
	},
	{
		icon: LinkedinIcon,
		name: 'LinkedIn',
		link: 'https://linkedin.com/in/adamalberty'
	}
];
