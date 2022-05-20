module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            css: {
                files: 'assets/**/*.scss',
                tasks: ['sass', 'purgecss', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/main.full.css': 'assets/scss/main.scss',
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

    grunt.loadNpmTasks('grunt-purgecss');
    grunt.loadNpmTasks('grunt-svgmin');

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'purgecss', 'cssmin', 'svgmin']);
};

