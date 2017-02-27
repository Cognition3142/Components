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
var textbox_numeric_model_1 = require("../../../models/textbox/textbox.numeric.model");
var ExceedraTextboxNumericComponent = (function () {
    function ExceedraTextboxNumericComponent() {
    }
    ExceedraTextboxNumericComponent.prototype.ngOnInit = function () {
        //If min or max set, then autocorrect must be true.
        if (this.setup.max || this.setup.min) {
            this.autoCorrect = true;
        }
    };
    return ExceedraTextboxNumericComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", textbox_numeric_model_1.TextboxNumeric)
], ExceedraTextboxNumericComponent.prototype, "setup", void 0);
ExceedraTextboxNumericComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'exceedra-textbox-numeric',
        templateUrl: 'textbox.numeric.component.html',
        styleUrls: ['textbox.numeric.component.css'],
    }),
    __metadata("design:paramtypes", [])
], ExceedraTextboxNumericComponent);
exports.ExceedraTextboxNumericComponent = ExceedraTextboxNumericComponent;
//# sourceMappingURL=textbox.numeric.component.js.map