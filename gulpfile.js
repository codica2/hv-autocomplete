var gulp = require("gulp"),
  browserSync = require("browser-sync"),
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

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    notify: false
  });
});
