import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {Example} from './example.model';

@Component({
    moduleId: module.id,
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.css'],
})

export class ExampleComponent implements OnInit {

    @Input()
    setup: Example;

    trustedDemoHtml: SafeHtml;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.trustedDemoHtml = this.sanitizer.bypassSecurityTrustHtml(this.setup.demoHtml);

    }

}
