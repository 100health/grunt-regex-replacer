/*
 * grunt-angular-build-id
 * https://github.com/tobalsgithub/grunt-angular-build-id
 *
 * Copyright (c) 2015 TC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('regex_replacer', 'Replaces strings in files based on regex mapping', function() {
    var files, regexArray, re, filepath, file, results, replacement;

    if (!this.data.src) {
      return grunt.warn('Missing required field "src"');
    }
    if (!this.data.regex) {
      return grunt.warn('Missing required field "regex"');
    }
    if (!this.data.replacement) {
      return grunt.warn('Missing required field "replacement"');
    }

    files = grunt.file.expand(this.data.src);

    regexArray = this.data.regex;

    replacement = this.data.replacement;

    if (!(regexArray instanceof Array)) {
      regexArray = [regexArray];
    }

    var replaceFn = function (result) {
      var replaceText;
      if (typeof replacement === 'function') {
        replaceText = replacement(result);
      } else {
        replaceText = replacement;
      }

      file = file.replace(result, replacement);
    };

    for (var i = 0; i < files.length; i++) {
      filepath = files[i];

      file = grunt.file.read(filepath);

      for (var j = 0; j < regexArray.length; j++) {
        re = regexArray[j];

        results = file.match(re);

        if (!results) {
          continue;
        }

        grunt.log.writeln('Updating ' + filepath);

        results.forEach(replaceFn);

        grunt.file.write(filepath, file);
      }
    }
  });
};
