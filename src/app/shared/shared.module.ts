import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchPipe } from './pipe/search.pipe';
import { SortPipe } from './pipe/sort.pipe';



@NgModule({
  declarations: [
    CardComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CardComponent,
    SearchPipe,
    SortPipe
  ]
})
export class SharedModule { }
