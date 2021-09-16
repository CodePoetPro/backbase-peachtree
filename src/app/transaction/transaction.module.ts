import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { CoreModule } from '../core';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';
import { FilterToggleComponent } from './components/filter-toggle/filter-toggle.component';




@NgModule({
  declarations: [TransactionComponent, TransactionItemComponent, SearchFilterComponent, TransferFormComponent, FilterToggleComponent],
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
