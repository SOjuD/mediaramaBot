const gulp                   = require('gulp'), // Подключаем Gulp
      imagemin               = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
      responsive             = require('gulp-responsive'); //Подключаем библиотеку для resize изображений



const IMGSPATH = {
  src: './src/assets/img/**/*',
  dist: './dist/assets/img'
};



gulp.task('img', function() {
	return gulp.src(IMGSPATH.src) // Берем все изображения из app
		.pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
    ],{
      verbose: true
    }))
		.pipe(gulp.dest(IMGSPATH.dist)); // Выгружаем на продакшен
});





//img-compressor 
gulp.task('goimg', function() {
	return gulp.src('img-compressor/**/*.*') // Берем все изображения из app
		.pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '80-90', speed: 1})
    ],{
      verbose: true
    }))
		.pipe(gulp.dest('img-compressor/ok')); // Выгружаем на продакшен
});

// //img resize


gulp.task('gores', function () {
  return gulp.src('img-compressor/*.*')
    .pipe(responsive({
      '*.*': {
        width: 100,
        height: 100,
        quality: 70,
        rename: { suffix: '-min' }
      }
     }))
    .pipe(gulp.dest('img-compressor/thumb/'));
});





// gulp.task('default', ['watch']);
