import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const essays = await getCollection('essays');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: essays.map((post) => ({
			...post.data,
			link: `/essays/${post.id}/`,
		})),
	});
}
