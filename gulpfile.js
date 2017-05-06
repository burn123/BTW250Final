var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    cleanCSS     = require('gulp-clean-css');
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename');

var css_input = ['css/*.css', 'css/*.scss'],
    js_input = 'js/*.js';

gulp.task('autoprefixer', function () {
    gulp.src(css_input)
        // Error log to keep session going when scss contains error
        .pipe(sass().on('error', sass.logError)) 
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('all.min.css'))
        // .pipe(gulp.dest('dist'))
        // .pipe(rename('all.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    gulp.src(js_input)
        .pipe(concat('all.min.js'))
        //.pipe(gulp.dest('dist'))
        //.pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['autoprefixer', 'scripts'], function() {
        gulp.watch(css_input, ['autoprefixer']);
        gulp.watch(js_input, ['scripts']);
});
