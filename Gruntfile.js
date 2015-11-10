module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            task: {
                src: [
                    'index.html'
                ]
            }
        },
        concat: {
            js: {
                src: ['app/*.js', 'app/**/*.js'],
                dest: 'assets/js/app.min.js'
            }
        },
        uglify: {
            js: {
                files: {
                    'assets/js/app.min.js': ['assets/js/app.min.js']
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
