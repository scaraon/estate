var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("styles", function () {
  return gulp.pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server"));
