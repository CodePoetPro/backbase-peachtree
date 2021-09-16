import { Component, OnInit } from '@angular/core';
import { Account, searchFilter, Transaction, TransactionService } from '../core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  searchFilter: searchFilter = { search: '', amountSort: 'norm', dateSort: 'dsc', beneficiarySort: 'norm' };
  account: Account = { balance: 0, accountLast4: '', currency: '$', type: '' };

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions
    })

    this.transactionService.getAccount().subscribe((account) => {
      this.account = account;
    })
  }

  handleFilterChange(e: searchFilter) {
    this.searchFilter = e;
  }

}
