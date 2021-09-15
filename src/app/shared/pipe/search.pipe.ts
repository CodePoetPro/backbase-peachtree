import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Transaction[], searchKey: String): Transaction[] {
    return searchKey ? value.filter((transaction) => {
      return transaction.merchant.toLowerCase().concat(transaction.transactionType.toLowerCase()).includes(searchKey.toLowerCase())
    }) : value;
  }
}
