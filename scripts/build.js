const CleanCSS = require("clean-css");
const fs = require("fs");
const path = require("path");

const inputCSS = fs.readFileSync(
  path.resolve(__dirname, "../public/index.css"),
  "utf8"
);
const outputCSS = new CleanCSS().minify(inputCSS).styles;

const inputHTML = fs.readFileSync(
  path.resolve(__dirname, "../src/index.amp.html"),
  "utf8"
);
const outputHTML = inputHTML
  .replace("<style amp-custom></style>", "<style amp-custom />")
  .replace("<style amp-custom />", `<style amp-custom>${outputCSS}</style>`);

fs.writeFileSync(
  path.resolve(__dirname, "../public/index.amp.html"),
  outputHTML
);
