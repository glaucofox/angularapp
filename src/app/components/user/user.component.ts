import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent 
{

    firstName: String;
    lastName: String;
    address: object;
    age: number;
    foo: any;
    hasKids: Boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address = {
            street: '50 Main St.',
            city: 'Boston',
            state: 'MA'
        };
        this.foo = true;
        this.hasKids = false;
        this.numberArray = [1,2,3];
        this.stringArray = ['hello', 'world'];
        this.mixedArray = [true, undefined, 'foo', 13];
        this.myTuple = ['hello', 13, true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;

        console.log(this.addNumbers(2,3));
    }

    showAge(): number {
        return this.age;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

}
