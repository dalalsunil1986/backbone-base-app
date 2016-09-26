/**
 * LoginModel object
 * 
 * Model containing the interactive data as well as a large part of the logic 
 * surrounding it: conversions, validations, computed properties, 
 * and access control of LoginModel.
 * 
 * Here is where we need to setup logic with database
 * 
 */
define([
    'backbone',
    'dummyId'
], function (Backbone, DummyId) {

    var LoginModel = Backbone.Model.extend({

        defaults: {
            authenticated: false,
            user_id: DummyId.dummyIdentity(), //initialize a dummy id for user
            email: null,
            username: null,
            last_name: null,
            first_name: null,
            password: null,
            confirm_password: null,
            status: null,
            agree_tc: null
        },

        /**
        * validation object
        * @see backbone.validation.js
        */
        validation: {
            email: [{
                required: true,
                msg: 'Please provide your email'
            }, {
                    pattern: 'email',
                    msg: 'Email provided is not correct'
                }
            ],

            password: {
                required: true,
                msg: 'Password is required.'
            }
        }
    });

    return LoginModel;

});