import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core';




@NgModule({
  declarations: [TransactionComponent, TransactionItemComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports : [
    TransactionComponent
  ]
})
export class TransactionModule { }
