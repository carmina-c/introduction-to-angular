import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/user";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

  public userList: UserModel[] = [
    {name: "Ana Popescu", email: "ana.popescu@gmail.com", dateOfBirth: new Date("01/23/2000")},
    {name: "Elena Ion", email: "elena.ion@gmail.com", dateOfBirth: new Date("04/29/2020")},
    {name: "Alex Ionescu", email: "alex.ionescu@gmail.com", dateOfBirth: new Date("07/12/1999")},
    {name: "Vlad Zorlescu", email: "vlad.zorlescu@gmail.com", dateOfBirth: new Date("03/27/1990")}
  ]

  public constructor() { }

  public ngOnInit(): void {
  }

}
