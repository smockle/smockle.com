---  
title: Technical Stack
---

At a friend’s request, here is an overview of this blog’s technical stack.

This blog is hosted on GitHub Pages. Jekyll transforms Markdown files into a static website. An AWS CloudFront distribution provides HTTPS support as, unaffected by DNS record edits¹, GitHub Pages will not serve content over HTTPS².

As I edit Markdown files in Ulysses, Dropbox notifies an AWS API Gateway. A chain of AWS Lambda functions syncs updates from Dropbox to the GitHub Pages repository³. The required resources are described by an AWS CloudFormation template, in spite of limitations⁴.

---

¹ Using a `CNAME` record instead of an `A` record, adding Let’s Encrypt to the `CAA` record, etc.

² “Unavailable for your site because your domain is not properly configured to support HTTPS”

³ [smockle/dropblog][1]

⁴ For example:
* External Swagger files don’t support stage variables or pseudo parameters: [awslabs/serverless-application-model#345][2]
* S3-Lambda permissions and policies that reference S3 bucket names are mutually-exclusive, [unable-validate-circular-dependency-cloudformation][3] notwithstanding
* Neither `Fn::GetAtt` nor `Ref` return ARNs for all resources

[1]:	https://github.com/smockle/dropblog
[2]:	https://github.com/awslabs/serverless-application-model/issues/345
[3]:	https://aws.amazon.com/premiumsupport/knowledge-center/unable-validate-circular-dependency-cloudformation/