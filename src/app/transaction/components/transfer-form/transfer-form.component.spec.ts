import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core';
import { account } from 'src/app/core/mock/account';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionComponent } from '../../transaction.component';
import { FilterToggleComponent } from '../filter-toggle/filter-toggle.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { TransactionItemComponent } from '../transaction-item/transaction-item.component';

import { TransferFormComponent } from './transfer-form.component';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;

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
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.account = account;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
