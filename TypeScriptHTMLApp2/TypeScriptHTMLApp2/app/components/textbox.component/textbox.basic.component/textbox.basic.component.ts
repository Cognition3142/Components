import { Component, OnInit, Input } from '@angular/core';

import {TextboxBasic} from '../../../models/textbox/textbox.basic.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-basic',
    templateUrl: 'textbox.basic.component.html',
    styleUrls: ['textbox.basic.component.css'],
})

export class ExceedraTextboxBasicComponent implements OnInit {

    @Input()
    setup: TextboxBasic;

    constructor() { }

    ngOnInit(): void {


    }

}
