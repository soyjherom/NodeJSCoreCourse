const gulp = require('gulp')

gulp.task('build', (cb)=>{
  console.log('Building the site...')
  setTimeout(cb,1000)
})

const server = require('gulp-server-livereload')

gulp.task('serve', (cb)=>{
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true
    }))
})

gulp.task('default', gulp.series('build', 'serve'))