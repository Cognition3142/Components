import { Component, OnInit } from '@angular/core';

//import { ExceedraTextboxNumericComponent } from '../../../components/textbox.component/textbox.numeric.component/textbox.numeric.component';
import {TextboxNumeric} from '../../../models/textbox/textbox.numeric.model';


@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric-demo',
    templateUrl: 'textbox.numeric.demo.html',
    styleUrls: ['textbox.numeric.demo.css']
})

export class ExceedraTextboxNumericDemoComponent implements OnInit {

    initialSetup: TextboxNumeric = {
        value: 500.004,
        autoCorrect: true,
        format: 'n3',
        min: undefined,
        max: undefined
    };

    constructor() { }

    ngOnInit(): void {

        console.log(this.initialSetup.max);
        console.log(this.initialSetup.min);
        if (this.initialSetup.max || this.initialSetup.min) {
            console.log("truthy");
            this.initialSetup.autoCorrect = true;
        }
    }

}
