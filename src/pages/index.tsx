import React from "react";
import { HomeLayout, Meta, PostMeta } from "../components";
import styles from "./index.module.css";
import { Link } from "@reach/router";
import { graphql } from "gatsby";
import Img, { FixedObject } from "gatsby-image";

type HomePageQuery = {
  data: {
    profile: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
  };
};

export default function HomePage({ data }: HomePageQuery) {
  return (
    <HomeLayout>
      <Meta title="Home" />
      <header className={styles.hero}>
        <div>
          <aside>
            <h1 className={styles.h0}>SALUT!</h1>
            <em>I’m</em>
            <h1>Clay Miller.</h1>
          </aside>
          <Img
            alt="Clay Miller"
            className={styles.profile}
            style={{ display: "inherit" }}
            fixed={data.profile.childImageSharp.fixed}
          />
        </div>
      </header>
      <main>
        <article className={styles.alternate}>
          <h1>Builder.</h1>
          <p>
            Currently, I develop web-based projects at Microsoft. I focus on
            human-computer interaction and assistive technologies. I write a lot
            of TypeScript.
          </p>

          <p>
            I love long-term thinking, and I enjoy working on projects with
            lasting impact. To discern what lasts, I study ideas and behaviors
            that have persisted throughout history. I write about this on{" "}
            <Link to="/blog/">my blog</Link>.
          </p>

          <p>
            Drop me a line, especially if you have a book or podcast
            recommendation!
          </p>
        </article>

        <article>
          <h1>Explorer.</h1>
          <p>
            This year, I’m perusing classic works of philosophy, starting with
            the ancient Greeks. My first purchase was{" "}
            <i>The Collected Dialogues of Plato: Including the Letters</i> (eds.
            Hamilton &amp; Cairns).
          </p>

          <p>
            Here is the{" "}
            <Link to="/blog/2018/09/08/philosophy-reading-list/">
              complete reading list
            </Link>
            .
          </p>
        </article>

        <article className={styles.alternate}>
          <h1>Thought-Haver.</h1>
          <div data-test-id="network-icons" className={styles.networkIcons}>
            <Link to="/blog/" title="Smockle Blog">
              <img
                alt="Smockle Blog"
                className={styles.networkIcon}
                src={require("../images/rss.svg")}
              />
            </Link>
            <a href="mailto:clay@smockle.com" title="Email">
              <img
                alt="Email"
                className={styles.networkIcon}
                src={require("../images/email.svg")}
              />
            </a>
            <a href="https://github.com/smockle" title="GitHub">
              <img
                alt="GitHub"
                className={styles.networkIcon}
                src={require("../images/github.svg")}
              />
            </a>
            <a href="https://twitter.com/yeahthatclay" title="Twitter">
              <img
                alt="Twitter"
                className={styles.networkIcon}
                src={require("../images/twitter.svg")}
              />
            </a>
            <a href="https://linkedin.com/in/smockle" title="LinkedIn">
              <img
                alt="LinkedIn"
                className={styles.networkIcon}
                src={require("../images/linkedin.svg")}
              />
            </a>
          </div>
          <PostMeta>&copy; {new Date().getFullYear()} Clay Miller</PostMeta>
        </article>
      </main>
    </HomeLayout>
  );
}

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "profile@2x.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 392, height: 418) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
