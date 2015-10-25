/*
 * grunt-angular-build-id
 * https://github.com/tobalsgithub/grunt-regex-replacer
 *
 * Copyright (c) 2015 TC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    regex_replacer: {
      string: {
        src: 'tmp/string.html',
        regex: [
          /ORIGINAL1/gi,
          /ORIGINAL2/gi
        ],
        replacement: 'REPLACE'
      },
      function: {
        src: 'tmp/function.html',
        regex: /ORIGINAL1/gi,
        replacement: function (match) {
          return match + ' additional text';
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'setup', 'regex_replacer', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

  grunt.registerTask('setup', 'Sets up files needed for testing.', function() {

    var content = '<span>ORIGINAL1</span><span>ORIGINAL2</span>';

    grunt.file.write('tmp/string.html', content);
    grunt.file.write('tmp/function.html', content);

  });

};
