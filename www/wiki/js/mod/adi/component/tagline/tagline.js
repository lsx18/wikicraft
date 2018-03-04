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
                    "width"            : "50%",
                    "height"           : "50px",
                    // "float"            : "left",
                },
                "taglineComponent  h2" : {
                    "height"                : "50px",
                    "text-align"            : "center",
                    "line-height"           : "50px",
                    // "clear"                 : "both",
                }
            };

            this.css = app.generateClassStyle(this.componentStyleName, this.taglineStyle);
        }
    });
});
