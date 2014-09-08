var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	jade = require('gulp-jade');

var paths = {
	sass: ['public/assets/sass/styles.scss'],
	jade: ['public/assets/jade/index.jade']
};

gulp.task('default', ['sass', 'jade']);

gulp.task('sass', function () {
	gulp.src(paths.sass)
	    .pipe(sass())
	    .pipe(gulp.dest('public/css'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('public/css'));
});

gulp.task('jade', function() {
	gulp.src('public/assets/jade/index.jade')
    	.pipe(jade())
    	.pipe(gulp.dest('public'))
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.jade, ['jade']);
});