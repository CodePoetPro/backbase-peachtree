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

  @Output() filter = new EventEmitter<searchFilter>();

  form = this.fb.group({
    search: [null],
    dateSort : [false],
    beneficiarySort : [false],
    amountSort : [false]
  })

  ngOnInit(): void {
    this.getValueChanges()
  }

  

  getValueChanges(){
    this.form.valueChanges.pipe(debounceTime(100)).
    subscribe((value)=>{
      this.filter.emit(<searchFilter>value);
    })
  }
}


