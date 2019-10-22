const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
//const minify = require('gulp-jsmin');
const concat = require('gulp-concat');

gulp.task('default', ['sass', 'watch']);

//task for sass
gulp.task('sass', function(){
    return gulp.src("src/assets/scss/style.scss")
               .pipe(concat('style.min.css'))
               .pipe(sass({outputStyle: "compressed"})
               .on('error', notify.onError("Erro: <%= error.message %>")))
               .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('watch', function(){
    gulp.watch('src/assets/scss/*.scss', ['sass']);
});