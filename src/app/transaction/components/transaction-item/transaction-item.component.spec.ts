import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionComponent } from '../../transaction.component';
import { FilterToggleComponent } from '../filter-toggle/filter-toggle.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { TransferFormComponent } from '../transfer-form/transfer-form.component';

import { TransactionItemComponent } from './transaction-item.component';

describe('TransactionItemComponent', () => {
  let component: TransactionItemComponent;
  let fixture: ComponentFixture<TransactionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(TransactionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
