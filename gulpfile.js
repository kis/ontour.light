var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
	gulp.src('assets/sass/styles.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('css'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('css'));
});