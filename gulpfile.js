const fileinclude = require('gulp-file-include');

let project_folder= require('path').basename(__dirname);
let sourse_folder="#src";

let Fs = require('fs');
const { data } = require('jquery');

let path={
    build:{
        html: project_folder+"/",
        css: project_folder+"/css/",
        js: project_folder+"/js/",
        img: project_folder+"/img/",
        fonts: project_folder+"/fonts/",
    },
    src:{
        html: [sourse_folder+"/*.html", "!"+sourse_folder+"/_*.html"],
        css: [sourse_folder+"/scss/*.scss", "!"+sourse_folder+"/scss/fonts.scss", "!"+sourse_folder+"/scss/slider.scss", "!"+sourse_folder+"/scss/nullstyle.scss"],
        js: sourse_folder+"/js/*.js",
        img: sourse_folder+"/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: sourse_folder+"/fonts/*.ttf",
    },
    watch:{
        html: sourse_folder+"/**/*.html",
        css: sourse_folder+"/scss/**/*.scss",
        js: sourse_folder+"/js/**/*.js",
        img: sourse_folder+"/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

let {src,dest}=require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclud = require("gulp-file-include"),
    del = require("del"),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    // uglifyEs = require("gulp-uglify-es").default,
    imageMin = require("gulp-imagemin"),
    // webp  = require("gulp-webp"),
    // webphtml = require("gulp-webp-html"),
    // webpcss = require("gulp-webpcss"),
    importer = require('node-sass-tilde-importer'),
    svgSprite = require("gulp-svg-sprite"),
    ttf2woff = require("gulp-ttf2woff"),
    ttf2woff2 = require("gulp-ttf2woff2"),
    fonter = require("gulp-fonter");

function fonts(){
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
} 
gulp.task('otf2ttf', function(){
    return src([sourse_folder + '/fonts/*.otf'])
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(dest(sourse_folder + '/fonts/'))
})   

function fontsStyle() {
    let file_content = Fs.readFileSync(sourse_folder + '/scss/fonts.scss');
    if (file_content == '') {
        Fs.writeFile(sourse_folder + '/scss/fonts.scss', '', cb);
        return Fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        Fs.appendFile(sourse_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}
function cb(){

}


function browserSync(params) {
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify:false
    })
}    

function html(){
    return src(path.src.html)
        .pipe(fileinclud())
        // .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist:["last 2 versions"],
                cascade: true,
            })
        )
        // .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(
            clean_css()
        )
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js(){
    return src(path.src.js)
        .pipe(fileinclud())
        .pipe(dest(path.build.js))
        // .pipe(
        //     uglifyEs()
        // )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images(){
    return src(path.src.img)
        // .pipe(
        //     webp({
        //         quality:70
        //     })
        // )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imageMin({
               progressive:true,
               svgoPlugins :[{removeViewBox:false}],
               interlaced:true,
               optimizationLevel:3 
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

gulp.task('svgSprite', function(){
    return gulp.src([sourse_folder + '/iconsprite/*.svg'])
     .pipe(
        sprite({
            mode: {
                stack: {
                    sprite : "../icons/icons.svg" //sprite file name
                }
            }
        })
        .pipe(dest(path.build.img))
     )
}) 

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(){
    return del(path.clean);
}

// let build = gulp.series(clean, html);
let build = gulp.series(clean, gulp.parallel(js,css,html, images, fonts), fontsStyle);
let watch=gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html; 
exports.build = build;
exports.watch = watch;
exports.default = watch;