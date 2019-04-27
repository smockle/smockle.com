import React from "react";
import { Link, graphql } from "gatsby";
import { BlogLayout, Meta, PostMeta } from "../components";

export type BlogPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            date: string;
            title: string;
          };
          fields: {
            string: string;
            title: string;
            slug: string;
          };
          excerpt: string;
        };
      }[];
    };
  };
};

export default function BlogPage({ data }: BlogPageProps) {
  return (
    <BlogLayout>
      <Meta title="Blog" />
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <PostMeta>
              <time>{node.frontmatter.date}</time>
            </PostMeta>

            <h1>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h1>

            <p>{node.excerpt}</p>
          </article>
        ))}
      </main>
    </BlogLayout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
