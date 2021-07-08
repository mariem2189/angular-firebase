import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class FilterPipe implements PipeTransform {

  transform(objs:any, term:any):any{
    if (term===undefined) {
      return objs;
    }
    return objs.filter((obj) => {
      return (obj.name.includes(term));
      
    });
    
  }

}
