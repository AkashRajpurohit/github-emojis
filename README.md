<h1 align="center">
  <img src="public/banner.png" alt="GraphQL" width="800" height="450" />
  <br>
  Github Emojis
</h1>

<p align="center">
  <a href="https://github.com/AkashRajpurohit/github-emojis"><img src="https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github" height="20" /></a>
  <a href="https://github.com/AkashRajpurohit/github-emojis"><img src="https://visitor-badge.laobi.icu/badge?page_id=akashrajpurohit-github-emojis.visitor-badge" height="20"></a>
  <a href="https://github.com/AkashRajpurohit/github-emojis/stargazers"><img src="https://img.shields.io/github/stars/AkashRajpurohit/github-emojis" height="20"></a>
  <a href="https://github.com/AkashRajpurohit/github-emojis/network/members"><img src="https://img.shields.io/github/forks/AkashRajpurohit/github-emojis" height="20"></a>
  <a href="https://github.com/AkashRajpurohit/github-emojis/issues?q=is%3Aopen+is%3Aissue"><img src="https://img.shields.io/github/issues/AkashRajpurohit/github-emojis" height="20"></a>
  <a href="https://github.com/AkashRajpurohit/github-emojis/blob/master/LICENSE"><img src="https://img.shields.io/github/license/AkashRajpurohit/github-emojis" height="20"></a>
  <a href="https://github-emojis.vercel.app/"><img src="https://img.shields.io/website-up-down-green-red/http/github-emojis.vercel.app.svg" height="20" /></a>
  <a href="https://twitter.com/akashwhocodes">
    <img alt="follow on twitter" src="https://img.shields.io/twitter/follow/akashwhocodes.svg?style=social&label=@akashwhocodes">
  </a>
</p>

---

## Motivation 💪
I often use emojis in my github commit messages, and only very few of them (because I usually forget the names), now there are many awesome gists which provide an entire list of all emojis supported by Github like [rxaviers](https://gist.github.com/rxaviers/7360908) and [roachhd](https://gist.github.com/roachhd/1f029bd4b50b8a524f3c) etc.

However as it loads the entire emoji list right of the bat, it takes up too much time to load the page and not really easy to search while loading, so I thought of creating a small project to solve this problem that I was facing.

## Tech Stack 💻

* [Next.js](https://nextjs.org/)
* [Chakra UI](https://chakra-ui.com/)
* [Typescript](https://www.typescriptlang.org/)
* [FaunaDB](https://fauna.com/)
* [Vercel For Deployment](https://vercel.com)

## Features ✨

* Lazy Loading Emojis from [Github Emoji API](https://developer.github.com/v3/emojis/) using [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) :grimacing:
* Search Feature with debounce :incoming_envelope:
* Current architecture makes use of [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) to serve data as soon as possible and revalidate the stale data to avoid getting Rate Limited by Github :rocket:
* Dark / Light theme switcher :yin_yang:
* Minimalistic and smooth UI :atom_symbol:
* PWA Enabled :zap:

## Bugs or Requests 🐛

If you encounter any problems feel free to open an [issue](https://github.com/AkashRajpurohit/github-emojis/issues/new?template=bug_report.md). If you feel the project is missing a feature, please raise a [ticket](https://github.com/AkashRajpurohit/github-emojis/issues/new?template=feature_request.md) on GitHub and I'll look into it. Pull request are also welcome.

## Where to find me? 👀

[![Website Badge](https://img.shields.io/badge/-akashrajpurohit.com-3b5998?logo=google-chrome&logoColor=white)](https://akashrajpurohit.com/)
[![Twitter Badge](https://img.shields.io/badge/-@akashwhocodes-00acee?logo=Twitter&logoColor=white)](https://twitter.com/AkashWhoCodes)
[![Linkedin Badge](https://img.shields.io/badge/-@AkashRajpurohit-0e76a8?logo=Linkedin&logoColor=white)](https://linkedin.com/in/AkashRajpurohit)
[![Instagram Badge](https://img.shields.io/badge/-@akashwho.codes-e4405f?logo=Instagram&logoColor=white)](https://instagram.com/akashwho.codes/)
[![Telegram Badge](https://img.shields.io/badge/-@AkashRajpurohit-0088cc?logo=Telegram&logoColor=white)](https://t.me/AkashRajpurohit)
