// Include gulp
var gulp = require('gulp');

//Include Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var compass = require('gulp-compass');


// Lint Task
gulp.task('lint', function() {
  gulp.src(['./public/javascripts/**/*.js', '!./public/javascripts/config/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('compass', function() {
    gulp.src('./public/stylesheets/scss/**.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'css'
        }))
        .pipe(gulp.dest('./public/stylesheets/scss'));
});

gulp.task('watch', function() {
  gulp.watch('./public/javascripts/**',['lint']);
  gulp.watch('./public/stylesheets/scss/**',['compass']);
});

// Default task
gulp.task('default', ['lint','compass','watch']);