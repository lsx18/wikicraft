/**
 * Title: tagline component for ADI
 * Author: lsx
 * Date: 2018.3.2
 * Desc: 
 */
define([
    'app', 
    'text!wikimod/adi/component/tagline/tagline.template.html',
], function (app, template) {
    app.registerComponent("adiTagline", {
        template : template,
        bindings : {
            tagline : "<"
        },
        controller: function(){
            this.componentMode              = 'component';
            this.generateComponentClassName = app.generateComponentClassName.bind(this);
            this.componentStyleName         = "component-tagline-style";
            this.taglineStyle                  = {
                "taglineComponent" : {
                    "float" : "left",
                    "width" : "80%",
                    "height": "35px",
                    // "clear" : "both",
                    // "display": "flex",
                    // "justify-content": "flex-end",
                },
                "taglineComponent > h2" : {
                    "width"             : "100%",
                    "height"            : "35px",
                    "margin"            : "0",
                    "font-size"         : "24px",
                    "font-family"       : "Microsoft YaHei",
                    "font-weight"       : "normal",
                    "color"             : "#0f2639",
                    "-webkit-line-clamp": "1", 
                    "display"           : "-webkit-box",  
                    "-webkit-box-orient": "vertical", 
                    "overflow"          : "hidden",  
                }
            };

            this.css = app.generateClassStyle(this.componentStyleName, this.taglineStyle);
        }
    });
});
