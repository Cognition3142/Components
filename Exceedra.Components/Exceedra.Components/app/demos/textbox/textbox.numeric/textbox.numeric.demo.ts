import { Component } from '@angular/core';

import { TextboxNumeric } from '../../../models/textbox/textbox.numeric.model';
import { ITextboxNumeric } from '../../../models/textbox/textbox.numeric.model';



@Component({
    moduleId: module.id,
    selector: 'exceedra-textbox-numeric-demo',
    templateUrl: 'textbox.numeric.demo.html',
    styleUrls: ['textbox.numeric.demo.css']
})

export class ExceedraTextboxNumericDemoComponent {

    bio: string = 
`This is a numbers only textbox.   

| Properties    | Examples      | Required  | Description               |
| ------------- |:-------------:| --------- | :---:                     |
| value         | Any number    | Yes       | Initial value.            |
| format        | n0, c2: <a href="https://msdn.microsoft.com/en-us/library/dwhawy9k.aspx">More</a>   | Yes       | Format for value.        |
| min           | Any number    | No        | Min. possible value.      |
| max           | Any number    | No        | Max. possible value.      |

`;

    /* Demo one... */

    demoOneMarkdownString: string =
`### Demo One - Basic
---
Here is a simple demo displaying the JSON shape required for a numeric textbox.`;
    demoOneXmlIn: string = 'This is the xml in...';
    demoOneJsonOut: string = `{ "value": 500.004, "format": "n3" }`;
    demoOneModelInput: TextboxNumeric = <ITextboxNumeric>JSON.parse(this.demoOneJsonOut);

    jsonOutChange(event: string) {
        try {
            this.demoOneModelInput = <ITextboxNumeric>JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }



    /* Demo two... */

    demoTwoMarkdownString: string =
`### Demo Two - Min & Max
---
Here is a demo displaying the min and max setting. You may set only one if you like.
`;
    demoTwoXmlIn: string = 'This is the xml in...';
    demoTwoJsonOut: string = `{ "value": 500.05, "format": "c2", "min": 495, "max": 505 }`;
    demoTwoModelInput: TextboxNumeric = <ITextboxNumeric>JSON.parse(this.demoTwoJsonOut);

    jsonOutChangeTwo(event: string) {
        console.log("Got json out: " + event);

        try {
            this.demoTwoModelInput = <ITextboxNumeric>JSON.parse(event);
        }
        catch (e) {
            console.log("JSON Parse Error:");
            console.log(e);
        }
    }

}
