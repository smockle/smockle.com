#!/usr/bin/env node

const gulp = require("gulp");
const expect = require("gulp-expect-file");
const gulpAmpValidator = require("gulp-amphtml-validator");

gulp.task("amphtml:validate", () => {
  return gulp
    .src("public/index.amp.html")
    .pipe(expect(["public/index.amp.html"]))
    .pipe(gulpAmpValidator.validate())
    .pipe(gulpAmpValidator.format())
    .pipe(gulpAmpValidator.failAfterError());
});

gulp.task("test", ["amphtml:validate"]);
gulp.start("test");
