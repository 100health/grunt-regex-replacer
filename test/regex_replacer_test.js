'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.angular_build_id = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  string: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/string.html');
    var expected = '<span>REPLACE</span><span>REPLACE</span>';
    test.equal(actual, expected, 'should replace the regex match with REPLACE.');

    test.done();
  },
  function: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/function.html');
    var expected = '<span>ORIGINAL1 additional text</span><span>ORIGINAL2</span>';
    test.equal(actual, expected, 'should append additional text to the match.');

    test.done();
  }
};
