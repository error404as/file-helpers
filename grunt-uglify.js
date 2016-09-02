module.exports = function(grunt) {
grunt.initConfig({});

// npm install grunt-contrib-uglify --save-dev
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.config('uglify', {
     options: {},
     main: {
          files: {
               'js-uglify/dist/script.js': 'js-uglify/src/*.js'
          }
     }
});

grunt.registerTask('default', ['uglify']);

};
