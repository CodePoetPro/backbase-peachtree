import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { searchFilter } from 'src/app/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  showClear: boolean = false;

  @Output() filter = new EventEmitter<searchFilter>();

  form = this.fb.group({
    search: [null],
    dateSort : ['dsc'],
    beneficiarySort : ['norm'],
    amountSort : ['norm']
  })

  ngOnInit(): void {
    this.getValueChanges()
  }

  

  getValueChanges(){
    this.form.valueChanges.pipe(debounceTime(100)).
    subscribe((value)=>{
      console.log(value);
      this.showClear = !!value.search;
      this.filter.emit(<searchFilter>value);
    })
  }

  handleSort(e:string,type:string){
    switch (type) {
      case 'date':
        this.form.patchValue({dateSort : e}, {emitEvent : true})
        break;
      case 'beneficiary':
        this.form.patchValue({beneficiarySort : e}, {emitEvent : true})
        break;
      case 'amount':
        this.form.patchValue({amountSort : e}, {emitEvent : true})
        break;
      default:
        break;
    }
  }

  clearSearch(){
    this.form.patchValue({search : null}, {emitEvent : true});
  }
}


