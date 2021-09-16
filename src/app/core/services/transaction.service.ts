import { Injectable } from '@angular/core';
import { transaction } from '../mock/transactions'
import { account } from '../mock/account'
import { BehaviorSubject } from 'rxjs';
import { beneficiaries } from '../mock/beneficiaries';
import { Transaction } from '..';

@Injectable({providedIn : 'root'})

export class TransactionService {
  
  transactions = new BehaviorSubject(transaction);
  account = new BehaviorSubject(account);
  beneficiaries = new BehaviorSubject(beneficiaries);
  constructor() { }

  getTransactions() {
    return this.transactions;
  }

  getAccount() {
    return this.account;
  }

  getBeneficieries() {
    return this.beneficiaries;
  }

  transfer(transferPayload : Transaction) {
    console.log("transfer service");
    const newAccount = this.account.value;
    newAccount.balance -= Number(transferPayload.amount);
    this.account.next(newAccount);
    this.transactions.next([{...transferPayload}, ...this.transactions.value]);
  }
}
