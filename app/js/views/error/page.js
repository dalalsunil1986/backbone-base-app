/**
 * ErrorPageView
 *
 * Renders http errors
 *
 * 
 */
define([
    'backboneMarionette',
    'http',
    'text!templates/error/page.html'
], function (Marionette, Http, ErrorPageTemplate) {

    return Marionette.ItemView.extend({
        template: ErrorPageTemplate
    });
});