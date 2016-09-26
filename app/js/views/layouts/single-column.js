/**
 * The Two Column Layout
 *
 * Renders two column layout
 *
 * @author joel capillo <hunyoboy@gmail.com>
 */
define([
    'backboneMarionette',
    'text!templates/layouts/single-column.html'
], function (Marionette, SingleColumnTemplate) {

    return Marionette.ItemView.extend({
        template: SingleColumnTemplate
    });
});