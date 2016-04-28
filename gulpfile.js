
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.assetsPath = 'assets';
elixir.config.publicPath = 'dist';


elixir(function(mix) {
	mix.copy('node_modules/chart.js/dist/Chart.bundle.js', 'assets/js/');
	mix.copy('assets/js/demo.chart.js', 'dist/js/');

    mix.sass('dashboard.scss');
    mix.scripts([
    	'assets/js/Chart.bundle.js'
    ], 'dist/js/dashboard.js');
});