import { Component, OnInit, Input  } from '@angular/core';

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
    
    constructor() { }

    ngOnInit(): void {

    }

}
