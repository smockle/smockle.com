---
title: Technical Stack II
---

I wrote about the technology used to publish and host this blog in [“Technical Stack”][1]. In the last week, I’ve moved from building with Jekyll and deploying to GitHub Pages to building with [Gatsby][2] and deploying to AWS S3.

## Advantages

Because I no longer use Jekyll, I don’t need to maintain a Ruby environment on my system or in Docker. Dependencies can be upgraded automatically via [Greenkeeper][3], a tool I use for other Node.js projects, rather than via [Depfu][4]. My new publishing workflow does not rely on the Dropbox client or API.

I moved [my homepage][5] to Gatsby too. This allowed me to share stylesheets, images, and other assets (e.g. `robots.txt`) between both sites. Gatsby is more flexible than Jekyll about image paths, so images now appear inline in my Markdown editor. Also, I can publish posts and images at the same time.

## Workflow

Federico Viticci writes articles in Markdown and publishes them using Git, the same technologies I use to produce this blog. He has [spoken][6] and [written][7] about his workflow. The tools he uses are powerful, but the publishing process is straightforward. I adopted a similar approach for this blog.

I write in [iA Writer][8] on macOS and iOS. My posts are saved in the iA Writer folder in iCloud. Drafts are stored at the top-level. Publishing is a two-step process that begins by dragging a completed post from the top-level into the `Published` subdirectory. The second step is platform-dependent.

On macOS, [Hazel][9] syncs the `iA Writer/Published` folder in iCloud to a hidden `.posts/Published` folder[^1] in a local clone of my Git repository. 

On iOS, [Working Copy][10] bi-directionally syncs the `iA Writer/Published` folder in iCloud and the `.posts/Published` folder in my Git repository[^2]. I can pull, commit and push via a Siri Shortcut.

Committing and pushing to the GitHub remote will trigger a Travis CI build and deployment. When that completes, the latest files will be uploaded to S3, cached by CloudFront, and viewable here.

## Next steps

I have several ideas for future improvements:

Travis CI builds this blog in stages. First, it builds and runs tests. Next, built files are deployed to a pre-production environment where tests are run again. Finally, files are promoted from the pre-production environment to the production environment and tests are run again. The entire process takes sixteen minutes to complete. I’d like it to finish in less than three.

[`gatsby-plugin-s3`][12] is a Gatsby plugin for uploading files built with Gatsby to an S3 bucket. Although unofficial, it is actively developed. I haven’t compared `gatsby-plugin-s3` with my Python-and-Bash deploy script, but I’d like to stop maintaining my own deploy script and the Python environment it requires.

[`gatsby-remark-vscode`][13] is a Gatsby plugin for applying syntax highlighting to code blocks from Markdown. It’s very new, but thoughtfully-designed and built by a talented developer I know personally. Here is [the story behind the development of `gatsby-remark-vscode`][14].

Previously, this site could be accessed without an Internet connection. This was accomplished with the `ServiceWorker` API. Gatsby provides an official plugin for this—[`gastby-plugin-offline`][11]—but I haven’t tried it yet.

Previously, I used a separate subdomain for this blog (blog.smockle.com). Now, the blog is served from a subdirectory (smockle.com/blog/). I’m still deciding which option better suits current and future content (e.g. apps, podcasts). If I opt to serve content from a subdomain, I’ll need to investigate rewrite rules via Lambda@Edge.

[^1]: Hazel can’t sync deletions unless an entire directory is synced, as documented in [“Sync a Subfolder (Including Deletions)”][15].

[^2]: The iA Writer team blogged about this workflow in [“Word and GitHub”][16].

[1]: /blog/2018/08/22/technical-stack/
[2]: https://www.gatsbyjs.org
[3]: https://greenkeeper.io
[4]: https://depfu.com
[5]: /
[6]: https://appstories.net/episodes/54/
[7]: https://www.macstories.net/ios/my-Markdown-writing-and-collaboration-workflow-powered-by-working-copy-3-6-icloud-drive-and-GitHub/
[8]: https://ia.net/writer
[9]: https://www.noodlesoft.com
[10]: https://workingcopyapp.com
[11]: https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
[12]: https://www.gatsbyjs.org/packages/gatsby-plugin-s3/
[13]: https://www.gatsbyjs.org/packages/gatsby-remark-vscode/
[14]: https://blog.andrewbran.ch/overengineering-a-blog/
[15]: https://www.noodlesoft.com/manual/hazel/advanced-topics/syncing-folders/
[16]: https://ia.net/writer/blog/word-and-github