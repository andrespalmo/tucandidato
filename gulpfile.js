// Include gulp
var gulp = require('gulp');

//Include Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
  gulp.src('./public/javascripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile LESS
gulp.task('less', function() {
  gulp.src('./public/stylesheets/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  gulp.src(['./public/javascripts/**/*.js', '!./public/javascripts/config/**'])
    .pipe(jshint.reporter('default'));
    //.pipe(concat('all.js'))
    //.pipe(gulp.dest('./public/javascripts'))
    //.pipe(rename('all.min.js'))
    //.pipe(uglify())
    //.pipe(gulp.dest('./public/javascripts'));
});

// Default task
gulp.task('default', ['lint', 'less', 'scripts'])

gulp.task('watch', function() {
  gulp.watch('./public/javascripts/**',['scripts']);
});