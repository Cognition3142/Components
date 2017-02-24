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
import { ExceedraTextboxComponent } from './components/textbox.component/textbox.component';
import { ExceedraTextboxNumericComponent } from './components/textbox.component/textbox.numeric.component/textbox.numeric.component';
import { ExceedraTextboxNumericDemoComponent } from './demo/textbox/textbox.numeric/textbox.numeric.demo';
import { ExceedraDatepickerComponent } from './components/datepicker.component/datepicker.component';
import { ExceedraLabelComponent } from './components/label.component/label.component';
import { ExceedraMSDropdownComponent } from './components/msdropdown.component/msdropdown.component';
import { ExceedraSSDropdownComponent } from './components/ssdropdown.component/ssdropdown.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule, InputsModule],
    declarations:
    [
        AppComponent,
        ExceedraCheckboxComponent,
        ExceedraTextboxComponent,
        ExceedraTextboxNumericComponent,
        ExceedraTextboxNumericDemoComponent,
        ExceedraDatepickerComponent,
        ExceedraLabelComponent,
        ExceedraMSDropdownComponent,
        ExceedraSSDropdownComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }