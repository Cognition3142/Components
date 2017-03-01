import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import {TextboxNumeric} from '../../../models/textbox/textbox.numeric.model';

@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric',
    templateUrl: 'textbox.numeric.component.html',
    styleUrls: ['textbox.numeric.component.css'],
})

export class ExceedraTextboxNumericComponent implements OnChanges {

    @Input()
    setup: TextboxNumeric;

    //Allows the control to override user input. True if min or max set.
    public autoCorrect: boolean;

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        for (let name in changes)
        {
            if (name === 'setup')
            {
                if (this.setup.max || this.setup.min) {
                    this.autoCorrect = true;
                }
            }
        }
    }

}
