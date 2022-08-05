import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogService } from "src/app/services/dog-api.service";

@Component({
	selector: "breed",
	templateUrl: "./breed.component.html",
	styleUrls: ["./breed.component.css"]
})
export class BreedComponent implements OnInit {

	public breedName: string = "";
	public breedImageURL: string = "";
	public breedImageStatus: string = "";
	public subBreedNames: string[] = [];

	public constructor(
		private dogService: DogService,
		private activatedRoute: ActivatedRoute
	) {
		this.prepareNameFromURL();
	}

	public ngOnInit(): void {
		this.prepareBreedImage();
		this.prepareSubBreedNames();
	}

	private prepareNameFromURL(): void {
		this.activatedRoute.params.subscribe(params => {
			this.breedName = params["name"];
		});
	}

	private prepareBreedImage(): void {
		this.dogService.getBreedImage(this.breedName).subscribe(
			(image) => {
				this.breedImageURL = image.message;
				this.breedImageStatus = image.status;
			}
		);
	}

	private prepareSubBreedNames(): void {
		this.dogService.getSubBreedNames(this.breedName).subscribe(
			(subBreedNames) => this.subBreedNames = subBreedNames.message
		);
	}

}