import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExceedraCheckboxComponent } from './components/checkbox.component/checkbox.component';
import { ExceedraTextboxComponent } from './components/textbox.component/textbox.component';
import { ExceedraDatepickerComponent } from './components/datepicker.component/datepicker.component';
import { ExceedraLabelComponent } from './components/label.component/label.component';
import { ExceedraMSDropdownComponent } from './components/msdropdown.component/msdropdown.component';
import { ExceedraSSDropdownComponent } from './components/ssdropdown.component/ssdropdown.component';
//import { ExceedraTextboxNumericComponent } from './components/textbox.component/textbox.numeric.component/textbox.numeric.component';
import { ExceedraTextboxNumericDemoComponent } from './demo/textbox/textbox.numeric/textbox.numeric.demo';


const routes: Routes = [
    { path: '', redirectTo: '/textbox', pathMatch: 'full' },
    { path: 'textbox', component: ExceedraTextboxComponent },
    //{ path: 'textboxnumeric', component: ExceedraTextboxNumericComponent },
    { path: 'textboxnumeric', component: ExceedraTextboxNumericDemoComponent },
    { path: 'label', component: ExceedraLabelComponent },
    { path: 'datepicker', component: ExceedraDatepickerComponent },
    { path: 'checkbox', component: ExceedraCheckboxComponent },
    { path: 'ssdropdown', component: ExceedraSSDropdownComponent },
    { path: 'msdropdown', component: ExceedraMSDropdownComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
