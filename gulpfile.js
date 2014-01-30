// Include gulp
var gulp = require('gulp');

//Include Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
  gulp.src(['./public/javascripts/**/*.js', '!./public/javascripts/config/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch('./public/javascripts/**',['lint']);
});

// Default task
gulp.task('default', ['lint', 'watch']);