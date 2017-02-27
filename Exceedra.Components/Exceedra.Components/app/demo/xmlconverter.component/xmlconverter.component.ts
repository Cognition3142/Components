import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import { XmlModel } from './xmlconverter.model';

import { ExceedraTextboxBasicComponent } from '../../components/textbox.component/textbox.basic.component/textbox.basic.component';


@Component({
    moduleId: module.id,
    selector: 'xml-converter',
    templateUrl: 'xmlconverter.component.html',
    styleUrls: ['xmlconverter.component.css']
})

export class XmlCoverterComponent implements OnInit {

    @Input()
    setup: XmlModel;

    @Output() onJsonOutChange = new EventEmitter<string>();
    
    //jsonOut: string = "{'TestKey': 'TestObject'}";

    constructor() { }

    ngOnInit(): void {
        //TODO: Push the xmlModel.xml value to our webservice for conversion to JSON.
    }
    
    manualOutput() {
        console.log("Starting manual output...");
        this.onJsonOutChange.emit(this.setup.json);
    }
}
