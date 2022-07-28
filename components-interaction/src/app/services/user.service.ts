import { Injectable } from "@angular/core";

import { UserModel } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private users: UserModel[] = [];

  public constructor() { 
    this.users = [
      {name: "Ana Popescu", email: "ana.popescu@gmail.com", dateOfBirth: new Date("01/23/2000")},
      {name: "Elena Ion", email: "elena.ion@gmail.com", dateOfBirth: new Date("04/29/2020")},
      {name: "Alex Ionescu", email: "alex.ionescu@gmail.com", dateOfBirth: new Date("07/12/1999")},
      {name: "Vlad Zorlescu", email: "vlad.zorlescu@gmail.com", dateOfBirth: new Date("03/27/1990")}
    ];
  }

  public getUsers(): UserModel[] {
    return this.users;
  }
  
  public addUser(): void {
    const nameBox = prompt("Please enter your name:", "");
    const emailBox = prompt("Please enter your email:", "");
    if (nameBox && emailBox) {
      const newUser: UserModel = {
         name: nameBox, 
         email: emailBox, 
         dateOfBirth: new Date()
      };
      this.users.push(newUser);
    }
  }

  public deleteUser(user?: UserModel): void {
    if (user) {
      this.users.splice(this.users.indexOf(user), 1)
    }
  }
}
