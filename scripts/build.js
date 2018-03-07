#!/usr/bin/env node

const gulp = require("gulp");
const del = require("del");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const replace = require("gulp-replace");

// Delete all files in the 'public' directory
gulp.task("clean", () => del(["public/**/*"]));

// Copy static, pre-built files
gulp.task("static", () =>
  gulp
    .src([
      "src/**/*.{appcache,css,html,ico,jpf,js,png,svg,txt,webp,woff,woff2,xml}",
      "!src/index.css",
      "!src/index.amp.html"
    ])
    .pipe(gulp.dest("public"))
);

// Add prefixes to CSS
gulp.task("css", () =>
  gulp
    .src("src/index.css")
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(gulp.dest("public"))
);

// Add prefixes & minify CSS, then inject in AMP custom 'style' tag
gulp.task("amphtml", () =>
  gulp
    .src("src/index.css")
    .pipe(postcss([autoprefixer({ browsers: ["last 2 versions"] })]))
    .pipe(cleanCSS())
    .on("data", ({ contents: css }) =>
      gulp
        .src("src/index.amp.html")
        .pipe(
          replace(
            "<style amp-custom></style>",
            `<style amp-custom>${css.toString()}</style>`
          )
        )
        .pipe(gulp.dest("public"))
    )
);

gulp.task("build", ["clean", "static", "css", "amphtml"]);
gulp.start("build");
