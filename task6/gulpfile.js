const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const rimraf = require('rimraf');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

// Server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload)
});

//Html
gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})

//Styles
gulp.task('sass', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'))
})

//Clear
gulp.task('clear', function del(cb) {
    return rimraf('build', cb);
});

//Watchers
gulp.task('watch', function() {
    gulp.watch('src/index.html', gulp.series('html'));
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(
    'clear',
    gulp.parallel('html', 'sass'),
    gulp.parallel('watch', 'server')
    )
);
