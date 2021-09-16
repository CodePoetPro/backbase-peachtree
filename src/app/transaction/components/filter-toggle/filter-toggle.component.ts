import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-toggle',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.scss']
})
export class FilterToggleComponent implements OnInit {


  @Input() sort : string = 'norm';
  @Input() text! : string;
  @Output() sortOut = new EventEmitter<string>();
  

  icon:any = {
    asc  : "../../../../assets/icons/up-arrow.svg",
    dsc  : "../../../../assets/icons/down-arrow.svg",
    norm : ""
  }


  constructor() { }

  ngOnInit(): void {
  }

  toggleSort(){
    switch (this.sort) {
      case 'norm':
        this.sort = 'asc'
        break;
      case 'asc':
        this.sort = 'dsc'
        break;
      default:
        this.sort = 'norm'
        break;
    }
    this.sortOut.emit(this.sort)
  }

}
