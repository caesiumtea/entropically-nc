---
title: 'tips and tricks for pausing your gifs with freezeframe.js'
pubDate: 2025-03-03
editDate: 2025-03-05
description: 'want to make your site more accessible to users with motion sensitivity, but struggling to get freezeframe.js working? here are some tips that might help!'
image:
     url: '../assets/img/blinkies.png'
     alt: 'Several web blinkies arranged in rows, featuring slogans such as "tumblr girl" and "disability pride".'
     caption: 'what would we do without blinkies.... (featuring a random assortment from <a href="https://blinkies.cafe/">blinkies.cafe</a>--and no, this image is not supposed to be blinking right now.)'
tags: ["web craft", "accessibility"]
---

<aside class="box">Mar 5 2025 update: added an alternate freezeframe script from <a href="https://sen.fish/">sen.fish</a> and a hypothesis about how to override freezeframe's styling.</aside>

The old web was a magical place, but it was also a pretty overwhelming place. Don't get me wrong, I really do love the maximalism of all the flashing blinkies and silly animations all over the place... But for some folks, all that visual noise can be disorienting, nauseating, or even outright dangerous. To me, a really crucial part of the [web revival](https://thoughts.melonking.net/guides/introduction-to-the-web-revival-1-what-is-the-web-revival) is to merge the spirit of the old web with the new knowledge and technological advancements that we've gained in the past 20 years, in order to make a web that truly belongs to *everyone*. And making it belong to everyone means making it accessible to as many people as possible. But does accessibility mean that we need to give up all of those bright shiny gifs that we love so much?

Fortunately, this is one case where technological improvement can help us make our sites more accessible for more people *and* still keep our silly, flashy traditions alive at the same time. You can actually use JavaScript to swap out animated gifs for a "paused" version, and let the visitor to your site click a button to switch back and forth between the paused and animated versions!

