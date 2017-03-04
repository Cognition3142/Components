"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExceedraTextboxNumericDemoComponent = (function () {
    function ExceedraTextboxNumericDemoComponent() {
        this.bio = "This is a numbers only textbox.   \n\n| Properties    | Examples      | Required  | Description               |\n| ------------- |:-------------:| --------- | :---:                     |\n| value         | Any number    | Yes       | Initial value.            |\n| format        | n0, c2: <a href=\"https://msdn.microsoft.com/en-us/library/dwhawy9k.aspx\">More</a>   | Yes       | Format for value.        |\n| min           | Any number    | No        | Min. possible value.      |\n| max           | Any number    | No        | Max. possible value.      |\n| autoCorrect   | true, false   | No        | Overrides user entries    |\n\n";
        /* Demo one... */
        this.demoOneMarkdownString = "### Demo One - Basic\n---\nHere is a simple demo displaying the JSON shape required for a numeric textbox.";
        this.demoOneXmlIn = 'This is the xml in...';
        this.demoOneJsonOut = "{ \"value\": 500.004, \"format\": \"n3\" }";
        this.demoOneModelInput = JSON.parse(this.demoOneJsonOut);
        /* Demo two... */
        this.demoTwoMarkdownString = "### Demo Two - min & max\n---\nHere is a demo displaying the min and max setting. You may set only one if you like.\n";
        this.demoTwoXmlIn = 'This is the xml in...';
        this.demoTwoJsonOut = "{ \"value\": 500.05, \"format\": \"c2\", \"min\": 495, \"max\": 505 }";
        this.demoTwoModelInput = JSON.parse(this.demoTwoJsonOut);
        /* Demo three... */
        this.demoThreeMarkdownString = "### Demo Three - Auto Correct\n---\nAuto Correct will modify a users input to match with the selected formats precision specifier (i.e. the number bit in the format).   \nIf false then only the visual value will follow the format, but the underlying value will be what the user entered.   \nIf true then the visual value and underlying value will always be equal.   \nIn the example, the visual value is rounded to the formats precision. But click to edit the value and you can see the underlying precision.\n";
        this.demoThreeXmlIn = 'This is the xml in...';
        this.demoThreeJsonOut = "{ \"value\": 500.55555, \"format\": \"n2\", \"autoCorrect\": false }";
        this.demoThreeModelInput = JSON.parse(this.demoThreeJsonOut);
    }
    ExceedraTextboxNumericDemoComponent.prototype.jsonOutChange = function (event) {
        try {
            this.demoOneModelInput = JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    };
    ExceedraTextboxNumericDemoComponent.prototype.jsonOutChangeTwo = function (event) {
        console.log("Got json out: " + event);
        try {
            this.demoTwoModelInput = JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    };
    ExceedraTextboxNumericDemoComponent.prototype.jsonOutChangeThree = function (event) {
        console.log("Got json out: " + event);
        try {
            this.demoThreeModelInput = JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    };
    return ExceedraTextboxNumericDemoComponent;
}());
ExceedraTextboxNumericDemoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'exceedra-textbox-numeric-demo',
        templateUrl: 'textbox.numeric.demo.html',
        styleUrls: ['textbox.numeric.demo.css']
    })
], ExceedraTextboxNumericDemoComponent);
exports.ExceedraTextboxNumericDemoComponent = ExceedraTextboxNumericDemoComponent;
//# sourceMappingURL=textbox.numeric.demo.js.map