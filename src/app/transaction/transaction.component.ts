import { Component, OnInit } from '@angular/core';
import { searchFilter, Transaction, TransactionService } from '../core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  searchFilter : searchFilter = {search : '', amountSort : false, dateSort : false, beneficiarySort : false};

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(({ data }) => {
      this.transactions = data
    })
  }

  handleFilterChange(e : searchFilter){
    this.searchFilter = e;
  }

  

  

  
}
