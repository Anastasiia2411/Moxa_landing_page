const {src, dest} = require('gulp');
const pug = require('gulp-pug');
const gulp = require('gulp');
const watchI = require('gulp-watch');
const gulp_watch_pug = require('gulp-watch-pug');



function views() {
    return src('./templates/*.pug')
        .pipe(
            pug({
                pretty:true
            })
        )
        .pipe(watchI('./templates/*.pug'))
        .pipe(gulp_watch_pug('./templates/*.pug', { delay: 0 }))
        .pipe(pug())
        .pipe(dest('./dist'));
}




exports.views = views;
exports.default = views;

