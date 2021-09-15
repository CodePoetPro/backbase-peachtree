import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as transaction  from '../mock/transactions'
import { BehaviorSubject, Subject } from 'rxjs';
 
@Injectable()
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(){
    return new BehaviorSubject(transaction);
  }
}
