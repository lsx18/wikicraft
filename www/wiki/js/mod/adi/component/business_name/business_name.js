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
                    "float" : "left",
                    "width" : "80%",
                    "height": "35px",
                    // "clear" : "both",
                },
                "business_nameComponent > h1" : {
                    "width"             : "100%",
                    "height"            : "35px",
                    "margin"            : "0",
                    "font-size"         : "32px",
                    "font-family"       : "Microsoft YaHei",
                    "font-weight"       : "bold",
                    "color"             : "#0f2639",
                    "-webkit-line-clamp": "1", 
                    "display"           : "-webkit-box",  
                    "-webkit-box-orient": "vertical", 
                    "overflow"          : "hidden",  
                }
            };

            this.css = app.generateClassStyle(this.componentStyleName, this.business_nameStyle);
        }
    });
});
