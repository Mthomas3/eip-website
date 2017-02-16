const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const clean = require('gulp-clean')
const images = require('gulp-imagemin')

gulp.task('js', function () {

    return (gulp.src('app/js/**/*')
      .pipe(gulp.dest('dist/js')))

})

gulp.task('html', function () {
    return (
        gulp.src('app/index.html').pipe(gulp.dest('dist/')))
})

gulp.task('styles', function () {

    return (
        gulp.src('app/styles/*.scss')
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest('dist/styles/'))
            .pipe(browserSync.stream()))
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

gulp.task('fonts', function () {

    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))
})


gulp.task('serve', ['html', 'js', 'styles', 'clean', 'images', 'fonts'], function () {


    browserSync.init({
        server: ['dist/'],
        open: false
    })

    gulp.watch('app/styles/*.scss', ['styles'])
    gulp.watch('app/*.html', ['html', browserSync.reload])
    gulp.watch('app/js/**/*', ['js', browserSync.reload])
})
