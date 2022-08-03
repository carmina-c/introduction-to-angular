import { Component } from "@angular/core";

import { DogApiService } from "src/app/services/dog-api.service";

@Component({
	selector: "dog-list",
	templateUrl: "./dogs.component.html",
	styleUrls: ["./dogs.component.css"]
})
export class DogsComponent {

	public dogs: string[] = [];

	public constructor(private dogService: DogApiService) {
		this.dogService.prepareDogs().subscribe({
			next: dogBreeds => this.dogs = Object.keys(dogBreeds.message)
		});
	}
}