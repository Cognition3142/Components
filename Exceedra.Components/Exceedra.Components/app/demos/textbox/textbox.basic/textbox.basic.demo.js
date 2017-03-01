"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExceedraTextboxBasicDemoComponent = (function () {
    function ExceedraTextboxBasicDemoComponent() {
        this.bio = "This is the most simple of textboxes. It accepts any input and has no validation.";
        /* Demo one... */
        this.demoOneMarkdownString = "### Demo One - Basic\n---\nHere is a simple demo displaying the JSON shape required for a plain textbox.   \nModify the value in the JSON and hit Manual Output to see the textbox update.";
        this.demoOneXmlIn = 'This is the xml in...';
        this.demoOneJsonOut = '{ "value": "ABCDEFG" }';
        this.demoOneModelInput = {
            value: "ABCDEFG"
        };
        /* Demo two... */
    }
    ExceedraTextboxBasicDemoComponent.prototype.jsonOutChange = function (event) {
        console.log("Got json out: " + event);
        try {
            this.demoOneModelInput = JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    };
    return ExceedraTextboxBasicDemoComponent;
}());
ExceedraTextboxBasicDemoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'exceedra-textbox-basic-demo',
        templateUrl: 'textbox.basic.demo.html',
        styleUrls: ['textbox.basic.demo.css']
    })
], ExceedraTextboxBasicDemoComponent);
exports.ExceedraTextboxBasicDemoComponent = ExceedraTextboxBasicDemoComponent;
//# sourceMappingURL=textbox.basic.demo.js.map