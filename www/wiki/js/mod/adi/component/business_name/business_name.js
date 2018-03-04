/**
 * Title: business_name component for ADI
 * Author: lsx
 * Date: 2018.3.2
 * Desc: 
 */
define([
    'app', 
    'text!wikimod/adi/component/business_name/business_name.template.html',
], function (app, template) {
    app.registerComponent("adiBusinessname", {
        template : template,
        bindings : {
            business_name : "<"
        },
        controller: function(){
            this.componentMode              = 'component';
            this.generateComponentClassName = app.generateComponentClassName.bind(this);
            this.componentStyleName         = "component-business_name-style";
            this.business_nameStyle                  = {
                "business_nameComponent" : {
                    "width"            : "50%",
                    "height"           : "50px",
                    // "float"            : "right",
                },
                "business_nameComponent > h1" : {
                    "height"                : "50px",
                    "text-align"            : "center",
                    "line-height"           : "50px",
                }
            };

            this.css = app.generateClassStyle(this.componentStyleName, this.business_nameStyle);
        }
    });
});
