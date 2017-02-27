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
var textbox_basic_model_1 = require("../../../models/textbox/textbox.basic.model");
var ExceedraTextboxBasicComponent = (function () {
    function ExceedraTextboxBasicComponent() {
        this.setup = {
            value: ""
        };
    }
    ExceedraTextboxBasicComponent.prototype.ngOnInit = function () {
    };
    return ExceedraTextboxBasicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", textbox_basic_model_1.TextboxBasic)
], ExceedraTextboxBasicComponent.prototype, "setup", void 0);
ExceedraTextboxBasicComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'exceedra-textbox-basic',
        templateUrl: 'textbox.basic.component.html',
        styleUrls: ['textbox.basic.component.css'],
    }),
    __metadata("design:paramtypes", [])
], ExceedraTextboxBasicComponent);
exports.ExceedraTextboxBasicComponent = ExceedraTextboxBasicComponent;
//# sourceMappingURL=textbox.basic.component.js.map