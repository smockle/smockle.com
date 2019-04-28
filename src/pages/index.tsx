import React from "react";
import { HomeLayout, Meta, PostMeta } from "../components";
import styles from "./index.module.css";
import { Link } from "@reach/router";

export default function HomePage() {
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
          <picture>
            <source
              media="(min-width: 50em)"
              srcSet={`${require("../images/silhouette.webp")} 485w, ${require("../images/silhouette@2x.webp")} 970w`}
              sizes="(min-width: 50em) 485px, 0px"
              type="image/webp"
            />
            <source
              media="(min-width: 50em)"
              srcSet={`${require("../images/silhouette.jpf")} 485w, ${require("../images/silhouette@2x.jpf")} 970w`}
              sizes="(min-width: 50em) 485px, 0px"
              type="image/jp2"
            />
            <source
              media="(min-width: 50em)"
              srcSet={`${require("../images/silhouette.png")} 485w, ${require("../images/silhouette@2x.png")} 970w`}
              sizes="(min-width: 50em) 485px, 0px"
              type="image/png"
            />
            <img
              alt="Clay Miller"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            />
          </picture>
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
            that have persisted throughout history. I write about this at{" "}
            <Link to="/blog">blog.smockle.com</Link>.
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
            <Link to="/blog/2018/09/08/philosophy-reading-list">
              complete reading list
            </Link>
            .
          </p>
        </article>

        <article className={styles.alternate}>
          <h1>Thought-Haver.</h1>
          <div className={styles.networkIcons}>
            <Link to="/blog" title="Smockle Blog">
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
