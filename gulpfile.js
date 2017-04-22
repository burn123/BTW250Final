var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass');

var input = ['./css/*.css', './css/*.scss'];

gulp.task('autoprefixer', function () {
    gulp.src(input)
        // Error log to keep session going when scss contains error
        .pipe(sass().on('error', sass.logError)) 
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['autoprefixer'], function() {
        gulp.watch(input, ['autoprefixer']);
});
