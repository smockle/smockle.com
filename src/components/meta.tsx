import React from "react";
import Helmet from "react-helmet";
import { Location } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export type MetaProps = {
  description?: string;
  lang?: string;
  meta?: (
    | { name: string; content: string }
    | { property: string; content: string }
  )[];
  keywords?: string[];
  title: string;
};

export function Meta({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title
}: MetaProps) {
  const {
    site
  }: {
    site: {
      siteMetadata: {
        title: string;
        blogTitle: string;
        description: string;
        author: string;
        siteUrl: string;
      };
    };
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            blogTitle
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Location>
      {({ location: { pathname: path } }) => (
        <Helmet
          htmlAttributes={{
            lang,
            ...(path.startsWith("/blog") && { "data-blog": "true" })
          }}
          title={title}
          titleTemplate={`%s | ${
            path.startsWith("/blog")
              ? site.siteMetadata.blogTitle
              : site.siteMetadata.title
          }`}
          meta={[
            {
              name: "description",
              content: metaDescription
            },
            {
              name: "supported-color-schemes",
              content: "light dark"
            },
            {
              property: "og:title",
              content: title
            },
            {
              property: "og:description",
              content: metaDescription
            },
            {
              property: "og:image",
              content: `${site.siteMetadata.siteUrl}/og-image.png`
            },
            {
              property: "og:type",
              content: "website"
            },
            {
              property: "og:site_url",
              content: site.siteMetadata.siteUrl
            },
            {
              name: "twitter:card",
              content: "summary"
            },
            {
              name: "twitter:creator",
              content: site.siteMetadata.author
            },
            {
              name: "twitter:title",
              content: title
            },
            {
              name: "twitter:description",
              content: metaDescription
            },
            {
              property: "twitter:image",
              content: `${site.siteMetadata.siteUrl}/twitter-image.png`
            }
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: "keywords",
                    content: keywords.join(", ")
                  }
                : []
            )
            .concat(meta)}
        />
      )}
    </Location>
  );
}
