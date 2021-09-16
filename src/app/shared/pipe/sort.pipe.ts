import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], sort: String, sortKey:any ): Transaction[] {
    switch (sort) {
      case 'dsc':
       return value.sort((a,b)=>{
          if(a[sortKey] < b[sortKey]){
            return 1
          }
          if(a[sortKey] > b[sortKey]){
            return -1
          }
          return 0
        })
      case 'asc':
        return value.sort((a,b)=>{
          if(a[sortKey] < b[sortKey]){
            return -1
          }
          if(a[sortKey] > b[sortKey]){
              return 1
            }
         return 0
      })
      default:
        return value;
    }

    
  }

}
