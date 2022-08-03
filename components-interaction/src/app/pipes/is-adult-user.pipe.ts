import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "isAdultUser"
})
export class IsAdultUserPipe implements PipeTransform {

	public transform(age: number): boolean {
		return age >= 18;
	}
}
