---
title: Optimizing Web Fonts
---

I audited this site with [Google Lighthouse][lighthouse]. The utility flagged web font load times (specifically the “Flash of Invisible Text” or “FOIT”). There are many ways to improve web font performance. Zach Leatherman’s [“A Comprehensive Guide to Font Loading Strategies”][comprehensive] is an excellent resource. I’ll describe the options I considered below.

I could display a fallback font while my web font downloads using [`font-display`][fontdisplay]. Unfortunately, `serif` (my fallback font) does not have the same x-height and width as [`'Crimson Pro S'`][crimsonpros] (my web font). Monica Dinculescu created a [“Font Style Matcher”][fsm] tool that overlaps two fonts so appropriate CSS adjustments (e.g. `letter-spacing`) can be identified. But CSS adjustments would affect both my fallback font _and my web font_.

I could use the JavaScript [Font Loading API][fontapi] to load a web font and then append a `.font-loaded` class to the `html` or `body` element[^2]. This approach would facilitate separate CSS rules for fallback and web fonts. But browser support is limited, and I feared using the Font Loading API alongside `@font-face` declarations would cause duplicate downloads.

So I took a different approach. Web fonts with smaller file sizes download and display more quickly. Rather than adjusting my fallback font, I used the Python library `pyftsubset` to remove OpenType features and unused characters from my web font[^1]. Andrew Brampton describes this in [“Google Font Features”][bramp].

First, I installed `pyftsubset` and related packages:

```Bash
$ pip install fonttools
$ pip install zopfli
$ pip install brotli
```

Next, I installed Filament Group’s [`glyphhanger`][glyphhanger] utility and crawled my website to obtain a list of the Unicode characters I use:

```Bash
$ npm install -g glyphhanger
$ glyphhanger https://www.smockle.com --spider-limit=10
```

Finally, I optimized my fonts with `pyftsubset`:

```Bash
$ pyftsubset crimsonpros-regular.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-regular.woff2
```

The result was a 40% smaller font. I verified the included characters and OpenType features using [Font Drop][fontdrop] and I did a quick visual check before deploying.

[^1]: [Font Squirrel’s Webfont Generator][fontsquirrel] is popular and arguably easier to use. Unfortunately, no matter which options I selected, `liga` and all ligatures were always stripped out. According to [a 2010 tweet][tweet], the Font Squirrel OpenType “Keep All Features” option “works for most fonts, but not all.” Crimson Pro S is one of the unlucky few.

[^2]: Update: I’m now using [`gatsby-plugin-web-font-loader`][gatsbyplugin] to add a CSS class to `html` when my web fonts load. See [this commit][commit]. Fonts are not downloaded twice. This was easy after all!

[comprehensive]: https://www.zachleat.com/web/comprehensive-webfonts/
[lighthouse]: https://developers.google.com/web/tools/lighthouse/#devtools
[fontdisplay]: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
[crimsonpros]: https://github.com/skosch/CrimsonProS
[fsm]: https://meowni.ca/font-style-matcher/
[fontapi]: https://developer.mozilla.org/en-US/docs/Web/API/FontFace/FontFace
[bramp]: https://blog.bramp.net/post/2018/01/21/google-font-features/
[glyphhanger]: https://github.com/filamentgroup/glyphhanger
[fontdrop]: https://fontdrop.info
[fontsquirrel]: https://www.fontsquirrel.com/tools/webfont-generator
[tweet]: https://twitter.com/FontSquirrel/status/14854008143
[gatsbyplugin]: https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/
[commit]: https://github.com/smockle/smockle.com/commit/7efeff6f76e65c57711f31d63ac191b35c64cedf