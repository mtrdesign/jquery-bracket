module.exports = function(grunt) {
  grunt.initConfig({
    licenseString: '/* Forked by MTR Design 2015-<%= grunt.template.today("yyyy") %>, v.<%= pkg.version %> */\n/* jQuery Bracket | Copyright (c) Teijo Laine 2011-2015 %> | Licenced under the MIT licence */',
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['src/jquery.bracket.less', 'src/jquery.bracket.ts'],
        tasks: ['default']
      }
    },
    less: {
      development: {
        options: {
          paths: ["src/"]
        },
        files: {
          "dist/jquery.bracket.css": "src/jquery.bracket.less",
        }
      }
    },
    shell: {
      compass: {
        command: 'compass compile'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      with_overrides: {
        options: {
          asi: true,
          curly: false,
          strict: false,
          predef : ['jQuery', 'console'],
        },
        files: {
          src: ['src/jquery.bracket.ts']
        }
      }
    },
    cssmin: {
      options: {
        banner: '<%= licenseString %>'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.css'
        }
      }
    },
    uglify: {
      options: {
        compress: {},
        banner: '<%= licenseString %>\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    typescript: {
      base: {
        src: ['src/*.ts'],
        dest: 'dist/jquery.bracket.js'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      less: {
        options: {
          livereload: false
        },
        files: ['src/*.less', 'src/*.ts'],
        tasks: ['less', 'typescript', 'uglify', 'cssmin', 'notify:watch'],
      },
    },

    connect: {
      server: {
        options: {
          port: 8080,
          hostname: '*',
        }
      }
    },

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        title: "Jquery Bracket", // defaults to the name in package.json, or will use project directory's name
        success: false, // whether successful grunt executions should be notified automatically
        duration: 1 // the duration of notification in seconds, for `notify-send only
      }
    },

    notify: {
      watch: {
        options: {
          title: 'Watch Detected',
          message: 'Compilation is done.',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-notify');

  grunt.task.run('notify_hooks');

  grunt.registerTask('default', ['less', 'typescript', 'uglify', 'cssmin', 'connect', 'watch']);
};
