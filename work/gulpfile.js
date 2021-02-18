const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// dependecies Gulp will be heare
gulp.task('default', function() {
    // Tasks Gulp will be heare
    // launch ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
    // исходный код для Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    // code for explorer
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});