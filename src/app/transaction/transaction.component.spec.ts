import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CoreModule, TransactionService } from '../core';
import { SharedModule } from '../shared/shared.module';
import { FilterToggleComponent } from './components/filter-toggle/filter-toggle.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      declarations: [TransactionComponent, TransactionItemComponent, SearchFilterComponent, TransferFormComponent, FilterToggleComponent],
      imports: [
        CommonModule,
        CoreModule,
        SharedModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