## choosing a script
There are two options that I know of for how to accomplish this. First, the one I see people talk about more often is to use an npm package called [freezeframe.js](https://www.npmjs.com/package/freezeframe), which does something extremely clever and inserts each gif into its own little HTML canvas. It cleverly takes advantage of a _limitation_ of canvas, which is that it can't handle animations, and thus the gif gets stuck on the first frame. There's an excellent [guide by Bechno Kid](https://bechnokid.neocities.org/tutorials/freezeframe/) that goes over how to use this on your Neocities site--no npm required! 

Second, there's an equally clever [script by Solaria](https://solaria.neocities.org/gifpausetut) which uses only a few lines of JavaScript instead of a whole package (which is great for performance and page load time)! The downside of this one is that it requires you to manually create and upload a PNG version of each gif; if you have a lot of gifs, then this might be time consuming, as well as taking up more bandwidth and storage space. Solaria's script does something incredibly simple: when the "freeze" function is triggered, it just edits the `src` attribute to look for a ".png" file extension instead of ".gif".

So which method should you choose? There are pros and cons to each, of course. The biggest drawback of using freezeframe.js may be that it tends to do some funny and somewhat unpredictable things to the placement of the images that it freezes--or just that the package itself seems to be rather finicky. In my less than 2 weeks in the Neocities community, I've already come across multiple people complaining about not being able to get freezeframe.js to work, or if it does work, it does strange things to their layouts. We'll address how to fix _some_ of those problems below (namely, an easy way to stop it from stretching all your gifs to 100% width), but the fact remains that, to most of us, freezeframe.js is kind of a black box. Its source code is complex and we can't tell what exactly it's going to do, how, or why. For that reason, I'm inclined to say that Solaria's method is preferable. I trust code a lot more when I can actually *read* it and understand all of it. More benefits of Solaria's method:
- No reports of it causing disruptions to layout or sizing--as long as you make sure that the PNGs you create are the same size as their gif counterparts, that is
- Works more quickly upon page load than freezeframe.js does, doesn't put those ugly loading circles over your images like freezeframe does while it's starting up, and probably doesn't cause as much of a [Flash of Unstyled Content](https://webkit.org/blog/66/the-fouc-problem/) as freezeframe.js does
- No [dependencies](https://dev.to/sakai-nako/understanding-dependencies-in-programming-4201) to worry about, so less risk of things breaking
- All the code is stored in your own files, not on an external npm server, so that's one less layer of potential connection problems or server outages
- While freezeframe.js always freezes on the first frame of the gif, making your own PNG version gives you the flexibility to choose any frame to pause on
- Created by a Neocities user, for Neocities users, with accessibility in mind

Now, despite all that, I'm actually using freezeframe.js myself. Why? Because I just plain don't have the patience to re-save all my gifs into PNGs. That's really all there is to it. So here's why you might want to pick freezeframe.js anyway, despite its flaws:
- You want a "one and done" solution that doesn't require ongoing work after it's set up, even though the setup itself may take longer than Solaria's method
  - Note that it's still not *entirely* "set it and forget it"; with either one of these methods, you'll still need to remember to apply a special freezeframe class to each gif when you write its HTML tag
- You want to conserve bandwidth or storage space on your host, or you want to improve the experience for visitors with slow connections or limited bandwidth

So have you picked which method you want to use? If you've decided on [Solaria's method](https://solaria.neocities.org/gifpausetut), then there's nothing else in this article for you. I haven't personally tried that method so I don't have anything more to say about it. On the other hand, if you've decided to use freezeframe.js, then now is a good time to go read through all of [Bechno Kid's tutorial](https://bechnokid.neocities.org/tutorials/freezeframe/) and try following along. Meet me back here when you're done! Here are a few quick things to keep in mind as you read through that tutorial, by the way:
- Some code blocks provide either a JavaScript or a JQuery option. If you don't even know what JQuery is, don't worry, you can just ignore those bits. The regular JavaScript option is good for most folks.
- If you go for option 3.2 and decide to put your script in a separate file, don't forget that you still need to link that file in every HTML file where you want to use it.
- If you follow the tutorial to the letter (the way it's currently written as of 2025-03-03), you'll probably find that the start and stop buttons aren't working. That's due to a pesky little detail in the second code block under the heading "4) Customization". See where it says `document.getElementById("#play-gif")` and `document.getElementById("#stop-gif")`? Those `#` (pound) symbols are a typo; you actually need to remove the `#` character from each of those two lines.

## customizing freezeframe.js
Hopefully at this point you have the basic functionality working: your gifs are paused by default, and you have buttons you can click to start and stop them. Most likely, a gif will also start playing when you hover your cursor over it, even when you've clicked the "stop" button.

If it's not working like that yet, don't despair! Drop me a line ([contact info here](/aboutme#contact)) and hopefully I can help you sort it out!

But, even if it's working correctly in those regards, chances are you'll find that it's doing some things you didn't expect or don't like. 

### why are my gifs so big?

In particular, you've probably noticed that the gifs with freezeframe applied are getting stretched out to the full width of their container. Unless you already followed all of the steps in Bechno Kid's "troubleshooting" section and manually set a width and height for your images, in which case you may or may not have this issue. Anyway, it seems that the developer of freezeframe.js thought they were doing us a favor by automatically making our images "responsive" for us... But fortunately, they gave us a simple toggle to turn this "feature" off!

From reading the [documentation on NPM](https://www.npmjs.com/package/freezeframe#options), I discovered that there are actually several options that you can specify when you create the Freezeframe object. One of those options is indeed called "responsive", and it's set `true` by default. To apply these options, first, find the line of code that says `new Freezeframe`. If you followed the part of the tutorial about making buttons, then your full line probably looks like this:

```javascript
const e = new Freezeframe();
```

Most likely, you don't have anything in between those parentheses at the end. That's exactly what we're about to change! If you want to learn more about all the different options that we can apply inside those parentheses, then I'd encourage you to go look back at the documentation linked above--but if you just want to turn the "responsive" image stretching off, here's what you want to replace that line of code with:

```javascript
const e = new Freezeframe({responsive: false});
```

In other words, just take the text `{responsive: false}` and shove it inside those parentheses!

With any luck, your images will now return to their normal sizes and stop getting stretched out! ...but, I do mean the part about luck. When I did this on my site, it completely solved the issue, but for someone else I'm talking to, this alone did *not* solve the problem.

If your images are still becoming too big, then there's one other step you can take--shoutout to [sen.fish](https://sen.fish/) for sharing this solution! The problem is that freezeframe is expanding each image to take up the width of its container... sooo, we can manually put each image inside a container that's already the correct width. I saved this option as Plan B because it *is* pretty tedious to set up, but if the trick above didn't solve your problem, it might be worth a try. Here's an example of what setting this up could possibly look like--you'll have to customize it to whatever resolutions your own images are, though.

In your HTML file:
```html
<div class="img-wrapper">
  <div class="img img-150x30">
    <img src="my_image.gif" width="150" height="30">
  </div>
  <div class="img img-150x30">
    <img src="my_image2.gif" width="150" height="30">
  </div>
  <div class="img img-50x50">
    <img src="my_image3.gif" width="50" height="50">
  </div>
</div>
```

In your CSS file:
```css
/* Code for each resolution */
.img-150x30, .img-150x30 img {
  width: 150px;
}
.img-50x50, .img-50x50 img {
  width: 50px;
}

/* Code for images across resolutions */
.img {
  display: inline-block;
}
.img,
.img img {
  max-width: 100vw;
  height: auto;
}
```

### preventing play on hover

There's one other freezeframe setting that I decided to change on my site, and you might want to as well. The default behavior of freezeframe.js is to start playing a gif whenever the cursor hovers over it. This is cool for the use case where alternating between play and pause is just meant as a fun little visual gimmick, but for accessibility purposes, it's not great--especially since for us Neocities folk, many of our animated gifs are buttons that link to somebody's site, which the user has to hover over in order to click on. If our visitors have already clicked a button that says "stop gifs", we don't want to surprise them with images that suddenly start moving again when they go to click! 

Fortunately, this is another simple option to set inside the `new Freezeframe` initialization. If you want to disable both image resizing *and* play on hover, then change your `new Freezeframe` line to this:

```javascript
e = new Freezeframe({ trigger: false, responsive: false });
```

### play gifs by default

With all the scripts so far, freezeframe is set to activate by default as soon as a page is loaded. But if you want the default behavior to be allowing gifs to play, here's an alternate script from [sen.fish](https://sen.fish/) that does just that. It also creates just one single toggle button that changes its text, instead of separate start and stop buttons.

The JavaScript (replaces *all* JS code from Bechno Kid's tutorial):

```javascript
let ffInstance = null;

function toggle() {
  const btn = document.getElementById("toggle-btn");
  const imgs = document.querySelectorAll('.freezeframe');

  if (ffInstance === null) {
    imgs.forEach(img => {
      if (!img.dataset.ffOriginal) {
        img.dataset.ffOriginal = img.src;
      }
    });
    ffInstance = new Freezeframe('.freezeframe', {
      trigger: 'hover',
      responsive: false,
      overlay: false
    });
    btn.textContent = "Enable animations";
  } else {
    ffInstance.destroy();
    ffInstance = null;
    
    document.querySelectorAll('.ff-container').forEach(container => {
      const innerImg = container.querySelector('img.ff-image');
      if (innerImg) {
        innerImg.classList.remove('ff-image');
        container.parentNode.replaceChild(innerImg, container);
      }
    });
    imgs.forEach(img => {
      if (img.dataset.ffOriginal) {
        img.src = img.dataset.ffOriginal;
      }
    });
    btn.textContent = "Disable animations";
  }
}
```
 
 And the HTML:
 
 ```html
 <button id="toggle-btn" onclick="toggle()">Disable animations</button>
 ```

Toward the middle of the JS code block, you can see the `new Freezeframe()` initialization. If you want to customize any of those options, this is again where to do it--for example, note that Sen's script has the gifs set to animate on hover, so if you don't want that then this is where you'd change it.

For what it's worth, I personally feel that if your purpose in freezing gifs is to improve accessibility for those with visual sensitivities, then the safer bet is to have them stopped by default. The [WCAG accessibility standards](https://www.w3.org/TR/WCAG21/#pause-stop-hide) consider auto-playing animations acceptable as long as they can be stopped within 3 seconds--but consider, how obvious is your stop button, to be confident that a user will locate it within 3 seconds (no matter their screen size)?

One more good idea if you're going to have gifs play by default would be to check whether the user has set [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) in their browser, and in that case, swap to disabling them by default. I'd like to come back to this later and add it to the script for you, but for now, I encourage you to do a little of your own research and see if you can figure out how to add a check for that!


### an aside about package versions

Is your code still not having the results that I'm claiming it should have? One possible reason is that you and I might be using different _package versions_. When the creators of freezeframe.js make changes to its code, they release a new version of the package. And you never know what kind of things can change when they update the package! If you're following Bechno Kid's tutorial, then you probably used this URL in your script source: `https://unpkg.com/freezeframe/dist/freezeframe.min.js`

The thing is, that URL will automatically redirect you to whatever the latest version of the package is. When you're reading this in future, it may well point you to a different version than the one I'm using as I write it. The version I'm using right now is **5.0.2**. 

To check what version _you're_ using, check what URL is in the script tag that you used to link to the package. Is it just `https://unpkg.com/freezeframe/dist/freezeframe.min.js`? Or does it have an `@` followed by some numbers, like this: `https://unpkg.com/freezeframe@5.0.2/dist/freezeframe.min.js`? If it does have the @ sign and the numbers, then that series of 3 numbers is your version. And if you don't see any numbers, then take the URL and paste into your web browser's address bar. It should redirect you to a URL that does have the version numbers in it now. 

If you want the best chance of my advice being compatible with your code, then you may want to try manually setting your site to use the same version of freezeframe.js that I'm using. You can do that by setting `src="https://unpkg.com/freezeframe@5.0.2/dist/freezeframe.min.js"` for the script tag in your `<head>`. Be warned, though--developers have good reasons for continuously updating their code. If your current version is way ahead of mine, then reverting back to 5.0.2 could cause different kinds of problems for you. Still, if your code isn't working right, specifying a version is yet another option in your toolbox of things to try.

One last note about versions--did you perhaps try to set up freezeframe.js based on [punkwasp's pastebin code](https://pastebin.com/6PmR44cj)? This is outdated code that uses version 3.0.10 of freezeframe.js, so I don't recommend that you use it. Furthermore, this particular script uses JQuery, which I also don't recommend unless you specifically know what you're doing. No offense to Punkwasp, of course--this was surely very helpful at the time--but this code was written in 2023. In terms of npm packages, that's eons ago. Unfortunately, there's no trace of any updated script on [Punkwasp's site](https://punkwasp.neocities.org/), either. Therefore, if you were using Punkwasp's code, I strongly recommend you erase it and try working from Bechno Kid's code instead.

## lingering issues

Since I just went over fixes for some of the problems you might encounter, I figured I should do my due diligence and also note the problems that I _don't_ have a fix for.

- Things seem to just... get nudged out of place?? Like, I have two buttons next to each other in a flexbox, and the one that's a gif just gets pushed up by like 5 pixels so it just slightly sticks out of line... It might be a matter of vertical alignment, which Bechno Kid referred to in one of their troubleshooting tips. But nothing I did to try changing the vertical alignment seemed to have any effect.
- One of my gifs had a class called `centered` on it in addition to the `freezeframe` class. `centered` is a simple [utility class](https://blog.logrocket.com/css-utility-classes-library-extendable-styles/) that applies two styles--`margin: auto; text-align: center;`--and previously, it was doing its job to center my gif on the page. Once freezeframe turns on, though, my gif jumps back to being left-aligned. Inspecting with [devtools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) reveals that the image ends up with all margins set to 0px. Nothing I did to try to specify the styles on the image itself made any difference... But then, when I put the `centered` class on a div _around_ the gif instead, that worked.
  - Update: Well, it _seemingly_ worked when testing locally, but did not work anymore once uploaded to Neocities 🙃 
- One weird thing that MIGHT actually make a difference is what order the tags appear in your `<head>`! For instance, if you had two CSS files linked in your `<head>` in this order: `<link rel="stylesheet" href="styles1.css"><link rel="stylesheet" href="styles2.css">` ...then if there were any conflicts between `styles1.css` and `styles2.css`, `styles2.css` would win and override the "earlier" file. So, I'm not _sure_ if the same thing applies to the order of CSS links and JS script tags... but it's possible that you need to make sure to load in your own CSS _below_ the `<script>` that links to the freezeframe.js URL in order for your styles to override freezeframe's defaults.
  - I wonder if my problem with not being able to override the margins from being set to 0 was ultimately a matter of the file loading order... But unfortunately for me, my site is built with [Astro](https://astro.build/), which has its own way of processing CSS. My HTML files don't even _have_ a link tag, so I can't just bump it down lower in the head. :/
  - UPDATE: **I think the tag order is the answer.** I added an [extra CSS file](https://github.com/caesiumtea/entropically-nc/blob/main/public/ff.css) that bypasses Astro's bundling, which contains just the couple styles that were needed to override the freezeframe defaults, and I placed its link tag below the freezeframe script tag. And I *think* my overrides are actually taking now!

## saving user preferences with localStorage

With any luck, you now have your functional gif pausing, with only minimal disruptions to your layout. Nice! But what if we could make this even better? There's probably a lot of folks who either always want animation on or never want animation on, so what if the visitor didn't have to click a separate start/stop button on each page--what if your website just remembered which setting they wanted and carried it over from one page to the next? Plus, we've already seen how much disruption freezeframe.js can cause--both in terms of ruining your CSS, and in terms of slowing down your page loading--so, if the user already said that they're cool with animations playing anyway, how about we just don't activate freezeframe for them at all?

All that is possible when you tap into the browser's localStorage function, and I managed to get it all working that way on my site! (Open the accessibility menu in the top right corner to try it!) And I'm super excited to teach folks all about how you can do it too!

...however, I have now been writing for quite a few hours and this will take a lot more explaining, so I am going to call it quits for now and save this for either a follow-up post or just something to come back and edit into this post on another day. Sorry for the cliffhanger! In the meantime, can always check this site's [github repo](https://github.com/caesiumtea/entropically-nc/blob/main/src/scripts/freezeframe.js) to investigate on your own and see if you can figure out how I did it!

## closing thoughts

I hope this was able to offer a little bit of guidance to all the folks struggling to make freezeframe.js work for you, or at least clear up some of the uncertainties surrounding it. I really hope that in time it will stop being the norm to see every mention of freezeframe.js accompanied by "...if you can get it to work."

One of these days, if I'm feeling very curious or very bored, I'm hoping to actually dig into the source code of freezeframe.js and try to figure out what makes it tick. At the least, I'm hoping I can come back with a list of "here's the dumb CSS that freezeframe is secretly applying, so here's how we override it"--and at most, maybe I can even fork it into a new package that removes some of those conflicts! If anyone with more Node experience wants to give me a hand with that effort, I'd love the help.

Huge thanks to the folks who already paved the way on bringing freezeframe.js into the Neocities community, [Bechno Kid](https://bechnokid.neocities.org/) and [Punkwasp](https://punkwasp.neocities.org/), and also to [Solaria](https://solaria.neocities.org/) for coming up with a brilliant alternative that I hope some of you have decided to try out instead! Big thanks also to [sen.fish](https://sen.fish/) for the workaround they provided. And to everyone out there working to make your sites more accessible, I see you and I appreciate you!

If anyone has feedback on this article, I'd love to hear it! Check my [contact section](/aboutme#contact) for details. If you have corrections for any mistakes I made, definitely please let me know. Or if this guide was able to help you, it would make me really happy to hear that too! Or feel free to share any extra information about _your_ experience working with either of the two gif freezing methods--I'd love to keep this article updated as sort of a running brainstorm of what's working, what's breaking, and what we might be able to do about it. Lastly, if you're having trouble with your code and just need a hand, feel free to ask!

<aside class="box license-box"><img src="/img/cc-zero.png" alt="CC 0 Public Domain"><p>With the <em>exception</em> of code contributed by others (such as sen.fish), the remaining text of this article is licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/" rel="license noopener noreferrer">Creative Commons CC0 1.0</a> and free to use for any purpose.</p></aside>