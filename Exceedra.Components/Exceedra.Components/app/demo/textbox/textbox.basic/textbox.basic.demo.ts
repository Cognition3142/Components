import { Component, OnInit } from '@angular/core';

//import { XmlModel } from '../../../demo/xmlconverter.component/xmlconverter.model';
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

    demoOneXmlIn: string = 'This is the xml in...';
    demoOneJsonOut: string = '{ "value": "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }';

    //jsonOutChange(event: string) {
    //    console.log("Got json out:");
    //    console.log(event);
    //}

    jsonOutChange(event: string) {
        console.log("Got json out: " + event);

        try {
            this.demoOneModelInput = JSON.parse(event);
        }
        catch (e)
        {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }

    constructor() { }

    ngOnInit(): void {

    }

}
