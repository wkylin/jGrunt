module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    
    // Project configuration.
    grunt.initConfig({
        uglify: {
            core: {
                files: [{
                    expand: true,
                    cwd: 'src/main/resources',
                    src: 'public/js/**/*.js',
                    dest: "target/classes",
                    ext: '.min.js'

                }]
            }
        },
        cssmin: {
            build: {
                options: {
                    beautify: {
                        ascii_only: true
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/main/resources',
                    src: ['public/css/**/*.css','!*.min.css'],
                    dest: 'target/classes',
                    ext: '.min.css'
                }]
            }
        },
        clean:{
            js: ["target/classes/**/*.js", "!target/classes/**/*.min.js"],
            css:["target/classes/**/*.css", "!target/classes/**/*.min.css"]
        }
    });
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin',"clean"]);

};
