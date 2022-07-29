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

  public constructor(private userService: UserService) { 
  }
  
  public ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  public handleAddUserClick(): void {
    this.userService.addUser();
  }

  public handleDeleteUserClick(user: UserModel) {
    this.userService.deleteUser(user);
  }
}
