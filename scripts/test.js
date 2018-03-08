#!/usr/bin/env node

const gulp = require("gulp");
const jest = require("gulp-jest").default;
const expect = require("gulp-expect-file");
const gulpAmpValidator = require("gulp-amphtml-validator");

gulp.task("html", () => {
  return gulp
    .src("src/index.test.js", { read: false })
    .pipe(
      jest({
        bail: true,
        roots: ["<rootDir>/src"]
      })
    )
    .once("error", error => {
      console.error(error);
      process.exit(1);
    })
    .once("end", () => process.exit());
});

gulp.task("amphtml", () => {
  return gulp
    .src("public/index.amp.html")
    .pipe(expect(["public/index.amp.html"]))
    .pipe(gulpAmpValidator.validate())
    .pipe(gulpAmpValidator.format())
    .pipe(gulpAmpValidator.failAfterError());
});

gulp.task("test", ["html", "amphtml"]);
gulp.start("test");
