import React from "react";
import { PostMeta } from "./post-meta";

export function Footer() {
  return (
    <footer>
      <div>
        <PostMeta>
          &copy; {new Date().getFullYear()} Clay Miller&#32;~&#32; Licensed
          under{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by/4.0/legalcode"
          >
            CC-BY-4.0
          </a>{" "}
          ~ <a href="/feed.xml">RSS</a>
        </PostMeta>
      </div>
    </footer>
  );
}
