import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Header } from "./header";
import { Footer } from "./footer";

export type BlogLayoutProps = {
  children: any;
};

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <StaticQuery
      query={graphql`
        query BlogLayout {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    />
  );
}
