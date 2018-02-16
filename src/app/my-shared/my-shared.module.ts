import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';
import { ComTitleComponent } from './com-title/com-title.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [ComTitleComponent],
  exports: [ComTitleComponent]
})
export class MySharedModule { }
