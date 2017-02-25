import { Component, OnInit, Input } from '@angular/core';

import {TextboxNumeric} from '../../../models/textbox/textbox.numeric.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric',
    templateUrl: 'textbox.numeric.component.html',
    styleUrls: ['textbox.numeric.component.css'],
})

export class ExceedraTextboxNumericComponent implements OnInit {

    @Input()
    setup: TextboxNumeric;

    //Allows the control to override user input. True if min or max set.
    public autoCorrect: boolean; 

    constructor() { }

    ngOnInit(): void {

        //If min or max set, then autocorrect must be true.
        if (this.setup.max || this.setup.min) {
            this.autoCorrect = true;
        }

    }

}
