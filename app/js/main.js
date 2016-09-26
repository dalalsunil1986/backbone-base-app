/**
 * main configuration file
 */
// Use ECMAScript 5 Strict Mode
"use strict";

// Define jQuery as AMD module
define.amd.jQuery = true;

// Require.js allows us to configure mappings to paths
// as demonstrated below:
// TODO: Load minified version of the libs or use Require.js's JS compiler (R)
require.config({
    urlArgs: "bust=" + (new Date()).getTime(), //should be taken out on production, prevents caching
    paths: {

        /* jquery + jquery-ui + jquery-plugins*/
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
            'libs/jquery/jquery-1.8.0.min'
        ],

        /* underscore */
        underscore: 'libs/underscore/underscore',
        underscoreString: 'libs/underscore/underscore.string',

        /* backbone */
        backbone: 'libs/backbone/backbone',
        backboneRelational: 'libs/backbone/backbone-relational',
        backboneBinder: 'libs/backbone/backbone.model-binder',
        backboneValidation: 'libs/backbone/backbone.validation',
        backboneValidationBootstrap: 'libs/backbone/backbone.validation.bootstrap',
        backboneMarionette: 'libs/backbone/backbone.marionette',

        /* bui */
        backboneBUI: 'libs/bui/backbone-bui',

        /* requirejs plugins*/
        text: 'libs/require/text',
        domReady: 'libs/require/domReady',

        /* utility libraries */
        json: 'libs/utils/json2',
        stringFormat: 'libs/utils/string-format', /* TODO: move away to the object that actually requires it */
        parser: 'libs/utils/parser',
        session: 'libs/utils/session',
        http: 'libs/utils/http',
        serialize: 'libs/utils/serialize-object',
        /* a shortcut to have the templates outside of the js directory */
        templates: '../templates',

        //added 
        dummyId: 'libs/utils/dummyId', //loads a dummy id as an initial identity for user
        layout: 'libs/utils/layout',
        appConfig: 'config/app-config'
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
        }
    },
    deps: ['jquery', 'underscore'],
    waitSeconds: 15
});

// Let's kick off the application
// Let's kick off the application
require([
    'app',
    'router',
    'session'
], function (App, Router, Session) {

    /* attach router to the app */
    App.router = Router;
    App.start();
    Backbone.history.start();
});
