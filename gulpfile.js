/* File: gulpfile.js */
/*
 * Configuration
 */
var PUBLIC_JS = "public/javascripts/";
var PUBLIC_CSS = "public/stylesheets/";
var NODE_MODULES = "node_modules/";
var BOOTSTRAP_SCSS = "node_modules/bootstrap-sass/assets/stylesheets/";
var EXTERNAL_LIBS = {
    bootstrapjs: "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js",
    reactjs: "./node_modules/react/dist/react.min.js",
    jsxtranformer:"./node_modules/react/dist/JSXTransformer.js",
};

// grab our gulp packages
var gulp    = require('gulp'),
    gconcat = require('gulp-concat'),
    gjshint = require('gulp-jshint'),    
    grename = require('gulp-rename'),    
    gsass   = require('gulp-sass'),    
    guglify = require('gulp-uglify'), 
    gutil   = require('gulp-util');

//---------------------------------------------------------------------------------------------------------------------

// create a default task and just log a message
gulp.task('default', ['styles','fonts', 'copy-bootstrapjs', 'copy-reactjs', 'copy-jsxtransformer', 'copy-gsap']);

// Compile our SCSS file into CSS including importing Font Awesome and Bootstrap files.
gulp.task('styles', function() {
 return gulp.src(PUBLIC_CSS + 'style.scss') // This is the name of the SCSS file we want to compile
  // .pipe(sass().on('error', sass.logError))
  .pipe(gsass({includePaths: [BOOTSTRAP_SCSS, BOOTSTRAP_SCSS + "bootstrap/", NODE_MODULES + "font-awesome/scss/"],}))// This is the location where gulp will search for any imports.
  .pipe(gulp.dest(PUBLIC_CSS)); // This is the destination where the file will be saved. 
});
// Copy the Font Awesome files into the public/fonts/ directory
gulp.task('fonts', function() {
    return gulp.src(NODE_MODULES + "font-awesome/fonts/**/*")
    .pipe(gulp.dest('public/fonts'));
});
// Copy the Bootstrap JS library into the public/javascripts/ directory
gulp.task('copy-bootstrapjs', function() {
  return gulp.src(NODE_MODULES + "bootstrap-sass/assets/javascripts/bootstrap.min.js")
    .pipe(gulp.dest(PUBLIC_JS));
});
// Copy the React JS Library into the public/javascripts/ directory
gulp.task('copy-reactjs', function() {
  return gulp.src(NODE_MODULES + "react/dist/react.min.js")
    .pipe(gulp.dest(PUBLIC_JS)); 
});
// Copy the React JSXTransformer library into the public/javascripts/ directory
gulp.task('copy-jsxtransformer', function() {
  return gulp.src(NODE_MODULES + "react/dist/JSXTransformer.js")
    .pipe(gulp.dest(PUBLIC_JS));
});
// Copy the GSAP library into the public/javascripts/ directory
gulp.task('copy-gsap', function() {
  return gulp.src(NODE_MODULES + "gsap/src/minified/TweenMax.min.js")
    .pipe(gulp.dest(PUBLIC_JS));
});