import React from "react";
import Helmet from "react-helmet";
import { Location } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export type MetaProps = {
  description?: string;
  lang?: string;
  meta?: (
    | { name: string; content: string }
    | { property: string; content: string })[];
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
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang,
            ...(location.pathname.startsWith("/blog") && {
              "data-blog": true
            })
          }}
          title={title}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
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
              property: "og:type",
              content: "website"
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
