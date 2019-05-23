# www.smockle.com

[![Build Status](https://travis-ci.com/smockle/smockle.com.svg?branch=master)](https://travis-ci.com/smockle/smockle.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/smockle/smockle.com.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/smockle/smockle.com/badge.svg?targetFile=package.json)](https://snyk.io/test/github/smockle/smockle.com?targetFile=package.json)

Main website of Clay Miller ([Smockle](https://www.smockle.com))

## Subsetting Fonts

```Bash
$ pip install fonttools
$ pip install zopfli
$ pip install brotli
$ pyftsubset crimsonpros-regular.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-regular.woff2
$ pyftsubset crimsonpros-italic.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-italic.woff2
$ pyftsubset crimsonpros-bold.otf --layout-features='liga,locl,sups,ordn,tnum,frac,kern' --unicodes="U+0000-00FF, U+0152, U+0153, U+0178, U+02C6, U+02DC, U+2000-206F, U+20AC, U+2122, U+25FC, U+FB01, U+FB02" --flavor=woff2 --output-file=crimsonpros-bold.woff2
```
