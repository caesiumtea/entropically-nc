---
title: 'tips and tricks for pausing your gifs with freezeframe.js'
pubDate: 2025-02-24
description: 'want to make your site more accessible to users with motion sensitivity, but struggling to get freezeframe.js working? here are some tips that might help!'
image:
     url: '/img/blinkies.png'
     alt: 'Several web blinkies arranged in rows, featuring slogans such as "tumblr girl" and "disability pride".'
     caption: 'what would we do without blinkies.... (featuring a random assortment from <a href="https://blinkies.cafe/">blinkies.cafe</a>--and no, this image is not supposed to be blinking right now.)'
tags: ["web craft", "accessibility"]
---
The old web was a magical place, but it was also a pretty overwhelming place. Don't get me wrong, I really do love the maximalism of all the flashing blinkies and silly animations all over the place... But for some folks, all that visual noise can be disorienting, nauseating, or even outright dangerous. To me, a really crucial part of the [web revival](https://thoughts.melonking.net/guides/introduction-to-the-web-revival-1-what-is-the-web-revival) is to merge the spirit of the old web with the new knowledge and technological advancements that we've gained in the past 20 years, in order to make a web that truly belongs to *everyone*. And making it belong to everyone means making it accessible to as many people as possible. But does accessibility mean that we need to give up all of those bright shiny gifs that we love so much?

Fortunately, this is one case where technological improvement can help us make our sites more accessible for more people *and* still keep our silly, flashy traditions alive at the same time. You can actually use JavaScript to swap out animated gifs for a "paused" version, and let the visitor to your site click a button to switch back and forth between the paused and animated versions!

There are two options that I know of for how to accomplish this. First, the one I see people talk about more often is to use an npm package called [freezeframe.js](https://www.npmjs.com/package/freezeframe), which does something extremely clever and inserts each gif into its own little HTML canvas. It cleverly takes advantage of a _limitation_ of canvas, which is that it can't handle animations, and thus the gif gets stuck on the first frame. There's an excellent [guide by Bechno Kid](https://bechnokid.neocities.org/tutorials/freezeframe/) that goes over how to use this on your Neocities site--no npm required! 

Second, there's an equally clever [script by Solaria](https://solaria.neocities.org/gifpausetut) which uses only a few lines of JavaScript instead of a whole package (which is great for performance and page load time)! The downside of this one is that it requires you to manually create and upload a PNG version of each gif; if you have a lot of gifs, then this might be time consuming, as well as taking up more bandwidth and storage space. Solaria's script does something incredibly simple: when the "freeze" function is triggered, it just edits the `src` attribute

- turn of responsive and trigger
- typo in bechnokid tutorial
- localstorage
- explore freezeframe codebase and try to remove css weirdness