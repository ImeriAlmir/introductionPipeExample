import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    exampleObject: Object = {
        firstName: 'John',
        lastName: 'Doe',
        programmingLanguages: [
            'Java', 'C', 'C++', 'Typescript'
        ]
    };
    exampleDate: number = Date.now();
    exampleCurrency = '0.69';
    exampleDecimal: number = 3.14159265359;
    exampleString: string = 'Lorem Ipsum';
    examplePercent: number = 0.697;
    exampleSlice: string = 'ABCDEFGHIJK';
    exampleAysnc = new Observable<string>((observer: Observer<string>) => {
        setInterval(() => observer.next(new Date().toString()), 1000);
    });
}
