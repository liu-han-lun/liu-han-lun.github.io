var elixir = require('laravel-elixir');

elixir((mix) => {
    mix.copy('./node_modules/font-awesome/fonts', 'public/fonts');
  
    mix.sass([
    	'works.scss',
    	'index.scss'
    	]);

    mix.scripts([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-ui-dist/jquery-ui.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        'works.js'
    ], 'public/js/works.js');
});