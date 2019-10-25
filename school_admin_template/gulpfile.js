var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');


gulp.task('sass', function(){
    return gulp.src('src/assets/css/style.scss')
               .pipe(sass({outputStyle: "compressed"}))
               .on('error', notify.onError("Erro: <%= error.message %>"))
               .pipe(gulp.dest('dist/assets/css/'));
});