var gulp = require("gulp"),
  minify = require("gulp-minify"),
  babel = require("gulp-babel");

gulp.task("js", function() {
  return gulp
    .src("js/hv-autocomplete.js")
    .pipe(
      babel({
        presets: ["es2015"]
      })
    )
    .pipe(minify())
    .pipe(gulp.dest("dist/js"));
});
