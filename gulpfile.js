var jsdoc = require('gulp-jsdoc3');
var gulp = require('gulp');

gulp.task('doc', function (cb) {
    var config = require('./jsdoc.json');
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});