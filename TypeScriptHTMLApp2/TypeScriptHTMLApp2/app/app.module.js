"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
/* 3rd Part Modules */
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
/* Exceedra Components */
var checkbox_component_1 = require("./components/checkbox.component/checkbox.component");
var textbox_mask_component_1 = require("./components/textbox.component/textbox.mask.component/textbox.mask.component");
var textbox_numeric_component_1 = require("./components/textbox.component/textbox.numeric.component/textbox.numeric.component");
var textbox_basic_component_1 = require("./components/textbox.component/textbox.basic.component/textbox.basic.component");
var datepicker_component_1 = require("./components/datepicker.component/datepicker.component");
var label_component_1 = require("./components/label.component/label.component");
var msdropdown_component_1 = require("./components/msdropdown.component/msdropdown.component");
var ssdropdown_component_1 = require("./components/ssdropdown.component/ssdropdown.component");
/* Example Building Component */
var example_component_1 = require("./demo/example.component/example.component");
/* Exceedra Component Demos */
var textbox_basic_demo_1 = require("./demo/textbox/textbox.basic/textbox.basic.demo");
var textbox_numeric_demo_1 = require("./demo/textbox/textbox.numeric/textbox.numeric.demo");
var textbox_mask_demo_1 = require("./demo/textbox/textbox.mask/textbox.mask.demo");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, kendo_angular_inputs_1.InputsModule],
        declarations: [
            app_component_1.AppComponent,
            checkbox_component_1.ExceedraCheckboxComponent,
            textbox_basic_component_1.ExceedraTextboxBasicComponent,
            textbox_mask_component_1.ExceedraTextboxMaskComponent,
            textbox_numeric_component_1.ExceedraTextboxNumericComponent,
            datepicker_component_1.ExceedraDatepickerComponent,
            label_component_1.ExceedraLabelComponent,
            msdropdown_component_1.ExceedraMSDropdownComponent,
            ssdropdown_component_1.ExceedraSSDropdownComponent,
            example_component_1.ExampleComponent,
            textbox_basic_demo_1.ExceedraTextboxBasicDemoComponent,
            textbox_numeric_demo_1.ExceedraTextboxNumericDemoComponent,
            textbox_mask_demo_1.ExceedraTextboxMaskDemoComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map