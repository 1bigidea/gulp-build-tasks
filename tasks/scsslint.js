// Include Gulp.
var gulp = require('gulp');

// Include Plugins.
var scsslint = require('gulp-scss-lint');

var config = require('../tasks/config').styles;

gulp.task('scsslint', function () {
    return gulp.src(config.src)
        .pipe(scsslint({
            'config': config.lint
        }));
});
