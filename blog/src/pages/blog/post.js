import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Meta from "../../components/meta";

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Meta title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
