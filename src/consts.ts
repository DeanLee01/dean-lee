// Global site data.

export const SITE_TITLE = 'Dean Lee';
export const SITE_TAGLINE = 'markets are probability with money attached.';
export const SITE_DESCRIPTION =
	'Notes on stochastic pricing, derivatives, and the economics of AI - for people who like being argued with, gently.';

export const TOPLINE_TEXT = 'Probability with money attached';
export const EPIGRAPH =
	'Thus we may have knowledge of the past but cannot control it; we may control the future but have no knowledge of it.';
export const FOOTER_TAG =
	'I price uncertainty for a living and write about it for people who like being argued with. No price targets.';
export const COLOPHON_LINE = 'Steelman before you argue';

export const AUTHOR = {
	name: 'Dean Lee',
	pronouns: 'he/him',
	born: '7 April 2003',
	edu: "Master's in Business, CUHK",
	bio: "I work in quantitative finance - stochastic models, option and futures pricing. My core work is putting a number on uncertainty: computing what a financial contract is worth today when its payoff depends on events that have not happened yet. A market is really a mechanism that binds probability to money, and my job is to read and price the distribution underneath.",
	photoAlt: 'Dean Lee at a wooden desk with a laptop, wearing glasses and a black cat T-shirt',
};

export const NAV_LINKS = [
	{ href: '/', label: 'Home' },
	{ href: '/essays', label: 'Essays' },
	{ href: '/papers', label: 'Papers' },
];

// Social links shown in the footer (icon + label).
// icon keys: x | threads | reddit | github | youtube | bluesky
// Omit entries until a real URL exists (no placeholder #).
export const SOCIAL_LINKS = [
	// X: pending handle/URL
	{ label: 'Threads', href: 'https://www.threads.com/@deanlee.ai', icon: 'threads' },
	{ label: 'Reddit', href: 'https://www.reddit.com/user/SaltsMoon/', icon: 'reddit' },
	{ label: 'GitHub', href: 'https://github.com/DeanLee01', icon: 'github' },
];

export const COLUMNS = [
	{ roman: 'i', title: 'Pricing, clearly', desc: 'One pricing idea, made legible - no Greeks required.' },
	{ roman: 'ii', title: 'The economics of AI', desc: 'Compute as commodity, inference as COGS.' },
	{ roman: 'iii', title: 'Markets and tradeoffs', desc: 'Risk, variance, intuition - never a price target.' },
	{ roman: 'iv', title: 'Steelman of the week', desc: 'The mocked take, argued to its strongest, then judged.' },
];

export const FOOTER_LINKS = {
	read: [
		{ label: 'Recent essays', href: '/essays' },
		{ label: 'Papers', href: '/papers' },
		{ label: 'Economics of AI', href: '#' },
	],
	about: [
		{ label: 'About the author', href: '/' },
		{ label: 'Weekly dispatch', href: '/#newsletter' },
		{ label: 'RSS feed', href: '/rss.xml' },
	],
};
