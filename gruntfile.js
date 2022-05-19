module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            dist: {
                src: ['assets/js/cookiehint.js', 'assets/js/responsive-table.js'],
                dest: 'public/main.js',
            },
        },

        uglify: {
            my_target: {
                files: {
                    'public/main.min.js': ['public/main.js']
                }
            }
        },

        watch: {
            css: {
                files: 'assets/**/*.scss',
                tasks: ['sass', 'purgecss', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['assets/**/*.js'],
                tasks: ['concat', 'uglify'],
            },
        },

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/main.full.css': 'assets/scss/main.scss',       // 'destination': 'source'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'public/main.min.css': ['public/main.css']
                }
            }
        },

        purgecss: {
            my_target: {
                options: {
                    content: ['index.html']
                },
                files: {
                    'public/main.css': ['public/main.full.css']
                }
            }
        },

        svgmin: {
            dist: {
                files: {
                    'public/Logo.svgmin.svg': 'assets/img/Logo.svg'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass',  'concat', 'uglify', 'purgecss', 'cssmin', 'svgmin']);
};

