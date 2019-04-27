import React from "react";
import { graphql } from "gatsby";
import { BlogLayout, Meta, PostMeta } from "../components";

export type PostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
};

export default function Post({ data }: PostProps) {
  const post = data.markdownRemark;
  return (
    <BlogLayout>
      <Meta title={post.frontmatter.title} />
      <div>
        <PostMeta>
          <time>{post.frontmatter.date}</time>
        </PostMeta>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BlogLayout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;
