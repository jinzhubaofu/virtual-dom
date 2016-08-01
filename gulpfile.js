/**
 * @file gulp bulid file
 * @author leon<ludafa@outlook.com>
 */

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

gulp.task('watch', function () {
    return gulp.watch('src/**/*.js', ['default']);
});
