const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compileSass() {
    return gulp.src("src/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/estilo"))
}
function minifyJs(){
    return gulp.src("src/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"))
}
function watchFiles(){
    gulp.watch("src/**/*.scss", compileSass);
    gulp.watch("src/**/*.js", minifyJs);
}

exports.default = gulp.series(compileSass,minifyJs,watchFiles)