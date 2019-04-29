import React from "react";
import { HomeLayout, Meta, Header, PostMeta } from "../components";

export default function NotFoundPage() {
  return (
    <HomeLayout>
      <Meta title="404: Not found" />
      <Header />
      <main>
        <article>
          <header>
            <h1>404</h1>
          </header>
          <div>
            <p>Page not found :(</p>
            <p>The requested page could not be found.</p>
          </div>
        </article>
      </main>
      <footer>
        <PostMeta>&copy; {new Date().getFullYear()} Clay Miller</PostMeta>
      </footer>
    </HomeLayout>
  );
}
