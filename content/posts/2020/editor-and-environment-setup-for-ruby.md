---
title: "Editor and Environment Setup for Ruby"
date: 2020-06-25T10:59:00-05:00
draft: false
---

About fifteen years ago, I read [“Why’s (Poignant) Guide to Ruby”](https://poignant.guide), a bizarre introduction to Ruby which featured cartoon foxes. I immediately identified with its commingling of art and code, and its existence made Ruby feel organic and approachable in a way that Java or .NET—with their dry, glossy tomes—did not. Consequently, the first version of [smockle.com](https://www.smockle.com) was built on Rails.

## Whither Rails

JavaScript had neither comic foxes nor glossy books. At that time, to a developer not involved in its standardization, it appeared dormant or worse: After ECMAScript 3 was released in 1999, another version of the spec was not published until 2009’s ECMAScript 5. Although a regular release cadence would not be established until six years later (with ES2015), 2009 marked an important end to decade-long breaks in development. The first version of Node.js appeared in 2009. The first version of TypeScript was published in 2012. And in 2013, the widely-used `0.10.x` version of Node.js was released.

Rails allows you to build backend APIs and frontend UI with Ruby; these developments made it possible to do the same with JavaScript, which could be used for client-side interactions to boot. So in the intervening years, JavaScript (and later TypeScript) subsumed the place Ruby  had occupied in my toolbelt.

## Environment Setup

I recently needed to set up a Ruby development environment. I’m sure folks who regularly write Ruby know better ways to do this. I’m not writing prescriptive instructions, but rather documenting my personal setup so I can remember it. Here’s what I did:

First, I installed Ruby 2.6.6 via `rbenv`[^1]:

    $ rbenv install 2.6.6
    $ rbenv global 2.6.6

Then, I added `rbenv`’s shims to `PATH`, etc. by adding this line to my [`~/.zprofile`](https://github.com/smockle/dotfiles/blob/61d1130ba77541d526e50e2d41ac75ca16da0432/shell/.zprofile#L165-L166):

    eval "$(rbenv init -)"


I restarted Terminal.app to pick up the new configuration, then globally-installed gems:

    $ gem install rubocop
    $ gem install solargraph

I installed these [Visual Studio Code](https://code.visualstudio.com)[^2] extensions:

- `castwide.solargraph`
- `rebornix.ruby`
- `wingrunr21.vscode-ruby`

Then, I configured the Visual Studio Code extensions:

    {
      "ruby.format": "rubocop",
      "ruby.intellisense": false,
      "ruby.useLanguageServer": true,
    }

Finally, I updated Solargraph’s documentation via the Visual Studio Code Command Palette (`⌘⇧P`):

- `Solargraph: Create a Solargraph config file`
- `Solargraph: Build new gem documentation`
- `Solargraph: Download current Ruby documentation`
- `Solargraph: Restart Solargraph`

[^1]: I already had `rbenv` installed, but it’s also available from [Homebrew](https://github.com/rbenv/rbenv#homebrew-on-macos).

[^2]: I prefer [Nova](https://panic.com/nova/)’s macOS [HIG](https://developer.apple.com/design/human-interface-guidelines/macos/overview/themes/)-friendly UI, but Nova doesn’t support auto-fixing TypeScript or Ruby yet, so I’m using Visual Studio Code.