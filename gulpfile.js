const {src, dest, watch} = require('gulp');
const sass = require ('gulp-sass')(require('sass'));


function compile(){
    return src('./app/sass/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
   }))
    .pipe(dest('./css'));
}


function watchSass(){
    watch('./app/sass/**/*.scss',compile);
}

exports.compile = compile;
exports.watchSass = watchSass;