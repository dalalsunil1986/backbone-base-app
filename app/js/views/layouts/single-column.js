/**
 * The Two Column Layout
 *
 * Renders two column layout
 *
 * 
 */
define([
    'backboneMarionette',
    'text!templates/layouts/single-column.html'
], function (Marionette, SingleColumnTemplate) {

    return Marionette.ItemView.extend({
        template: SingleColumnTemplate
    });
});