import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { UserModel } from "src/app/models/user";

@Component({
  selector: "user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {

  @Input()
  public user?: UserModel;

  @Output() 
  deleteUserEvent = new EventEmitter<any>();
  
  public deleteUser() {
    this.deleteUserEvent.emit();   
  }

  public constructor() { }

  public ngOnInit(): void {
  }
}
