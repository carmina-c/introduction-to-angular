import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userAge"
})
export class UserAgePipe implements PipeTransform {

  public transform(dateOfBirth: Date | undefined): number {
    if (!dateOfBirth) {
      return 0;
    }
    const difference = Date.now() - dateOfBirth.getTime();  
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
