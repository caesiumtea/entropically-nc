import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection("blog");
    return rss({
        title: 'entropically | blog',
        description: "vae's random musings",
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

export async function GET(context) {
    const posts = await getCollection("tuts");
    return rss({
        title: 'entropically | tutorials',
        description: "tutorials and tips for indie web creators",
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