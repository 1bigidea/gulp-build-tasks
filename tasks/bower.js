// Include Gulp.
var gulp        = require( 'gulp' );

// Include Plugin.
var bower        = require( 'gulp-bower' );

// Run Bower Install
gulp.task( 'bower' , function() {

    return bower();

});