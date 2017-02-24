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

    public value: number = 5;
    public format: string = 'c2';
    public min: number;
    public max: number;
    public autoCorrect: boolean; //True if min and max set.

    constructor() { }

    ngOnInit(): void {
        //this.max = 6;
        this.min = 3;

        this.autoCorrect = true;

        console.log(this.setup);
    }

}
