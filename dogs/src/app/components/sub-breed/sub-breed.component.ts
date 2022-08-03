import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogApiService } from "src/app/services/dog-api.service";

@Component({
	selector: "sub-breed",
	templateUrl: "./sub-breed.component.html",
	styleUrls: ["./sub-breed.component.css"]
})
export class SubBreedComponent implements OnInit {

	public breedName: string = "";
	public subBreedName: string = "";
	public subBreedImage: string = "";

	public constructor(private dogService: DogApiService,  private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.breedName = params["name"];
			this.subBreedName = params["sub-breed"];
		})
	}

	public ngOnInit(): void {
		this.dogService.getSubBreedImage(this.breedName, this.subBreedName).subscribe({
			next: image => this.subBreedImage = image.message
		});
	}

}