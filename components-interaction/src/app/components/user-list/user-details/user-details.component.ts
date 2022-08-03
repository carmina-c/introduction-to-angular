import { Component, EventEmitter, Input, Output } from "@angular/core";

import { UserModel } from "src/app/models/user";

@Component({
	selector: "user-details",
	templateUrl: "./user-details.component.html",
	styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent  {

  @Input()
	public user?: UserModel;

  @Output()
  public onDelete = new EventEmitter<number>();

  public userInfo?: UserModel;

  public constructor() { }

  public handleDeleteClick(): void {
  	this.onDelete.emit();
  }
}
