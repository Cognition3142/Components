"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ExceedraTextboxNumericDemoComponent = (function () {
    function ExceedraTextboxNumericDemoComponent() {
        this.initialSetup = {
            value: 500.004,
            autoCorrect: true,
            format: 'n3',
            min: 499,
            max: undefined
        };
    }
    ExceedraTextboxNumericDemoComponent.prototype.ngOnInit = function () {
        console.log(this.initialSetup.max);
        console.log(this.initialSetup.min);
        if (this.initialSetup.max || this.initialSetup.min) {
            console.log("truthy");
            this.initialSetup.autoCorrect = true;
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
    }),
    __metadata("design:paramtypes", [])
], ExceedraTextboxNumericDemoComponent);
exports.ExceedraTextboxNumericDemoComponent = ExceedraTextboxNumericDemoComponent;
//# sourceMappingURL=textbox.numeric.demo.js.map