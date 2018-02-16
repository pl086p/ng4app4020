import { Component, Input } from '@angular/core';
import { EmployeeType } from '../api/employee-type';

@Component({
  selector: 'tag-employee-detail',
  templateUrl:  './employee-detail.component.html',
})
export class EmployeeDetailComponent {
  @Input() employee: EmployeeType;
}