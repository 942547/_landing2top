var gulp         = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		sass         = require('gulp-sass'),
		uglify       = require('gulp-uglifyjs'),
		
		del						= require('del'),
		imagemin 			= require('gulp-imagemin'),
		pngquant 			= require('imagemin-pngquant'),
		cache 				= require('gulp-cache');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(minifycss())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/plugins-scroll/plugins-scroll.js',
		// './app/libs/pjax/jquery.pjax.js',
		'./app/libs/superfish/dist/js/superfish.min.js',
		'./app/libs/jQuery.mmenu/dist/js/hammer.min.js',
		'./app/libs/jQuery.mmenu/dist/js/jquery.mmenu.all.min.js',
		'./app/libs/jQuery.mmenu/dist/js/jquery.mmenu.dragopen.min.js',
		'./app/libs/jQuery.mmenu/dist/js/loader.js',
		'./app/libs/CreativeLinkEffects/js/modernizr.custom.js',
		// textillate
		'./app/libs/textillate/textillate.js',
		'./app/libs/textillate/assets/jquery.lettering.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);


gulp.task('build', ['clean', 'img', 'styles', 'scripts'], function(){
	
	var buildCss = gulp.src('app/css/*css')
	.pipe(gulp.dest('dist/css'));
	
	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));
	
	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));
	
	var buildHtml = gulp.src('app/*')
	.pipe(gulp.dest('dist'));
	
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		prograssive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});