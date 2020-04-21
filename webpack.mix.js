const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('dotenv').config();


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        }
    })
    .sass('resources/sass/app.scss', 'public/css').options({
        postCss:[require('autoprefixer'), require('postcss-rtl')]
    })
    .postCss('resources/assets/css/main.css', 'public/css', [
        tailwindcss('tailwind.js'), require('postcss-rtl')()
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/assets/images', 'public/images') // Copy all images from resources to public folder

    .copy('resources/assets/css/website/bootstrap.min.css', 'public/css/website/bootstrap.min.css')
    .copy('resources/assets/css/website/animate.css', 'public/css/website/animate.css') // website animate css
    .copy('resources/assets/css/website/magnific-popup.css', 'public/css/website/magnific-popup.css') // website maginific-popup css
    .copy('resources/assets/css/website/owl.carousel.min.css', 'public/css/website/owl.carousel.min.css') // website owl carousel css
    .copy('resources/assets/css/website/slick.css', 'public/css/website/slick.css') // website owl carousel css
    .copy('resources/assets/css/website/swiper.min.css', 'public/css/website/swiper.min.css') // website owl carousel css
    .copy('resources/assets/css/website/nice-select.css', 'public/css/website/nice-select.css') // website jquery ui css
    .copy('resources/assets/css/website/jquery-ui.min.css', 'public/css/website/jquery-ui.min.css') // website jquery ui css
    .copy('resources/assets/css/website/font-awesome.min.css', 'public/css/website/font-awesome.min.css') // website iconfont css
    .copy('resources/assets/css/website/themify-icons.css', 'public/css/website/themify-icons.css') // website iconfont css
    .copy('resources/assets/css/website/line-awesome.min.css', 'public/css/website/line-awesome.min.css') // website iconfont css
    .copy('resources/assets/css/website/style.css', 'public/css/website/style.css') // website style css
    .copy('resources/assets/css/website/responsive.css', 'public/css/website/responsive.css') // website responsive css


    .copy('resources/assets/js/website/jquery-2.2.4.min.js', 'public/js/website/jquery-2.2.4.min.js') // website jquery js
    .copy('resources/assets/js/website/popper.min.js', 'public/js/website/popper.min.js') // website popper js
    .copy('resources/assets/js/website/bootstrap.min.js', 'public/js/website/bootstrap.min.js') // website bootstrap js
    .copy('resources/assets/js/website/jquery.magnific-popup.js', 'public/js/website/jquery.magnific-popup.js') // website jquery magnific popup js
    .copy('resources/assets/js/website/owl.carousel.min.js', 'public/js/website/owl.carousel.min.js') // website owl carousel js
    .copy('resources/assets/js/website/wow.min.js', 'public/js/website/wow.min.js') // website owl carousel js
    .copy('resources/assets/js/website/slick.js', 'public/js/website/slick.js') // website owl carousel js
    .copy('resources/assets/js/website/waypoints.min.js', 'public/js/website/waypoints.min.js') // website waypoints js
    .copy('resources/assets/js/website/jquery.counterup.min.js', 'public/js/website/jquery.counterup.min.js') // website jquery counterup js
    .copy('resources/assets/js/website/imagesloaded.pkgd.min.js', 'public/js/website/imagesloaded.pkgd.min.js') // website jquery counterup js
    .copy('resources/assets/js/website/isotope.pkgd.min.js', 'public/js/website/isotope.pkgd.min.js') // website jquery counterup js
    .copy('resources/assets/js/website/swiper.min.js', 'public/js/website/swiper.min.js') // website waypoints js
    .copy('resources/assets/js/website/jquery.nice-select.min.js', 'public/js/website/jquery.nice-select.min.js') // website waypoints js
    .copy('resources/assets/js/website/jquery-ui.min.js', 'public/js/website/jquery-ui.min.js') // website jquery ui js
    .copy('resources/assets/js/website/main.js', 'public/js/website/main.js'); // website main js

    // .copy('resources/assets/js/website/jquery.mixitup.min.js', 'public/js/website/jquery.mixitup.min.js') // website jquery mixitup js
    // .copy('resources/assets/js/website/form-validator.min.js', 'public/js/website/form-validator.min.js') // website form validator js
    // .copy('resources/assets/js/website/contact-form-script.js', 'public/js/website/contact-form-script.js') // website contact form js

    // .copyDirectory('resources/assets/css/website', 'public/css/website') // Copy all website css files from resources to public folder
    // .copyDirectory('resources/assets/fonts/website', 'public/fonts/website') // Copy all website fonts files from resources to public folder
    // .copyDirectory('resources/assets/js/website', 'public/js/website') // Copy all website js files from resources to public folder
    // .copyDirectory('resources/assets/sass/website', 'public/sass/website'); // Copy all website sass files from resources to public folder


// Change below options according to your requirement
if (mix.inProduction()) {
    mix.version();
    mix.webpackConfig({
        output: {
            publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
            chunkFilename: 'js/chunks/[name].[chunkhash].js',
        }
    });
    mix.setResourceRoot("/demo/vuexy-vuejs-laravel-admin-template/demo-1/");
}
else{
    mix.webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js',
        }
    });
}
