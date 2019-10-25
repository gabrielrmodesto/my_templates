var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

gulp.task('default', gulp.series('sass','watch'));

gulp.task('sass', function(){
    return gulp.src('src/assets/css/style.scss')
               .pipe(concat('style.min.css'))
               .pipe(sass({outputStyle: "compressed"}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('watch', function(){
    gulp.watch('src/assets/scss/*.scss', ['sass']);
});