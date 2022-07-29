import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { UserModel } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private users: UserModel[] = [];

  private id: number = 0;

  public constructor() { 
    this.users = [
      {id: 0, name: "Ana Popescu", email: "ana.popescu@gmail.com", dateOfBirth: new Date("01/23/2000")},
      {id: 1, name: "Elena Ion", email: "elena.ion@gmail.com", dateOfBirth: new Date("04/29/2020")},
      {id: 2, name: "Alex Ionescu", email: "alex.ionescu@gmail.com", dateOfBirth: new Date("07/12/1999")},
      {id: 3, name: "Vlad Zorlescu", email: "vlad.zorlescu@gmail.com", dateOfBirth: new Date("03/27/1990")}
    ];
    this.id = this.users.length;
  }

  public getUsers(): UserModel[] {
    return this.users;
  }
  
  public addUser(): void {
    const nameBox = prompt("Please enter your name:", "");
    const emailBox = prompt("Please enter your email:", "");
    if (nameBox && emailBox) {
      const newUser: UserModel = {
        id: this.id,
        name: nameBox, 
        email: emailBox, 
        dateOfBirth: new Date()
      };
      this.users.push(newUser);
      this.id++;
    }
  }

  public deleteUser(user: UserModel): void {
    if (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  }

  public getUser(id: number): Observable<UserModel> {
    const user = this.users.find(user => user.id === id)!;
    return of(user);
  }
}
