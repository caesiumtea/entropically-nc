import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blogs = await getCollection("blog");
    const tuts = await getCollection("tuts");
    const posts = [...blogs, ...tuts];
    return rss({
        title: 'entropically: blog and tutorials',
        description: "vae's random musings (and indie web tutorials)",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}