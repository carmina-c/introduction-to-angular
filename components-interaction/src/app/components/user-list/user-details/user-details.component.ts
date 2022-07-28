import { Component, Input, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/user";

@Component({
  selector: "user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {

  @Input()
  public user?: UserModel;

  public constructor() { }

  public ngOnInit(): void {
    if(this.user){
      console.log(this.user.dateOfBirth);
    }
  }

}
