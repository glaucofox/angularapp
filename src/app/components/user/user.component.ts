import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent 
{

    firstName = 'John';
    lastName = 'Smith';
    address = {
        street: '50 Main St.',
        city: 'Boston',
        state: 'MA'
    }
    age = 30;

    constructor() {

    }

    showAge() {
        return this.age;
    }

}
