import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import Meta from "../../components/meta";

import styles from "./index.module.css";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Meta title="Blog" />
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <p className={styles.postMeta}>
              <time>{node.frontmatter.date}</time>
            </p>

            <h1>
              <Link className={styles.postLink} to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </h1>

            <p>{node.excerpt}</p>
          </article>
        ))}
      </main>
    </Layout>
  );
};

export default IndexPage;

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
          excerpt
        }
      }
    }
  }
`;
