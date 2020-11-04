import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = []
    showExtended: boolean = true
    loaded: boolean = false
    enableAdd: boolean = true

    constructor() { }

    ngOnInit(): void {

        this.users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                address: {
                    street: '50 Main st.',
                    city: 'Boston',
                    state: 'MA'
                },
                image: 'http://lorempixel.com/600/600/people/3',
                isActive: false
            },
            {
                firstName: 'Kevin',
                lastName: 'Johnson',
                age: 34,
                address: {
                    street: '20 School st.',
                    city: 'Lynn',
                    state: 'MA'
                },
                image: 'http://lorempixel.com/600/600/people/2',
                isActive: true
            },
            {
                firstName: 'Karen',
                lastName: 'Williams',
                age: 26,
                address: {
                    street: '55 Mill st.',
                    city: 'Miami',
                    state: 'FL'
                },
                image: 'http://lorempixel.com/600/600/people/1',
                isActive: true
            }
        ]

        this.loaded = true

        this.showExtended = true
    }

    addUser(user: User) {
        this.users.push(user)
    }

}
