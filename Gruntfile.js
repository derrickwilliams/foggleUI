module.exports = function(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tempalates;

  grunt.initConfig({
    templatesPath: './templates',
    ngtemplates: {
      build: {
        src: [
          '<%= templatesPath %>/**/*.html'
        ],
        dest: './js/templates.js',
        options: {
          module: 'foggle.Templates',
          standalone: true,
          url: function(url) {
            url = url.split('/');
            return url[url.length-1];
          },
          htmlmin:  {
            collapseWhitespace: true,
            collapseBooleanAttributes: true
          }
        }
      }
    },

    watch: {
      templates:  {
        files: [
          '<%= templatesPath %>/**/*.html'
        ],
        tasks: ['ngtemplates:build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',
    ['ngtemplates:build']
  );
};


