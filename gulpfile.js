var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass');

gulp.task('default', ['autoprefixer']);



gulp.task('autoprefixer', function () {
    return gulp.src(['./css/*.css', './css/*.scss'])
        .pipe(sass().on('error', sass.logError)) //error log to keep session going when scss contains error
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./dist'));
});
