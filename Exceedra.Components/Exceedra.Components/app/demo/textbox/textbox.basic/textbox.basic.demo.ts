import { Component, OnInit } from '@angular/core';

import { XmlModel } from '../../../demo/xmlconverter.component/xmlconverter.model';
import { TextboxBasic } from '../../../models/textbox/textbox.basic.model';


@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-basic-demo',
    templateUrl: 'textbox.basic.demo.html',
    styleUrls: ['textbox.basic.demo.css']
})

export class ExceedraTextboxBasicDemoComponent implements OnInit {

    demoOneModelInput: TextboxBasic = {
        value: "ABCDEFG"
    };

    demoOneXmlIn: XmlModel = {
        xml: "XML Here",
        json: "JSON Here",
    }

    constructor() { }

    ngOnInit(): void {

    }

}
