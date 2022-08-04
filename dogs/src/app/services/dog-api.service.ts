import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DogService {

	private apiURL = "https://dog.ceo/api/";

	public constructor(private http: HttpClient) { }

	public getBreedNames(): Observable<any> {
		const allDogsUrl = this.apiURL + "breeds/list/all";
		return this.http.get<any>(allDogsUrl);
	}

	public getBreedImage(breed: string): Observable<any> {
		const breedImageUrl = this.apiURL + "breed/" + breed + "/images/random";
		return this.http.get<any>(breedImageUrl);
	}

	public getSubBreedNames(breed: string): Observable<any> {
		const subBreedNamesUrl = this.apiURL + "breed/" + breed + "/list";
		return this.http.get<any>(subBreedNamesUrl);
	}

	public getSubBreedImage(breed: string, subBreed: string): Observable<any> {
		const subBreedImageUrl = this.apiURL + "breed/" + breed + "/" + subBreed + "/images/random";
		return this.http.get<any>(subBreedImageUrl);
	}
}