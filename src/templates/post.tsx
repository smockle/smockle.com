import React from "react";
import { graphql } from "gatsby";
import { BlogLayout, Meta, PostMeta } from "../components";

export type PostPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      fields: {
        date: string;
      };
      html: string;
    };
  };
};

export default function PostPage({ data }: PostPageProps) {
  const post = data.markdownRemark;
  return (
    <BlogLayout>
      <Meta title={post.frontmatter.title} />
      <main>
        <div>
          <article itemScope itemType="http://schema.org/BlogPosting">
            <header>
              <PostMeta>
                <time itemProp="datePublished">{post.fields.date}</time>
              </PostMeta>
              <h1 itemProp="name headline">{post.frontmatter.title}</h1>
            </header>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </article>
        </div>
      </main>
    </BlogLayout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;
