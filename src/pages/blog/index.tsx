import React from "react";
import { Link, graphql } from "gatsby";
import { BlogLayout, Meta, PostMeta } from "../../components";

export type PostsPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            title?: string;
          };
          fields: {
            string: string;
            title: string;
            slug: string;
            date: string;
          };
          htmlExcerpt: string;
          excerpt: string;
        };
      }[];
    };
  };
};

export default function PostsPage({ data }: PostsPageProps) {
  return (
    <BlogLayout>
      <Meta title="Posts" />
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <PostMeta>
              <Link
                to={node.fields.slug}
                style={{ color: "var(--color-text-alternate)" }}
              >
                <time>{node.fields.date}</time>
              </Link>
            </PostMeta>

            {node.frontmatter.title && (
              <h1>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h1>
            )}

            {node.frontmatter.title ? (
              <p>{node.excerpt}</p>
            ) : (
              <p dangerouslySetInnerHTML={{ __html: node.htmlExcerpt }}></p>
            )}
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
          htmlExcerpt: excerpt(pruneLength: 280, format: HTML)
          excerpt(pruneLength: 280, format: PLAIN)
        }
      }
    }
  }
`;
