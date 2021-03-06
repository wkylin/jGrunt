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
        },
        connect: {
            server: {
                options: {
                    port: 8088,
                    hostname: 'localhost',
                    livereload: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['src/main/resources/public/css/**/*.css'],
                tasks: ['cssmin']
            },
        }

    });
    
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin','clean']);

};
