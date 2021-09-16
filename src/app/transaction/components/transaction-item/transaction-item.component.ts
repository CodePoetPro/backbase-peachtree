import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss']
})
export class TransactionItemComponent implements OnInit {

  @Input() date!: number;
  @Input() color!: string;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() amount!: string;
  @Input() currency!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
