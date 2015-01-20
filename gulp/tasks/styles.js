'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var concat    = require('gulp-concat');
var rename    = require('gulp-rename');

gulp.task('styles', function () {

  return gulp.src(config.styles.src)
    .pipe(concat('main.css'))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .on('error', handleErrors)
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});

/* Alternate setup for sass support */
// var sass         = require('gulp-sass');
// gulp.task('styles', function () {

//   return gulp.src(config.styles.src)
//     .pipe(sass({
//       sourceComments: global.isProd ? 'none' : 'map',
//       sourceMap: 'sass',
//       outputStyle: global.isProd ? 'compressed' : 'nested'
//     }))
//     .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
//     .on('error', handleErrors)
//     .pipe(gulp.dest(config.styles.dest))
//     .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

// });