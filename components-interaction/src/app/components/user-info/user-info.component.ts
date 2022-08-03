import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserModel } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: "app-user-info",
	templateUrl: "./user-info.component.html",
	styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {

	public user?: UserModel;

	public constructor(
    private userService: UserService,
    private route: ActivatedRoute,
	) {}

	public ngOnInit(): void {
		this.prepareUser();
	}

	public prepareUser(): void {
		const id = Number(this.route.snapshot.paramMap.get("id"));
		this.userService.getUser(id)
			.subscribe(user => this.user = user);
	}
}