import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    CardComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CardComponent,
    SearchPipe
  ]
})
export class SharedModule { }
