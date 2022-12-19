import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class countrypipe implements PipeTransform {

  transform(phone:any,country:any): any {
    if(country=="ind"){
      return "+91" +phone;
    }
    else if(country=="us"){
      return "+461"+phone;
    }
    else{
      return "+001"+phone;
    }
  }

}
