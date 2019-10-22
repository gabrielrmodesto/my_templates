const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
//const minify = require('gulp-jsmin');
const htmlmin = require('gulp-html-minifier2');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

gulp.task('default', ['sass','htmlmin','imagemin','watch']);

//task for sass
gulp.task('sass', function(){
    return gulp.src("src/assets/scss/style.scss")
               .pipe(concat('style.min.css'))
               .pipe(sass({outputStyle: "compressed"}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/assets/css/'));
});

//task for minify html
gulp.task('htmlmin', function(){
    return gulp.src('src/*.html')
               .pipe(htmlmin({collapseWhitespace: true}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/'))
});

//task for minify images
gulp.task('imagemin', function(){
    return gulp.src('src/assets/img/*.*')
               .pipe(imagemin())
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('watch', function(){
    gulp.watch('src/assets/scss/*.scss', ['sass']);
    gulp.watch('src/*.html',['htmlmin']);
    gulp.watch('src/assets/img/*.*', ['imagemin']);
});