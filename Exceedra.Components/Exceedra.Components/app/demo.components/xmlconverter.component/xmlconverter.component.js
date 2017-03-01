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
var XmlCoverterComponent = (function () {
    function XmlCoverterComponent() {
        this.jsonOutput = new core_1.EventEmitter();
    }
    XmlCoverterComponent.prototype.manualOutput = function () {
        this.jsonOutput.emit(this.jsonOut);
    };
    XmlCoverterComponent.prototype.ngOnInit = function () {
        //TODO: Push the xmlIn value to our webservice for conversion to JSON.
    };
    return XmlCoverterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], XmlCoverterComponent.prototype, "xmlIn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], XmlCoverterComponent.prototype, "jsonOut", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], XmlCoverterComponent.prototype, "jsonOutput", void 0);
XmlCoverterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'xml-converter',
        templateUrl: 'xmlconverter.component.html',
        styleUrls: ['xmlconverter.component.css']
    }),
    __metadata("design:paramtypes", [])
], XmlCoverterComponent);
exports.XmlCoverterComponent = XmlCoverterComponent;
//# sourceMappingURL=xmlconverter.component.js.map