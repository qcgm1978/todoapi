module.exports = function(grunt) {

	grunt.initConfig({
		nodemon: {
			dev: {
				script: 'server.js'
			}
		},
		simplemocha: {
			all: {
				src: ['test/**/*.js']
			}
		},
		env: {
			options: {

			},
			test: {
				NODE_ENV: 'test'
			},
			prod: {
				NODE_ENV: 'production'
			}
		}

	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-env');
	// grunt.loadNpmTasks('grunt-environmental');
	
	grunt.registerTask('default', ['nodemon']);
	grunt.registerTask('test', ['env:test', 'simplemocha']);

};