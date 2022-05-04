import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import minify from 'gulp-minify';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import inject from 'gulp-inject';

const sass = gulpSass(dartSass);

const MINIFY_HTML = 'minify-html';
const MINIFY_JS = 'minify-js';
const MINIFY_CSS = 'minify-css';
const COMPRESS_ASSETS = 'compress-assets';
const INJECT_JS_SOURCE = 'inject-js-source';

gulp.task(MINIFY_HTML, () => {
  return gulp.src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

gulp.task(COMPRESS_ASSETS, () => {
  return gulp.src('./assets/**')
  .pipe(imagemin())
  .pipe(gulp.dest('build/assets'));
});

gulp.task(MINIFY_JS, () => {
  return gulp.src(['index.js'])
    .pipe(minify({ noSource: true, ext: {src: null }}))
    .pipe(gulp.dest('build'));
});

gulp.task(MINIFY_CSS, function () {
  return gulp.src(['./styles/index.scss'])
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(gulp.dest('build'));
});

gulp.task(INJECT_JS_SOURCE, function () {
  const target = gulp.src('./build/index.html');
  const sources = gulp.src(['./build/*.js'], {read: false });
 
  return target.pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest('build'));
});

gulp.task('build', gulp.series(
  MINIFY_JS,
  MINIFY_CSS,
  COMPRESS_ASSETS,
  MINIFY_HTML,
  INJECT_JS_SOURCE
));
