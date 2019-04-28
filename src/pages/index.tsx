import React from "react";
import { Link, graphql } from "gatsby";
import { BlogLayout, Meta, PostMeta } from "../components";

export type PostsPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
          };
          fields: {
            string: string;
            title: string;
            slug: string;
            date: string;
          };
          excerpt: string;
        };
      }[];
    };
  };
};

export default function PostsPage({ data }: PostsPageProps) {
  return (
    <BlogLayout>
      <Meta title="Blog" />
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <PostMeta>
              <time>{node.fields.date}</time>
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
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
            date(formatString: "MMM D, YYYY")
          }
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
