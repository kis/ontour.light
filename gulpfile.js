var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	jade = require('gulp-jade');

var paths = {
	sass: ['assets/sass/styles.scss'],
	jade: ['assets/jade/index.jade']
};

gulp.task('default', ['sass']);

gulp.task('sass', function () {
	gulp.src(paths.sass)
	    .pipe(sass())
	    .pipe(gulp.dest('css'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
	gulp.src('assets/jade/index.jade')
    	.pipe(jade())
    	.pipe(gulp.dest('.'))
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.jade, ['jade']);
});