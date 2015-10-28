# grunt-regex-replacer

> Searches through files using regular expressions, and replaces the matches found.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-regex-replacer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-regex-replacer');
```

## The "regex_replacer" task

### Overview
In your project's Gruntfile, add a section named `regex_replacer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  regex_replacer: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Data

#### data.src
Type: `glob`
Required

The files to search through.

#### data.regex
Type: `regex`
Required

This is the regex that will be used to find places in the `data.src` files that should be changed. This can be a single regular expression, or an array of regular expressions.

#### data.replacement
Type: `string` or `function`
Required

If this is a string, each match found using `data.regex` will be replaced with `data.replacement`.

If this is a function, each match found using `data.regex` will be passed to the function. The function should return the string that will replace the match.

For example, to simply replace all matches with the word 'REPLACE', you could do the following:

```js
replacement: 'REPLACE'
```

Or, to append a string to each match, you could do the following:

```js
replacement: function (match) {
  return match + ' additional text';
};
```

### Usage Examples

#### String replacement
In this example, all occurrences of the string `ORIGINAL` are replaced with `REPLACEMENT` in the file `tmp/string.html`.

```js
grunt.initConfig({
  regex_replacer: {
    string: {
      src: 'tmp/string.html',
      regex: /ORIGINAL/g,
      replacement: 'REPLACEMENT'
    }
  }
});
```

#### Function replacement
In this example, all occurrences of the string `ORIGINAL` are appended with ' addtional text' in the file `tmp/function.html`.

```js
grunt.initConfig({
  regex_replacer: {
    function: {
      src: 'tmp/function.html',
      regex: /ORIGINAL/g,
      replacement: function (match) {
        return match + ' additional text';
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
