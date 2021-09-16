import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Account, Transaction, TransactionService } from 'src/app/core';
import { beneficiaries } from 'src/app/core/mock/beneficiaries';
import { Beneficiary } from 'src/app/core/models/beneficiary.model';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  @Input() account!: Account;
  beneficiaries: Beneficiary[] = [];
  transferPayload: Transaction | undefined ;
  showPreview: boolean = false;

  constructor(private transactionService : TransactionService, private fb : FormBuilder) { }

  transferForm = this.fb.group({
    to : [null, Validators.required],
    amount : [null, Validators.required]
  });

  ngOnInit(): void {
    this.transactionService.getBeneficieries()
      .subscribe((beneficiaries)=>{
        this.beneficiaries = beneficiaries;
      })
  }

  get getAccountDetail(){
    return this.account ? `${this.account.type}(${this.account.accountLast4}) - ${this.account.currency} ${this.account.balance}` : ''
  }

  handleSubmit(){
    if(!this.showPreview){
      this.previewTransfer()
    }else{
      this.transfer()
    }
  }

  previewTransfer(){
    const {amount, to} = this.transferForm.getRawValue();
    const { categoryCode, merchant, merchantLogo } = <Beneficiary>this.beneficiaries.find((beneficiary)=>{
      return beneficiary.id == to
    });
    this.transferPayload = {
      amount,
      merchant,
      merchantLogo,
      categoryCode,
      transactionDate : Date.now(),
      transactionType : 'Online Transaction'
    };
    this.showPreview = true;
  }

  transfer(){
    this.transactionService.transfer(<Transaction>this.transferPayload)
    this.showPreview = false;
    this.transferForm.setValue({to : null, amount: null});
  }
}
 