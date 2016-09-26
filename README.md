# Backbone Base App

A single page application using backbone.js and require.js with Unit Test in place.

### Prerequisite
Before you begin, Node.js and NPM must be installed on your system. For download instructions for your platform, see http://nodejs.org/download/.

## Running Unit Test
Install karma, karma-requirejs, karma-htmlfile-reporter, and jasmine-core. For my system, I need to install these globally.

```sh
  npm i -g karma
  npm i -g karma-requirejs
  npm i -g jasmine-core
  npm i -g karma-htmlfile-reporter
```

Once installed, run unit test:

```sh
 karma start
```