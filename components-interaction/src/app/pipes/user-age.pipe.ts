import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userAge"
})
export class UserAgePipe implements PipeTransform {

  public transform(dateOfBirth: Date | undefined): number {
    if(dateOfBirth){
      const difference = Date.now() - dateOfBirth.getTime();  
      const ageDate = new Date(difference);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return 0;
  }
}
