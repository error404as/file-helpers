module.exports = function(grunt) {
grunt.initConfig({});

//npm install grunt-contrib-cssmin --save-dev
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.config('cssmin', {
     options: {
          shorthandCompacting: false,
          roundingPrecision: -1
     },
     target: {
          files: {
          'css-min/dist/styles.css': 'css-min/src/*.css'
          }
     }
});

grunt.registerTask('default', ['cssmin']);

};
