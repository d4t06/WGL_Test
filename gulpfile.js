var gulp = require("gulp");
// hot reload
var browserSync = require("browser-sync");
// scss
var sass = require("gulp-sass")(require("node-sass"));

function watchScss() {
   return gulp
      .src("scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("css"))
      .pipe(browserSync.stream());
}

function watchHtml() {
   return gulp.src("./index.html").pipe(browserSync.stream());
}

function watch() {
   browserSync.init({
      server: {
         baseDir: "./",
      },
      open: false,
   });

   gulp.watch("**/*.scss", watchScss);
   gulp.watch("index.html", watchHtml);
}

exports.watch = watch;
