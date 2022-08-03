import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogApiService } from "src/app/services/dog-api.service";

@Component({
	selector: "app-breed",
	templateUrl: "./breed.component.html",
	styleUrls: ["./breed.component.css"]
})
export class BreedComponent implements OnInit {

	public breedName: string = "";
	public breedImage: string = "";
	public subBreeds: string[] = [];

	public constructor(private dogService: DogApiService,  private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.breedName = params["name"];
		});
	}

	public ngOnInit(): void {
		this.dogService.getBreedImage(this.breedName).subscribe({
			next: image => this.breedImage = image.message
		});
		this.dogService.getSubBreeds(this.breedName).subscribe({
			next: subBreads => this.subBreeds = subBreads.message
		});
	}

}