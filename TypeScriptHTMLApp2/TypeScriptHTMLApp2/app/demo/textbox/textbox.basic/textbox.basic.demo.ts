import { Component, OnInit } from '@angular/core';

import { Example } from '../../../demo/example.component/example.model';
import { TextboxBasic } from '../../../models/textbox/textbox.basic.model';


@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-basic-demo',
    templateUrl: 'textbox.basic.demo.html',
    styleUrls: ['textbox.basic.demo.css']
})

export class ExceedraTextboxBasicDemoComponent implements OnInit {

    demoOneInitialSetup: TextboxBasic = {
        value: "ABCDEFG"
    };

    initialSetup: Example = {
        xml: "XML Here",
        json: "JSON Here",
        demoHtml: "<exceedra-textbox-basic [setup]=\"demoOneInitialSetup\"></exceedra-textbox-basic>"
    }

    constructor() { }

    ngOnInit(): void {

    }

}
