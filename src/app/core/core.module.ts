import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    TransactionService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
