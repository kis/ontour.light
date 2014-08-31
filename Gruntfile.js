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
					style: 'compressed'
				},
				files: {
			    	'css/styles.css': 'assets/sass/style.scss'
			  	}
			}
		},
		requirejs: {
		    options: {
				baseUrl: '.',
				appDir: 'js',
				mainConfigFile: 'js/main.js',
				optimize: 'uglify',
				generateSourceMaps: false,
				preserveLicenseComments: false,
				useStrict: true,
				removeCombined: false,
				modules: [
			 		{
			  			name: 'main',
			  			exclude: [
			  			    "vendor/angular.min",
			  			    "vendor/angular-animate.min",
			  			    "vendor/jquery.min",
			  			    "vendor/require-min"
			  			]
			 		}
				]
		   	},
		   	main: {
				options: {
			 		dir: 'build'
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