import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogService } from "src/app/services/dog-api.service";

@Component({
	selector: "app-breed",
	templateUrl: "./breed.component.html",
	styleUrls: ["./breed.component.css"]
})
export class BreedComponent implements OnInit {

	public breedName: string = "";
	public breedImageURL: string = "";
	public subBreedNames: string[] = [];

	public constructor(
		private dogService: DogService,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe(params => {
			this.breedName = params["name"];
		});
	}

	public ngOnInit(): void {
		this.dogService.getBreedImage(this.breedName).subscribe({
			next: image => this.breedImageURL = image.message
		});
		this.dogService.getSubBreeds(this.breedName).subscribe({
			next: subBreads => this.subBreedNames = subBreads.message
		});
	}

}