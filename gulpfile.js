/**
 * author:SunShinewyf
 * date:2016-12-28
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProj = ts.createProject('tsconfig.json');

gulp.task('tsc', function () {
    var tsResult = gulp.src(['js/**/*.ts','js/**/*.tsx','js/*.ts','js/*.tsx'])
        .pipe(ts(tsProj))
        .pipe(gulp.dest('built/'));
});

gulp.task('tsc:w', ['tsc'], function () {
    gulp.watch(['js/**/*.ts','js/**/*.tsx','js/*.ts','js/*.tsx'], ['tsc']);
});