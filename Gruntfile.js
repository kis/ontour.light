module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		javascripts: ['public/js/**/**.js'],
		styles: ['assets/sass/style.scss'],
		jshint: {
			client: ['Gruntfile.js', '<%= javascripts %>'],
			options: {
				sub: true,
				smarttabs: true,
				ignores: []
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['<%= javascripts %>'],
				tasks: ['javascripts']
			},
			styles: {
				files: ['<%= styles %>'],
				tasks: ['sass:dev']
			},
			app: {
				files: 'public/js/**/*.js',
				tasks: ['copy', 'requirejs']
			}
		},
		sass: {
			dev: {
				options: {
					trace: true,
					style: 'compact'
				},
				files: {
			    	'css/styles.css': 'assets/sass/style.scss'
			  	}
			}
		},
		requirejs: {
		    options: {
				baseUrl: '.',
				appDir: 'public/js',
				mainConfigFile: 'public/js/main.js',
				optimize: 'uglify',
				generateSourceMaps: false,
				preserveLicenseComments: false,
				useStrict: true,
				removeCombined: false,
				modules: [
			 		{
			  			name: 'main',
			  			exclude: [
			  			    "lib/jquery.min",
			  			    "lib/mapbox",
			  			    "lib/text",
			  			    "lib/underscore-min",
			  			    "lib/backbone-min",
			  			    "lib/backbone.babysitter.min",
			  			    "lib/backbone.wreqr.min",
			  			    "lib/backbone.marionette.min",
			  			    "lib/scrollbar.min",
			  			    "lib/jquery.mousewheel"
			  			]
			 		}
				]
		   	},
		   	main: {
				options: {
			 		dir: 'public/build'
				}
		   	}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['sass']);
	grunt.registerTask('rjs', ['requirejs']);
};