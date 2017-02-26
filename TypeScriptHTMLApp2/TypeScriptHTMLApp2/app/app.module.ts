import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* 3rd Part Modules */
import { InputsModule } from '@progress/kendo-angular-inputs';

/* Exceedra Components */
import { ExceedraCheckboxComponent } from './components/checkbox.component/checkbox.component';
import { ExceedraTextboxMaskComponent } from './components/textbox.component/textbox.mask.component/textbox.mask.component';
import { ExceedraTextboxNumericComponent } from './components/textbox.component/textbox.numeric.component/textbox.numeric.component';
import { ExceedraTextboxBasicComponent } from './components/textbox.component/textbox.basic.component/textbox.basic.component';

import { ExceedraDatepickerComponent } from './components/datepicker.component/datepicker.component';
import { ExceedraLabelComponent } from './components/label.component/label.component';
import { ExceedraMSDropdownComponent } from './components/msdropdown.component/msdropdown.component';
import { ExceedraSSDropdownComponent } from './components/ssdropdown.component/ssdropdown.component';

/* Example Building Component */
import { XmlCoverterComponent } from './demo/xmlconverter.component/xmlconverter.component';

/* Exceedra Component Demos */
import { ExceedraTextboxBasicDemoComponent } from './demo/textbox/textbox.basic/textbox.basic.demo';
import { ExceedraTextboxNumericDemoComponent } from './demo/textbox/textbox.numeric/textbox.numeric.demo';
import { ExceedraTextboxMaskDemoComponent } from './demo/textbox/textbox.mask/textbox.mask.demo';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, InputsModule],
    declarations:
    [
        AppComponent,
        ExceedraCheckboxComponent,
        ExceedraTextboxBasicComponent,
        ExceedraTextboxMaskComponent,
        ExceedraTextboxNumericComponent,
        ExceedraDatepickerComponent,
        ExceedraLabelComponent,
        ExceedraMSDropdownComponent,
        ExceedraSSDropdownComponent,

        XmlCoverterComponent,

        ExceedraTextboxBasicDemoComponent,
        ExceedraTextboxNumericDemoComponent,
        ExceedraTextboxMaskDemoComponent
    ],
    entryComponents: [ExceedraTextboxBasicComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }