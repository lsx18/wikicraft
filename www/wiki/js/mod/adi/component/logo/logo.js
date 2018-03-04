/**
 * Title : logo component
 * Author : big
 * Date : 2018.2.12 Monday
 * Desc : 
 */

define([
    'app',
    'text!wikimod/adi/component/logo/logo.template.html'
], function(app, template) {
    'use strict';
    
    app.registerComponent("adiLogo", {
        template : template,
        bindings : {

        },
        controller: function(){
            this.componentMode              = 'component';
            this.generateComponentClassName = app.generateComponentClassName.bind(this);
            this.componentStyleName         = "component-logo-style";
            this.logoStyle                  = {
                "logoComponent" : {
                    "width"            : "50%",
                    "height"           : "50px",
                    // "float"            : "left",
                },
            };

            this.css = app.generateClassStyle(this.componentStyleName, this.logoStyle);
        }
    });
});