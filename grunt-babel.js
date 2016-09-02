module.exports = function(grunt) {
grunt.initConfig({});

// npm i --save-dev babel-cli grunt-babel babel-preset-es2015
grunt.loadNpmTasks('grunt-babel');
grunt.config('babel', {
     options: {
      sourceMap: false,
      presets: ['babel-preset-es2015'] //['babel-preset-es2015', 'babel-preset-react', 'react']
     },
     dist: {
          files: {
               'js-babel/dist/script.js': 'js-babel/src/*.js'
          }
     }
});

grunt.registerTask('default', ['babel']);

};
