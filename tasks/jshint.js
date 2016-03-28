// Include Gulp.
var gulp = require('gulp');

// Include Plugins.
var jshint = require('gulp-jshint');

var config = require('../tasks/config').scripts;

gulp.task('jshint', function () {
    return gulp.src(config.src)
        .pipe(jshint(config.lint))
        .pipe(jshint.reporter('default'));
});
