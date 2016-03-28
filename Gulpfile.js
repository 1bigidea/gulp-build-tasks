// Include Gulp.
var gulp = require('gulp'),
    requireDir = require('require-dir'),
    sequence = require('gulp-sequence');
;

requireDir('./tasks', {recurse: true});

// Default Tasks.
gulp.task('default', ['watch']);
gulp.task('serve', ['server', 'watch']);
gulp.task('build', sequence( 'bower', ['scripts', 'images', 'styles', 'i18n'] ));
gulp.task('check', ['scsslint', 'jshint']);
