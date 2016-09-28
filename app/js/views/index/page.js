/**
 * IndexPageView
 *
 * Renders demo index page with login box
 *
 * 
 */
define([
    'backboneMarionette',
    'session',
    'text!templates/index/page.html',
    '../../models/login',
    'app',
    'http',
    'backboneValidation',
    'backboneValidationBootstrap',
    'serialize',
    'backboneBUI'
], function (Marionette, Session, IndexPageTemplate, LoginModel, App, Http) {

    var LogInView = Marionette.ItemView.extend({

        /**
         * All Marionette views require a template
         */
        template: IndexPageTemplate,

        /**
         * Setup events
         */
        events: {
            'click button[name=sign-in]': 'login'
        },
        
        /**
         * Backbone's initialize method
         */
        initialize: function () {
            _.bindAll(this, 'checkAuth', 'error');
            this.model = new LoginModel(); //assign model to the view
            this.model.on('error', this.error);
            this.model.on('change:authenticated', this.checkAuth);
            Backbone.Validation.bind(this);
        },

        /**
         * Login user
         */
        login: function (e) {
            e.preventDefault();
            var data = this.$('form').serializeObject();
            if (this.model.set(data)) {                
                this.model.url = Http.createUrl('/site/login');
                this.model.save({
                    email: this.$('input[name=email]').val(),
                    password: this.$('input[name=password]').val()
                });                
            }
        },
        /**
         * Checks authorization
         */
        checkAuth: function (model, value) {
            App.router.navigate('dashboard/' + model.get('username'), { trigger: true });
        },
        /**
         * Displays an inline error message
         */
        error: function (model, response) {            
            if (response.responseText) {
                $('.head').html(''); //clear the error section first
                var alertError = new Backbone.BUI.Alert({
                    ctype: Backbone.BUI.Config.Alert.ERROR,
                    title: 'Oops!',
                    message: response.responseText,
                    renderTo: $('.head'),
                    timeout: 3000
                });
                var err = alertError.render();               
            }
        },        
        onRender: function () {
            $("#brand").attr("href", "#/index");
        }
    });

    return LogInView;
});