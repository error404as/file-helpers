module.exports = function(grunt) {
grunt.initConfig({});

// npm install grunt-autoprefixer --save-dev
// npm update caniuse-db
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.config('autoprefixer', {
    options: { },
    main: {
        files: {
          'css-prefixer/dist/styles.css': 'css-prefixer/src/*.css'
        }
    }
});

grunt.registerTask('default', ['autoprefixer']);

};
