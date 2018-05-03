module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    nggettext_extract: {
      pot: {
        files: {
          '../po/main.pot': ['../Dev Projects/ASfP/ASfP/index.html','../Dev Projects/ASfP/ASfP/views/*.html']
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-angular-gettext');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify','nggettext_extract']);

};