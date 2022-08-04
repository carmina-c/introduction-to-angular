import { Component } from "@angular/core";

import { DogService } from "src/app/services/dog-api.service";

@Component({
	selector: "dog-list",
	templateUrl: "./dogs.component.html",
	styleUrls: ["./dogs.component.css"]
})
export class DogsComponent {

	public breedNames: string[] = [];

	public constructor(private dogService: DogService) {
		this.prepareBreedNames();
	}

	private prepareBreedNames(): void {
		this.dogService.getBreedNames().subscribe(
			(breedNames) => this.breedNames = Object.keys(breedNames.message)
		);
	}
}