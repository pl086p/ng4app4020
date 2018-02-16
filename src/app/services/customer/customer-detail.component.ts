import { Component, Input } from '@angular/core';
import { CustomerType } from '../api/customer-type';

@Component({
  selector: 'tag-customer-detail',
  templateUrl:  './customer-detail.component.html',
})
export class CustomerDetailComponent {
  @Input() customer: CustomerType;
}