import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import exorcist from 'exorcist';
import browserSync from 'browser-sync';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import uglifycss from 'gulp-uglifycss';
import sass from 'gulp-sass';
import ifElse from 'gulp-if-else';
import historyFallback from 'connect-history-api-fallback';

process.env.NODE_ENV = 'production'

watchify.args.debug = true;

const sync = browserSync.create();

// Input file.
watchify.args.debug = true;
var bundler = browserify('src/app.js', watchify.args);

// Babel transform
bundler.transform(babelify.configure({
  sourceMapRelative: 'src'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(error){
      console.error( '\nError: ', error.message, '\n');
      this.emit('end');
    })
    .pipe(exorcist('public/assets/js/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
    .pipe(gulp.dest('public/assets/js'));
}

gulp.task('transpile', ['lint'], () => bundle());

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
      .pipe(eslint())
      .pipe(eslint.format())
});

gulp.task('js-watch', ['transpile'], () => sync.reload());

//CSS
gulp.task('css-minify',() =>
gulp.src('src/css/**/*.css',{base:'src/css'})
    .pipe(uglifycss())
    .pipe(gulp.dest('public/assets/css'))
);

gulp.task('sass', () => {
  return gulp.src('src/css/mrinal.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('css-watch', ['css-minify'], () => sync.reload());

//Image
gulp.task('img-minify', () =>
    gulp.src('src/images/**/*.png',{base:'src/images'})
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/images'))
);

gulp.task('img-watch', ['img-minify'], () => sync.reload());

//Server
gulp.task('serve', ['css-watch','transpile'], () => sync.init({
  server: {
     baseDir: './public',
     middleware: [historyFallback()]
   },
  notify: false,
  port: process.env.PORT || 80,
  host: process.env.IP || 'localhost'
}));

//Default
gulp.task('default', ['css-watch','transpile']);

//Watch
gulp.task('watch', ['serve'], () => {
  gulp.watch('src/**/*.js', ['js-watch'])
  gulp.watch('src/css/**/*.css', ['css-watch'])
  gulp.watch('src/css/**/*.scss', ['sass'])
  gulp.watch('public/index.html', sync.reload)
});
