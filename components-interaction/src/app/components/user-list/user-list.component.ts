import { Component, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

  public users: UserModel[] = [];
  public newUser?: UserModel;

  public constructor(private userService: UserService) { 
  }
  
  public ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  public addUserOnClick(): void {
    let nameBox = prompt("Please enter your name:", "");
    const emailBox = prompt("Please enter your email:", "");
    if(nameBox !== null && emailBox !== null){
      const date = new Date();
      this.newUser = {name: nameBox, email: emailBox, dateOfBirth: date};
      this.userService.addUser(this.newUser);
    }
  }

  public deleteUserOnClick(user: UserModel){
    this.userService.deleteUser(user);
  }
}
