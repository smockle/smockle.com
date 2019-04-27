import React from "react";

export function Header() {
  return (
    <header role="banner">
      <div>
        <a rel="author" href={process.env.BLOG_URL}>
          <img
            className="logo"
            alt="logo"
            src={require("../images/logo.svg")}
            height="48"
            width="48"
          />
        </a>
      </div>
    </header>
  );
}
