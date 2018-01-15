const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/*.js', ['js-watch']).on('change', browserSync.reload);
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('useref', () => {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', () => {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('default', () => {
  gulp.src('app/js/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', () => {
  gulp.src('app/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('js', () => {
  return gulp.src('js/*.js')
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], function done() {
  browserSync.reload();
  done();
});

gulp.task('default', ['js'], () => {
  browserSync.init({
    server: {
      baseDir: './app/js'
    },
  });
});

/***************************
  Build
***************************/

gulp.task('default', (callback) => {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', (callback) => {
  runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )
})
