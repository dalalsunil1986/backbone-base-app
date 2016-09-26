/**
 * The Layout Renderer
 * 
 * Determines the right layout to use on a page
 * 
 */
define([
   'app', 'appConfig'  
],function(App, appConfig) {
  var appname = appConfig.appName; //set the application's name/title
  
  return {
        SingleColumn:function () {          
            
            require(['views/layouts/single-column','views/footer/footer'], function(SingleColumn,FooterView){
                  //add the necessary regions for single column layout
                  App.addRegions({
                        menuRegion  : '.menu',
                        headRegion  : '.head',
                        pageRegion  : '.page',
                        footerRegion: '.footer',
                  });
                  
                  var model = new Backbone.Model();
                  model.set({AppName:appname});

                  var singlecolumn = new SingleColumn({model:model});
                  
                  App.singleColumnLayout.show(singlecolumn);

                  //initiate footer for a single page layout
                  var footerview = new FooterView();
                  App.footerRegion.show(footerview);
                  
            });

        }
    };

    
});
