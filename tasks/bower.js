// Include Gulp.
var gulp        = require( 'gulp' );

// Include Plugin.
var bower        = require( 'gulp-bower' );

// Run Bower Install
gulp.task( 'bower' , function() {

    // Change current working directory to one level above our `/tasks/` subdir (ie main theme root).
    return bower({cwd: '../'});

});