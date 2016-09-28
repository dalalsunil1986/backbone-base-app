/**
 * FooterPageView
 *
 * Renders footer
 *
 * 
 */
define([
    'backboneMarionette',
    'text!templates/footer/footer.html'
], function (Marionette, FooterTemplate) {

    return Marionette.ItemView.extend({
        template: FooterTemplate
    });
});
