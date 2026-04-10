import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {

  transform(user:any): string {
    return (user.gender === 'F')? 'mrs. ' + user?.name :'mr. ' + user?.name;
  }

}
