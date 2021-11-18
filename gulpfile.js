const {src, dest, watch} = require('gulp');
const sass = require ('gulp-sass')(require('sass'));


function compile(){
    return src('./app/sass/style.scss')
    .pipe(sass())
    .pipe(dest('./css'));
}


function watchSass(){
    watch('./app/sass/style.scss',compile);
}

exports.compile = compile;
exports.watchSass = watchSass;