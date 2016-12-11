const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const styles = require('gulp-sass')
const images = require('gulp-imagemin')
const clean = require('gulp-clean')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const copy = require('gulp-copy')

gulp.task('copy', function () {
    return (
        gulp.src('app/index.html').pipe(gulp.dest('dist/')))
})

gulp.task('styles', function () {

    return (
        gulp.src('app/styles/*.scss')
            .pipe(plumber())
            .pipe(styles())
            .pipe(gulp.dest('dist/styles/'))
            .pipe(browserSync.stream()))
})

gulp.task('babel', function () {

    gulp.src('app/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js/'))
})

gulp.task('clean', function () {

    return gulp.src('dist/images/',
        {read: false}).pipe(clean())

})

gulp.task('images', function () {

    gulp.src('app/images/**/*')
        .pipe(images())
        .pipe(gulp.dest('dist/images/'))
})


gulp.task('serve', ['copy', 'styles', 'clean', 'images', 'babel'], function () {


    browserSync.init({
        server: ['dist/'],
        open: false
    })

    gulp.watch('app/styles/*.scss', ['styles'])
    gulp.watch('app/*.html', ['copy', browserSync.reload])
    gulp.watch('app/js/*.js', ['babel', browserSync.reload])
})

