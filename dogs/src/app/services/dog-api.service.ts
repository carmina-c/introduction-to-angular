import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DogApiService {

	public constructor(private http: HttpClient) { }

	public prepareDogs(): Observable<any> {
		const allDogsUrl = "https://dog.ceo/api/breeds/list/all";
		return this.http.get<any>(allDogsUrl);
	}

	public getBreedImage(breed: string): Observable<any> {
		const breedImageUrl = "https://dog.ceo/api/breed/" + breed + "/images/random";
		return this.http.get<any>(breedImageUrl);
	}

	public getSubBreeds(breed: string): Observable<any> {
		const subBreedsUrl = "https://dog.ceo/api/breed/" + breed + "/list";
		return this.http.get<any>(subBreedsUrl);
	}

	public getSubBreedImage(breed: string, subBreed: string): Observable<any> {
		const subBreedImageUrl = "https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images/random";
		return this.http.get<any>(subBreedImageUrl);
	}
}