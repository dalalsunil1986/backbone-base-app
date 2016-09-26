var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    
    baseUrl: "/base/js",
    paths: {
        
        /* jquery + jquery-ui + jquery-plugins*/
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
            '../app/js/libs/jquery/jquery-1.8.0.min'
        ],
        app: '../app/js/app',
        /* underscore */
        underscore: '../app/js/libs/underscore/underscore',
        underscoreString: '../app/js/libs/underscore/underscore.string',

        /* backbone */
        backbone: '../app/js/libs/backbone/backbone',
        backboneRelational: '../app/js/libs/backbone/backbone-relational',
        backboneBinder: '../app/js/libs/backbone/backbone.model-binder',
        backboneValidation: '../app/js/libs/backbone/backbone.validation',
        backboneValidationBootstrap: '../app/js/libs/backbone/backbone.validation.bootstrap',
        backboneMarionette: '../app/js/libs/backbone/backbone.marionette',

        /* bui */
        backboneBUI: '../app/js/libs/bui/backbone-bui',

        /* requirejs plugins*/
        text: '../app/js/libs/require/text',
        domReady: '../app/js/libs/require/domReady',

        /* utility libraries */
        json: '../app/js/libs/utils/json2',
        stringFormat: '../app/js/libs/utils/string-format', /* TODO: move away to the object that actually requires it */
        parser: '../app/js/libs/utils/parser',
        session: '../app/js/libs/utils/session',
        http: '../app/js/libs/utils/http',
        serialize: '../app/js/libs/utils/serialize-object',
        /* a shortcut to have the templates outside of the js directory */
        templates: '../app/templates',


        //added 
        dummyId: '../app/js/libs/utils/dummyId', //loads a dummy id as an initial identity for user
        layout: '.../app/js/libs/utils/layout',
        appConfig: '../app/js/config/app-config'
        
      },

    shim: {
         backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        backboneMarionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        backboneBUI: {
            deps: ['backbone']
        },       
        underscore: {
            exports: '_'
        },
        
        //tests
         backboneValidation: {
            deps: ['backbone']
        },
        backboneValidationBootstrap: {
            deps: ['backbone', 'backboneValidation']
        },
        serialize: {
           deps: ['jquery']
        }
    },

    // dynamically load all test files
  deps: tests,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start

});
