/**
 * Created by Jimmy Rodriguez on 28/12/2015.
 */
'use strict';

  /**se declararon las variables para poder utilizar el modulo gulp sus dependencias*/
var gulp = require('gulp');
var connect = require ('gulp-connect');
var stylus = require('gulp-stylus');
var nib = require('nib');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var historyApiFallback = require ('connect-history-api-fallback');

//se creara un servidor web de desarrollo
gulp.task('server', function(){
    connect.server({
      root: './app',
      hostname: '0.0.0.0',
      port: 8081,
      livereload: true,
      middleware: function(connect, opt){

        return [historyApiFallback];

      }
    });

});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


//preprocesa archivos stylus a css y recarga los cambios
gulp.task('css',function(){

  gulp.src('./app/stylesheets/main.styl')
    .pipe(stylus({use: nib()}))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(connect.reload());

});

//recarga el navegador cuando hay cambios en el HTML
gulp.task('html',function(){
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());

});

//vigila los cambios que se produzcan en le navegador en el codigo
//y lanza las tareas relacionadas
gulp.task('watch',function(){
  gulp.watch(['./app/**/*.html'],['html']);
  gulp.watch(['./app/stylesheets/**/*.styl'],['css']);
  gulp.watch(['./app/scripts/**/*.js','./Gulpfile.js'],['jshint']);

});

gulp.task('default',['server','watch']);





