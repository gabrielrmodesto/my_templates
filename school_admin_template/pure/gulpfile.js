var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', ['sass','htmlmin','watch']);

// task to minify css
gulp.task('sass', function(){
    return gulp.src('src/assets/css/style.scss')
               .pipe(concat('style.min.css'))
               .pipe(sass({outputStyle: "compressed"}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/assets/css/'));
});

//task to minify html
gulp.task('htmlmin', function(){
    return gulp.src('src/*.html')
               .pipe(htmlmin({collapseWhitespace: true}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/assets/css/*.scss', ['sass']);
    gulp.watch('src/*.html', ['htmlmin']);
});