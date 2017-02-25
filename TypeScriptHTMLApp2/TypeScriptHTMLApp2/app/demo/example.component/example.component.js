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
var platform_browser_1 = require("@angular/platform-browser");
var example_model_1 = require("./example.model");
var ExampleComponent = (function () {
    function ExampleComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ExampleComponent.prototype.ngOnInit = function () {
        this.trustedDemoHtml = this.sanitizer.bypassSecurityTrustHtml(this.setup.demoHtml);
    };
    return ExampleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", example_model_1.Example)
], ExampleComponent.prototype, "setup", void 0);
ExampleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'example',
        templateUrl: 'example.component.html',
        styleUrls: ['example.component.css'],
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], ExampleComponent);
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.component.js.map