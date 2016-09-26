define(["../../views/index/page", "jquery", "backboneMarionette"], function (LoginView, $, Marionette) {

  describe("LoginView Test", function () {

    var testApp, widget, regionId = "#test-region";

    beforeEach(function () {

      var fixture = '<div id="fixture">';
      fixture += '<div id="test-region"></div>' +
        '</div>';


      document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);

      testApp = new Marionette.Application();

      testApp.addRegions({
        region: regionId
      });

      testApp.addInitializer(function () {
        widget = new LoginView();

        Backbone.Marionette.TemplateCache.prototype.loadTemplate = function (templateId, callback) {
          // Marionette expects "templateId" to be the ID of a DOM element.
          // But with RequireJS, templateId is actually the full text of the template.
          var template = templateId;

          // Make sure we have a template before trying to compile it
          if (!template || template.length === 0) {
            var msg = "Could not find template: '" + templateId + "'";
            var err = new Error(msg);
            err.name = "NoTemplateError";
            throw err;
          }

          return template;
        };

        testApp.region.show(widget);
      });

      testApp.start();

    });

    afterEach(function () {
      document.body.removeChild(document.getElementById('fixture'));
    });

    it("Should set model's attributes with valid values.", function () {     
      $('input[name=email]').val("testdfsf@gmail.com");
      $('input[name=password]').val("testdfsfs");
      $('button[name=sign-in]').click();

      expect(widget.model.attributes.email.length > 0 && widget.model.attributes.password.length > 0).toBeTruthy();
    });


    it("Should not set model's attributes with invalid values.", function () {
      $('input[name=email]').val("dfsfsf");
      $('input[name=password]').val("testdfsfs");
      $('button[name=sign-in]').click();

      expect(!widget.model.attributes.email && !widget.model.attributes.password).toBeTruthy();
    });


    it("Should call model's save function for valid values.", function () {
      spyOn(widget.model, 'save')

      $('input[name=email]').val("dfsfsf@gmail.com");
      $('input[name=password]').val("testdfsfs");

      var event = new Event('click');
      widget.login(event);

      var param = {
        email: $('input[name=email]').val(),
        password: $('input[name=password]').val()
      };

      expect(widget.model.save).toHaveBeenCalledWith(param);
    });


  });

});
