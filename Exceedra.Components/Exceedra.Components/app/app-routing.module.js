"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var checkbox_component_1 = require("./components/checkbox.component/checkbox.component");
var datepicker_component_1 = require("./components/datepicker.component/datepicker.component");
var label_component_1 = require("./components/label.component/label.component");
var msdropdown_component_1 = require("./components/msdropdown.component/msdropdown.component");
var ssdropdown_component_1 = require("./components/ssdropdown.component/ssdropdown.component");
var textbox_basic_demo_1 = require("./demos/textbox/textbox.basic/textbox.basic.demo");
var textbox_numeric_demo_1 = require("./demos/textbox/textbox.numeric/textbox.numeric.demo");
var textbox_mask_demo_1 = require("./demos/textbox/textbox.mask/textbox.mask.demo");
var routes = [
    { path: '', redirectTo: '/textboxbasic', pathMatch: 'full' },
    { path: 'textboxbasic', component: textbox_basic_demo_1.ExceedraTextboxBasicDemoComponent },
    { path: 'textboxmask', component: textbox_mask_demo_1.ExceedraTextboxMaskDemoComponent },
    { path: 'textboxnumeric', component: textbox_numeric_demo_1.ExceedraTextboxNumericDemoComponent },
    { path: 'label', component: label_component_1.ExceedraLabelComponent },
    { path: 'datepicker', component: datepicker_component_1.ExceedraDatepickerComponent },
    { path: 'checkbox', component: checkbox_component_1.ExceedraCheckboxComponent },
    { path: 'ssdropdown', component: ssdropdown_component_1.ExceedraSSDropdownComponent },
    { path: 'msdropdown', component: msdropdown_component_1.ExceedraMSDropdownComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map