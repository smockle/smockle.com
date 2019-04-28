import React from "react";
import { Link } from "@reach/router";

export function Header() {
  return (
    <header role="banner">
      <div>
        <Link rel="author" to="/blog/">
          <img
            className="logo"
            alt="logo"
            src={require("../images/logo.svg")}
            height="48"
            width="48"
          />
        </Link>
      </div>
    </header>
  );
}
