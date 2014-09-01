var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('assets/sass/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('css'));
});