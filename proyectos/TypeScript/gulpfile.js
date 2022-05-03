var gulp = require('gulp');
var ts = require('gulp-typescript');

// Task para compilar TypeScript
gulp.task('typescript', function () {
    // Seleccionar todos los archivos .ts
    var tsResult = gulp.src('./*.ts')
    .pipe(ts({
    noImplicitAny: true
 }));
    // Destino del proyecto compilado
    return tsResult.js.pipe(gulp.dest('built/local'));
});

// Task para observar los cambios al proyecto
gulp.task('watch', function() {
    // Observar proyecto
    gulp.watch('./*.ts', ['typescript']);
});

// Trigger a los tasks
gulp.task('default', ['typescript', 'watch']);