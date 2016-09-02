module.exports = function(grunt) {
grunt.initConfig({});

// npm install grunt-contrib-less --save-dev
grunt.loadNpmTasks('grunt-contrib-less');
grunt.config('less', {
     dev: {
          options: {
               compress: false
          },
          files: {
               "css-less/dist/styles.css": 'css-less/src/*.*'
          }
     },
     prod: {
          options: {
               compress: true
          },
          files: {
               "css-less/dist/styles.min.css": 'css-less/src/*.*'
          }
     }
});

grunt.registerTask('default', ['less']);

};
