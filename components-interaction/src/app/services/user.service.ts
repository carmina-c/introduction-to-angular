import { Injectable } from "@angular/core";

import { UserModel } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private users: UserModel[] = [];

  constructor() { }

  public getUsers(): UserModel[] {
    this.users = [
      {name: "Ana Popescu", email: "ana.popescu@gmail.com", dateOfBirth: new Date("01/23/2000")},
      {name: "Elena Ion", email: "elena.ion@gmail.com", dateOfBirth: new Date("04/29/2020")},
      {name: "Alex Ionescu", email: "alex.ionescu@gmail.com", dateOfBirth: new Date("07/12/1999")},
      {name: "Vlad Zorlescu", email: "vlad.zorlescu@gmail.com", dateOfBirth: new Date("03/27/1990")}
    ];
    return this.users;
  }

  public addUser(user: UserModel): void {
    this.users.push(user);
  }

  public deleteUser(user?: UserModel): void {
    if(user){
      this.users.splice(this.users.indexOf(user), 1)
    }
  }
}
